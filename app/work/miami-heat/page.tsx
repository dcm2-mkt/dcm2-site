"use client";
import { motion } from "framer-motion";
import { ArrowLeft, Tv, Layers, ShoppingBag, DollarSign, Shirt, MonitorPlay, Settings, Zap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function CaseStudy() {
  return (
    <main className="min-h-screen bg-[#F5F5F7] pt-32 pb-24 px-6">
      
      {/* --- HEADER --- */}
      <div className="max-w-6xl mx-auto mb-12">
        <Link href="/#work">
          <Button variant="ghost" className="-ml-4 text-gray-500 hover:text-black transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Work
          </Button>
        </Link>
      </div>

      {/* --- HERO SECTION --- */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24 items-center">
        
        {/* Left: Text */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-3 w-3 rounded-full bg-[#EA3986]" /> {/* VICE Pink */}
            <p className="text-sm font-bold uppercase tracking-widest text-gray-500">Integrated Campaign</p>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-[#1d1d1f] mb-6">
            Miami Heat.
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-gray-400 mb-8 leading-tight">
             The VICE Campaign: A Cultural Phenomenon.
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
             We didn&apos;t just create a jersey; we created a cultural moment that bridged Miami&apos;s 1980s Art Deco heritage with its high-energy future.
          </p>
        </motion.div>

        {/* Right: Hero Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="relative aspect-video w-full rounded-3xl overflow-hidden shadow-2xl"
        >
             {/* Placeholder for your new image */}
             <Image 
                src="/miami-heat-hero.png" 
                alt="Miami Heat Hero" 
                fill 
                className="object-cover"
                priority
             />
        </motion.div>
      </div>

      {/* --- BENTO GRID CONTENT --- */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">

        {/* 1. THE CHALLENGE */}
        <div className="md:col-span-12 bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
            <h3 className="text-3xl font-bold text-[#1d1d1f] mb-6">The Challenge: Capturing the Soul of Miami</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="text-lg text-gray-600 leading-relaxed space-y-6">
                    <p>
                        When Nike introduced the &quot;City Edition&quot; uniform, the stakes were high: create a design that embodies the spirit of the franchise. Our challenge was to bridge the gap between Miami&apos;s 1980s Art Deco heritage and its modern, high-energy future.
                    </p>
                    <p>
                        We needed a brand identity that wasn&apos;t just a jersey, but a cultural moment that resonated globally, building a brand system that could scale across merchandise, digital media, and physical space.
                    </p>
                </div>
                 {/* Visual Highlight: Retro TV Vibe */}
                <div className="bg-[#1d1d1f] rounded-2xl p-8 flex items-center justify-center border border-gray-800 h-full relative overflow-hidden">
                    {/* Decorative Neon Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#EA3986]/20 to-[#41B6E6]/20 blur-xl"></div>
                    
                    <div className="text-center space-y-4 relative z-10">
                        <div className="w-16 h-16 bg-gradient-to-r from-[#EA3986] to-[#41B6E6] rounded-full mx-auto flex items-center justify-center">
                            <Tv className="text-white w-8 h-8" />
                        </div>
                        <h4 className="text-xl font-bold text-white">Visual Identity</h4>
                        <p className="text-sm text-gray-400 uppercase tracking-widest">Global Resonance</p>
                    </div>
                </div>
            </div>
        </div>

        {/* 2. WHAT WE DID: Immersion & Orchestration */}
        <div className="md:col-span-6 bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
            <div className="mb-6 bg-pink-50 w-12 h-12 rounded-2xl flex items-center justify-center">
                <MonitorPlay className="w-6 h-6 text-[#EA3986]" />
            </div>
            <h3 className="text-2xl font-bold text-[#1d1d1f] mb-2">The Immersion</h3>
            <p className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6">A 360° Fan Ecosystem</p>
            <p className="text-gray-600 leading-relaxed">
                We synchronized the visual identity across 2,000+ digital touchpoints within the Kaseya Center. By extending this aesthetic to Web, TV, and partnerships, we created a fully immersive &quot;VICE&quot; ecosystem, from the arena scoreboard to global broadcast campaigns. We created a seamless experience everywhere the fans engaged with the team.
            </p>
        </div>

        <div className="md:col-span-6 bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
             <div className="mb-6 bg-cyan-50 w-12 h-12 rounded-2xl flex items-center justify-center">
                <Settings className="w-6 h-6 text-[#41B6E6]" />
            </div>
            <h3 className="text-2xl font-bold text-[#1d1d1f] mb-2">The Orchestration</h3>
            <p className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6">Cross-Functional Precision</p>
            <p className="text-gray-600 leading-relaxed">
                This was a feat of cross-functional precision. We aligned Creative, Operations, and IT to deliver precision inside and outside the arena. By managing complex data streams and rigorous testing, we ensured brand integrity across global events, broadcast, arena presentation, and digital platforms.
            </p>
        </div>

        {/* 3. RESULTS (Dark Card with Neon Stats) */}
        <div className="md:col-span-12 bg-[#000000] rounded-3xl p-8 md:p-16 text-white shadow-2xl relative overflow-hidden">
             {/* Background Neon Gradient */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#EA3986] rounded-full blur-[180px] opacity-20 -ml-20 -mt-20 pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#41B6E6] rounded-full blur-[180px] opacity-20 -mr-20 -mb-20 pointer-events-none"></div>

            <div className="relative z-10 text-center mb-16">
                <p className="text-xl md:text-2xl text-white font-medium max-w-4xl mx-auto leading-relaxed">
                    &quot;In 2017-18 Miami sold more jerseys than the other 29 NBA teams combined.&quot;
                </p>
            </div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                {/* Stat 1 */}
                <div className="space-y-2">
                    <Shirt className="w-8 h-8 text-[#EA3986] mx-auto mb-4" />
                    <h4 className="text-5xl font-bold text-[#EA3986] tracking-tight">245,000</h4>
                    <p className="text-sm font-bold uppercase tracking-wide text-white">Jerseys Sold</p>
                </div>

                {/* Stat 2 */}
                <div className="space-y-2">
                     <DollarSign className="w-8 h-8 text-[#EA3986] mx-auto mb-4" />
                    <h4 className="text-5xl font-bold text-[#EA3986] tracking-tight">$25M</h4>
                    <p className="text-sm font-bold uppercase tracking-wide text-white">Revenue</p>
                </div>

                {/* Stat 3 */}
                <div className="space-y-2">
                     <ShoppingBag className="w-8 h-8 text-[#EA3986] mx-auto mb-4" />
                    <h4 className="text-5xl font-bold text-[#EA3986] tracking-tight">650,000</h4>
                    <p className="text-sm font-bold uppercase tracking-wide text-white">VICE Items Sold</p>
                </div>
            </div>
        </div>

      </div>
    </main>
  );
}