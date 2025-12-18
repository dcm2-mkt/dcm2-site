"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, ArrowRight, Volume2, VolumeX } from "lucide-react";

// 1. Defined the shadow style here for the white button
const SHADOW_EFFECT = "shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_24px_40px_-6px_rgba(0,0,0,0.15)] hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_30px_60px_-12px_rgba(0,0,0,0.25)]";

export default function AboutPage() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <main className="min-h-screen bg-white pt-32 pb-20">
      
      {/* 1. Header / Back Link Area */}
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <Link href="/">
          <Button variant="ghost" className="-ml-4 text-gray-500 hover:text-black transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back Home
          </Button>
        </Link>
      </div>

      {/* 2. Main Grid Layout */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-start">
        
        {/* Left Column: Video Only */}
        <div className="md:col-span-5 flex flex-col gap-8">
          
          <div className="relative group w-full aspect-[9/16] rounded-[32px] overflow-hidden shadow-[0_30px_60px_-12px_rgba(0,0,0,0.12)] bg-gray-100">
            <video 
              ref={videoRef}
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover"
              // Added click handler to video itself for easier mobile toggling
              onClick={toggleSound}
            >
              <source src="/DCM-Intro.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Sound Toggle Button */}
            <button 
              onClick={toggleSound}
              // UPDATE: opacity-100 (visible on mobile) -> md:opacity-0 (hidden on desktop initially) -> md:group-hover:opacity-100 (show on hover desktop)
              className="absolute bottom-6 right-6 p-3 rounded-full bg-black/50 backdrop-blur-md text-white opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/70 cursor-pointer z-10"
              aria-label={isMuted ? "Unmute video" : "Mute video"}
            >
              {isMuted ? (
                <VolumeX className="w-5 h-5" />
              ) : (
                <Volume2 className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Right Column: Text & Buttons */}
        <div className="md:col-span-7 flex flex-col space-y-8 md:pt-32">
          
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tighter text-[#1d1d1f]">
            Building Marketing Momentum.
          </h1>

          <div className="prose prose-lg text-gray-500 leading-relaxed space-y-6">
            <p>
              For 15 years, I’ve translated complexity and technical innovation into growth.
            </p>
            <p>
              My philosophy is simple: Unite strategic vision with precise execution. I don't believe in "random acts of marketing." I build scalable engines that fuel growth, strengthen partnerships, and elevate brand credibility.
            </p>
            <p>
              Want to create something memorable together? Let's connect on LinkedIn.
            </p>
          </div>

          {/* Buttons Container - Updated for Side-by-Side Layout */}
          <div className="pt-4 flex flex-col sm:flex-row gap-4">
            
            {/* Button 1: LinkedIn */}
            <Link href="https://www.linkedin.com/in/dcm2/" target="_blank">
              <Button className="w-[230px] rounded-full h-10 text-lg font-light tracking-wide text-white bg-[#1d1d1f] hover:bg-[#1d1d1f]/90 transition-transform hover:scale-[1.02]">
                LinkedIn
                <ArrowUpRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>

            {/* Button 2: View Work (New) */}
            <Link href="/#work">
              <Button 
                className={`w-[230px] rounded-full h-10 text-lg font-light tracking-wide bg-white text-gray-700 hover:bg-gray-50 hover:text-black transition-transform hover:scale-[1.02] ${SHADOW_EFFECT}`}
              >
                View Work
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>

          </div>

        </div>

      </div>
    </main>
  );
}