// app/layout.tsx
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "./Providers";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "WallnutFlow",
  description: "Automated Client Acquisition System for Agencies 🚀",
  icons: {
    icon: "/logo.png",          // favicon shown in browser tab
    shortcut: "/logo.png",      // ensures compatibility
    apple: "/logo.png",         // iPhone/iPad bookmark icon
  },
  openGraph: {
    title: "WallnutFlow",
    description: "Automated Client Acquisition System for Agencies 🚀",
    url: "https://wallnutflow.vercel.app",  // your live domain
    siteName: "WallnutFlow",
    images: [
      {
        url: "/logo.png",       // shown when shared on social media
        width: 800,
        height: 800,
        alt: "WallnutFlow Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable} suppressHydrationWarning>
      <body className={poppins.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}


