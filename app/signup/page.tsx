import Link from "next/link";
import { ArrowLeft, File } from "lucide-react";
import Readcv from "../../public/readcv.webp";
import Image from "next/image";

export default function SignupPage() {
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

          <div className="mt-4 grid md:grid-cols-2 gap-4 bg-white rounded-xl shadow-lg overflow-hidden max-w-4xl mx-auto">
            {/* Left Column - Form */}
            <div className="p-8">
              <h1 className="text-2xl font-bold mb-6">Create your account</h1>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="first-name" className="block text-sm font-medium">
                      First name
                    </label>
                    <input
                      id="first-name"
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="last-name" className="block text-sm font-medium">
                      Last name
                    </label>
                    <input
                      id="last-name"
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium">
                    Work email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="you@company.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="password" className="block text-sm font-medium">
                    Password
                  </label>
                  <input id="password" type="password" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
                  <p className="text-xs text-gray-500">Must be at least 8 characters</p>
                </div>

                <button
                  type="submit"
                  className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700"
                >
                  Create account
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  Already have an account? {" "}
                  <Link href="/login" className="text-purple-600 hover:text-purple-700 font-medium">
                    Log in
                  </Link>
                </p>
              </div>
            </div>
            
            {/* Right Column - Image */}
            <div className="relative w-full h-full">
              <Image src={Readcv} alt="Readcv" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
