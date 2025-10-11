"use client"

import { signIn } from "next-auth/react"
import { useState } from "react"
import { FcGoogle } from "react-icons/fc"
import { MdEmail } from "react-icons/md"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [agreed, setAgreed] = useState(true);

  const handleMagicLink = async () => {
    await signIn("email", { email, redirect: false })
    alert("✅ Check your inbox for a magic link.")
  }

  const handleGoogleLogin = async () => {
    await signIn("google", { callbackUrl: "/" })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white/70 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-gray-200">
        <h1 className="text-3xl font-extrabold mb-3 text-center text-gray-900">
          Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">Wallnut!</span>
        </h1>
        <p className="text-center text-gray-600 mb-6">Create your account</p>

        <div className="space-y-4">
          <div className="flex items-center border rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-pink-500">
            <div className="px-3 bg-gray-100">
              <MdEmail className="text-gray-500" />
            </div>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 outline-none bg-transparent"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mt-3 flex items-start gap-2 text-sm text-gray-500">
            <input
              type="checkbox"
              checked={agreed}
              onChange={() => setAgreed(!agreed)}
              className="mt-1"
            />
            <p>
              I agree with the{" "}
              <a href="#" className="text-blue-600 underline">
                Terms & Conditions
              </a>
            </p>
          </div>

          <button
            onClick={handleMagicLink}
            className="w-full py-2 font-semibold rounded-md text-white bg-gradient-to-r from-pink-500 to-orange-500 hover:scale-[1.01] active:scale-[0.98] transition-transform duration-150"
          >
            ✨ Send Magic Link
          </button>

          <div className="relative text-center my-4">
            <hr className="border-t border-gray-300" />
            <span className="absolute -top-3 bg-white px-3 text-sm text-gray-500 left-1/2 transform -translate-x-1/2">
              or
            </span>
          </div>

          <button
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-2 py-2 font-semibold text-gray-700 bg-white border hover:bg-gray-50 rounded-md transition"
          >
            <FcGoogle className="text-xl" />
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  )
}



