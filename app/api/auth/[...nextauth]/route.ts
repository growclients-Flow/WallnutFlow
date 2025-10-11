import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import EmailProvider from "next-auth/providers/email";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "@/lib/mongodb"; // ✅ correct import
import type { Account, User } from "next-auth";
import type { AdapterUser } from "next-auth/adapters";

// Extend Session type
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
      onboarded?: boolean;
    };
  }
}

export const authOptions: NextAuthOptions = {
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST!,
        port: 587,
        auth: {
          user: process.env.EMAIL_SERVER_USER!,
          pass: process.env.EMAIL_SERVER_PASSWORD!,
        },
      },
      from: process.env.EMAIL_FROM!,
    }),
  ],
  pages: {
    signIn: "/login",
  },
  debug: true,

  callbacks: {
    // ✅ add user id & onboarded field to session
    async session({ session, user }) {
      if (session.user) {
        session.user.id = user.id;
        // @ts-ignore (if Mongo schema has onboarded field)
        session.user.onboarded = user.onboarded ?? false;
      }
      return session;
    },

    async redirect({ url, baseUrl }: { url: string; baseUrl: string }) {
      return `${baseUrl}/Onboarding`;
    },

    async signIn({
      user,
      account,
      email,
    }: {
      user: User | AdapterUser;
      account: Account | null;
      email?: { verificationRequest?: boolean };
    }) {
      console.log("✅ signIn callback", { user, account, email });
      return true;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };













