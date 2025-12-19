"use client";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, TrendingUp, Globe, Users, Target, Zap } from "lucide-react";
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
            <div className="h-3 w-3 rounded-full bg-[#6D28D9]" /> {/* Sensedia Purple Brand Color */}
            <p className="text-sm font-bold uppercase tracking-widest text-gray-500">Global GTM Strategy</p>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-[#1d1d1f] mb-6">
            Sensedia.
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-gray-400 mb-8 leading-tight">
             Shaping the Future of AI Adoption in Regulated Industries.
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
            We helped Sensedia penetrate the C-Suite in complex, regulated markets by proving that API-first strategies are the bridge between legacy systems and future agility.
          </p>
        </motion.div>

        {/* Right: Hero Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="relative aspect-video w-full rounded-3xl overflow-hidden shadow-2xl"
        >
             <Image 
                src="/project1.png" 
                alt="Sensedia Hero" 
                fill 
                className="object-cover"
                priority
             />
        </motion.div>
      </div>

      {/* --- BENTO GRID CONTENT --- */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">

        {/* 1. THE CHALLENGE (Wide Tile) */}
        <div className="md:col-span-8 bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold text-[#1d1d1f] mb-4 flex items-center gap-3">
                <Globe className="w-6 h-6 text-[#6D28D9]" />
                The Challenge: Breaking the Legacy
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
                Legacy institutions are racing to adopt AI, but rigid infrastructure holds them back. 
                Sensedia faced a critical hurdle: shifting perception from a technical vendor to a strategic enabler.
                We needed to move beyond the "IT Crowd" and speak directly to the C-Suite about ROI and Agility.
            </p>
        </div>

        {/* 2. STATS (Tall Tile - Purple Brand Color) */}
        <div className="md:col-span-4 bg-[#6D28D9] rounded-3xl p-8 md:p-12 text-white flex flex-col justify-center shadow-xl">
            <TrendingUp className="w-10 h-10 mb-8 text-white/80" />
            <div className="space-y-10">
                <div>
                    <h4 className="text-6xl font-bold mb-2 tracking-tight">142%</h4>
                    <p className="text-sm font-medium text-white/80 uppercase tracking-wide">Pipeline Growth</p>
                </div>
                <div>
                    <h4 className="text-6xl font-bold mb-2 tracking-tight">$4M</h4>
                    <p className="text-sm font-medium text-white/80 uppercase tracking-wide">New ARR</p>
                </div>
                <div>
                    <h4 className="text-6xl font-bold mb-2 tracking-tight">6 Mo</h4>
                    <p className="text-sm font-medium text-white/80 uppercase tracking-wide">ROI Period</p>
                </div>
            </div>
        </div>

        {/* 3. STRATEGY: AI ABM (Medium Tile) */}
        <div className="md:col-span-6 bg-white rounded-3xl p-8 md:p-12 shadow-sm border-t-4 border-[#6D28D9]">
            <div className="mb-6 bg-purple-50 w-12 h-12 rounded-2xl flex items-center justify-center">
                <Target className="w-6 h-6 text-[#6D28D9]" />
            </div>
            <h3 className="text-2xl font-bold text-[#1d1d1f] mb-4">1. AI-Driven ABM</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
                We combined Ideal Customer Profiles (ICPs) with real-time intent signals to filter out noise and focus purely on high-intent buyers.
            </p>
            <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-gray-500 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                    <span>Dynamic, personalized ABM campaigns.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-500 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                    <span>Accelerated MQL to SQL conversion.</span>
                </li>
            </ul>
        </div>

        {/* 4. STRATEGY: PARTNER GROWTH (Medium Tile) */}
        <div className="md:col-span-6 bg-white rounded-3xl p-8 md:p-12 shadow-sm border-t-4 border-orange-500">
             <div className="mb-6 bg-orange-50 w-12 h-12 rounded-2xl flex items-center justify-center">
                <Users className="w-6 h-6 text-orange-500" />
            </div>
            <h3 className="text-2xl font-bold text-[#1d1d1f] mb-4">2. Partner-Led Growth</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
                We operationalized a co-sell strategy with giants like AWS and Oracle, creating vertical-specific value propositions.
            </p>
            <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-gray-500 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0" />
                    <span>Optimized MDF for joint marketing.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-500 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0" />
                    <span>Penetrated enterprise accounts with trust.</span>
                </li>
            </ul>
        </div>

        {/* 5. STRATEGY: DUAL DRIVER (Wide Tile - Dark Mode) */}
        <div className="md:col-span-12 bg-[#1d1d1f] rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
             {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#6D28D9] rounded-full blur-[128px] opacity-20 -mr-20 -mt-20 pointer-events-none"></div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                    <div className="flex items-center gap-3 mb-4 text-[#6D28D9]">
                        <Zap className="w-5 h-5" />
                        <span className="font-bold tracking-widest uppercase text-sm">The Secret Sauce</span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-6">Dual-Driver Approach</h3>
                    <p className="text-gray-400 text-lg leading-relaxed mb-6">
                        To win in complex financial markets, we attacked on two fronts simultaneously. 
                        We turned technical gatekeepers into internal champions and executives into trusted partners.
                    </p>
                </div>
                <div className="bg-white/10 rounded-3xl p-8 backdrop-blur-md border border-white/10">
                    <div className="space-y-6">
                        <div className="flex gap-4 items-start">
                            <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center font-bold shrink-0">1</div>
                            <div>
                                <p className="font-bold text-white text-lg">Top-Down (C-Suite)</p>
                                <p className="text-gray-400 leading-relaxed">Targeted with narratives around ROI, Market Share, and Digital Agility.</p>
                            </div>
                        </div>
                        <div className="w-full h-[1px] bg-white/10" />
                        <div className="flex gap-4 items-start">
                             <div className="w-8 h-8 rounded-full bg-[#6D28D9] text-white flex items-center justify-center font-bold shrink-0">2</div>
                            <div>
                                <p className="font-bold text-white text-lg">Bottom-Up (DevOps)</p>
                                <p className="text-gray-400 leading-relaxed">Armed with technical proof points, demos, and fully supported pilots.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </main>
  );
}