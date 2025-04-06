import Link from "next/link"
import Image from "next/image"
import { File, FileDown, Github, Heart, Settings, UploadCloud } from "lucide-react"
import Peerlist from "../public/Launch_SVG_Light.svg";
import { Safari } from "@/components/magicui/safari";
import { Spotlight } from "@/components/ui/spotlight-new";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f5f0ff] to-white">
      <div className="md:max-w-5xl max-w-screen-sm mx-auto py-8">
        {/* Header */}
        <header className="sticky top-4 z-50 flex justify-between items-center md:py-3 md:px-6 py-2 px-4 rounded-full border-2 backdrop-blur-md bg-white/60 shadow-md">
          <Link href="/" className="md:text-3xl text-xl font-semibold flex">
            <File className="mr-2 md:mt-1 mt-0 -rotate-6" size={30} />
            read.cv
          </Link>
          <div className="flex items-center md:gap-3 gap-1">
            <Link href="https://github.com/Vineetjassal/read.cv/" className="mr-1" target="_blank"><Github size={20} /></Link>
            <Link href="/login" className="text-md font-medium text-black rounded-full px-4 py-2 border-grey border-2">
              Log in
            </Link>
            <Link href="/signup" className="text-md font-medium text-white bg-purple-600 rounded-full px-4 py-2">
              Sign up
            </Link>
          </div>
        </header>

        {/* Hero Section */}
        <main className="mt-16 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white rounded-full mb-8">
            <span className="text-sm font-medium">✨ It's Opensource Project</span>
            <span className="text-xs px-1.5 py-0.5 bg-purple-600 text-white rounded-full">New</span>🎉
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-center leading-tight mb-4">
            Effortlessly rank
            <br />
            resumes in{" "}
            <span className="relative inline-block">
              minutes
              <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 12" xmlns="http://www.w3.org/2000/svg">
                <path d="M0,5 Q50,0 100,5 T200,5" fill="none" stroke="#FF6B35" strokeWidth="4" />
              </svg>
            </span>
          </h1>

          <div className="flex gap-4 mb-12">
            <Link
              href="/signup"
              className="flex items-center gap-2 bg-purple-500 hover:bg-purple-600 text-white rounded-full px-5 py-2.5 hover:rotate-0"
            >
              Get started
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="-rotate-45 border rounded-full p-1">
                <path
                  d="M13.5 4.5L21 12L13.5 19.5"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M21 12H3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link href="/demo" className=" border-2 border-purple-500 hover:bg-purple-500 hover:text-whites rounded-full px-5 py-2.5">
              Join Now
            </Link>
          </div>

          <div className="flex justify-center items-center gap-2 mb-20">
            <Image src={Peerlist} alt={""} />
          </div>

          {/* Dashboard Preview Section */}
          <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg p-6 mb-24">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xl font-bold italic">read.cv</span>
              <div className="flex items-center gap-2">
                <button className="bg-black text-white text-xs rounded-full px-3 py-1">+ New Resume</button>
                <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-2">
                <div className="bg-[#FFF9E5] rounded-lg p-4 h-64">
                  <h2 className="text-xl font-bold mb-2">Achievements Unlocked: My 2023 Resume Journal</h2>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
                    <span className="text-sm text-gray-600">John Doe • March 15, 2023</span>
                  </div>
                  <p className="text-sm text-gray-700 mb-4">
                    Hey, amazing readers! 👋 I know I am posting a blog after a long, long time. This year has been
                    jam-packed with exciting adventures. I would like to share my personal achievements of 2023 with
                    you!
                  </p>
                  <p className="text-sm text-gray-700">
                    From getting promoted into my dream team to building multiple hackathons to building amazing
                    projects, this year has given me many opportunities and taught me a lot. I hope to continue my
                    achievements and make you all proud.
                  </p>
                </div>
              </div>
              <div className="col-span-1">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h3 className="text-sm font-medium mb-2">On this page</h3>
                  <ul className="text-xs text-gray-600 space-y-2">
                    <li>• Introduction</li>
                    <li>• Getting into AI & DS</li>
                    <li>• Projects</li>
                    <li className="text-gray-400">• Stock Market Trend Prediction</li>
                    <li className="text-gray-400">• Resume Ranking AI</li>
                    <li>• My first hackathon</li>
                    <li className="text-gray-400">• Day One: The Idea</li>
                    <li className="text-gray-400">• Day Two: The Grind</li>
                    <li>• My First Paper</li>
                    <li>• Conclusion</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Section 1 */}
          <div className="bg-purple-100 p-4 rounded-xl">
          <div className="w-full mb-12">
            <h2 className="text-3xl font-bold text-center mb-2">So Easy, It's Scary</h2>
            <p className="text-center text-gray-600 mb-8">We're not responsible for sudden fame</p>

            <div className="relative">
              <Safari url="read.cv" className="size-full" />
            </div>
          </div>

          {/* Feature Grid */}
{/* Feature Grid */}
<div className="w-full grid grid-cols-1 md:grid-cols-3 md:gap-4 gap-4 mb-4 ">
  <div className="text-center border border-gray-300 rounded-lg bg-white md:p-6 p-4">
    <h3 className="font-bold mb-2 text-3xl">Upload Resumes</h3>
    <p className="text-md text-gray-600">Recruiters can upload all candidate resumes for AI processing</p>
    <div className="h-40 flex items-center justify-center text-gray-500">
      <UploadCloud size={80} />
    </div>
  </div>
  <div className="text-center border border-gray-300 bg-white rounded-lg p-6">
    <h3 className="font-bold mb-2 text-3xl">AI-Powered Ranking</h3>
    <p className="text-md text-gray-600">Resumes ranked based on recruiter needs and specified keywords</p>
    <div className="h-40 flex items-center justify-center text-gray-500">
      <Settings size={80} />
    </div>
  </div>
  <div className="text-center border border-gray-300 bg-white rounded-lg p-6">
    <h3 className="font-bold mb-2 text-3xl">Download Ranked List</h3>
    <p className="text-md text-gray-600">Export ranked candidates and their details in an Excel file</p>
    <div className="h-40 flex items-center justify-center text-gray-500">
      <FileDown size={80} />
    </div>
  </div>
</div>
</div>

         

          {/* Dark Section */}
          <section className="w-full mt-16">
          <div className="h-[50rem] md:rounded-md flex flex-col md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden mb-16">
      <Spotlight />
      <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0 text-center">
        <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
        AI-Powered Resume Ranking for Recruiters
        </h1>
        
        {/* Centered Image */}
        <div className="mt-8 flex justify-center">
          <Image 
            src="/ai-resume-ranking.png" // Replace with the actual image path
            alt="AI-Powered Resume Ranking"
            width={400} 
            height={400} 
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
    </section>


          {/* Final CTA */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">So, ready to become a recruiting superstar?</h2>
            <p className="text-gray-600 mb-8 text-md px-4">It's easier than making coffee (and less messy, probably)</p>
            <Link
              href="/signup"
              className="inline-flex bg-purple-500 hover:bg-purple-600 font-semibold text-white rounded-full px-6 py-2.5"
            >
              Sign Up - It's Free!
            </Link>
          </div>
        </main>

        <footer className="text-center justify-center text-md flex text-gray-500 py-4">Made with <span className="mx-1"><Heart size={20}/></span> by read.cv</footer>
      </div>
    </div>
  )
}

