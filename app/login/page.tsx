import Link from "next/link";
import { ArrowLeft, File } from "lucide-react";
import Readcv from "../../public/readcv.webp";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f5f0ff] to-white flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 w-full">
        {/* Header */}
        <header className="flex justify-between items-center py-6">
          <Link href="/" className="text-3xl font-bold flex">
          <File className="mr-2 mt-1 -rotate-6" size={30}/>
            read.cv
          </Link>
        </header>

        <div className="py-4 mb-8">
          <Link href="/" className="inline-flex items-center text-sm font-medium hover:text-purple-600">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to home
          </Link>

          <div className="mt-8 grid md:grid-cols-2 gap-4 bg-white rounded-xl shadow-lg overflow-hidden max-w-4xl mx-auto">
            {/* Left Column - Form */}
            <div className="p-8">
              <h1 className="text-2xl font-bold mb-6">Welcome back</h1>
              <p className="text-gray-600 mb-8">Log in to your account to continue</p>

              <form className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="you@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm font-medium">
                      Password
                    </label>
                    <Link href="/forgot-password" className="text-sm text-purple-600 hover:text-purple-700">
                      Forgot password?
                    </Link>
                  </div>
                  <input id="password" type="password" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
                </div>

                <button
                  type="submit"
                  className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700"
                >
                  Log in
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  Don't have an account? {" "}
                  <Link href="/signup" className="text-purple-600 hover:text-purple-700 font-medium">
                    Sign up
                  </Link>
                </p>
              </div>
            </div>

            {/* Right Column - Image */}
<div className="relative w-full h-full hidden md:block">
  <Image src={Readcv} alt="Readcv" className="w-full h-full object-cover" />
</div>

          </div>
        </div>
      </div>
    </div>
  );
}
