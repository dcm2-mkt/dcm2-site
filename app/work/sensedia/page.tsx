"use client";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, CheckCircle2, TrendingUp, Users, Globe } from "lucide-react";
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
            <div className="h-3 w-3 rounded-full bg-[#6D28D9]" /> {/* Sensedia Purple Dot */}
            <p className="text-sm font-bold uppercase tracking-widest text-gray-500">Global GTM Strategy</p>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-[#1d1d1f] mb-6">
            Sensedia.
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-gray-400 mb-8 leading-tight">
             [cite_start]Shaping the Future of AI Adoption in Regulated Industries[cite: 5].
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
            [cite_start]We helped Sensedia penetrate the C-Suite in complex, regulated markets by proving that API-first strategies are the bridge between legacy systems and future agility[cite: 9].
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
             />
        </motion.div>
      </div>

      {/* --- BENTO GRID CONTENT --- */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">

        {/* 1. THE CHALLENGE (Wide Tile) */}
        <div className="md:col-span-8 bg-white rounded-3xl p-8 md:p-12 shadow-sm">
            <h3 className="text-2xl font-bold text-[#1d1d1f] mb-4 flex items-center gap-3">
                <Globe className="w-6 h-6 text-[#6D28D9]" />
                [cite_start]The Challenge: Breaking the Legacy [cite: 6]
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
                [cite_start]Legacy institutions are racing to adopt AI, but rigid infrastructure holds them back[cite: 7]. 
                [cite_start]Sensedia faced a critical hurdle: shifting perception from a technical vendor to a strategic enabler[cite: 8].
                We needed to move beyond the "IT Crowd" and speak directly to the C-Suite about ROI and Agility.
            </p>
        </div>

        {/* 2. STATS (Tall Tile) */}
        <div className="md:col-span-4 bg-[#6D28D9] rounded-3xl p-8 md:p-12 text-white flex flex-col justify-center shadow-lg">
            <TrendingUp className="w-10 h-10 mb-6 text-white/80" />
            <div className="space-y-8">
                <div>
                    <h4 className="text-5xl font-bold mb-1">142%</h4>
                    <p className="text-sm font-medium text-white/80 uppercase tracking-wide">Pipeline Growth</p>
                </div>
                <div>
                    <h4 className="text-5xl font-bold mb-1">$4M</h4>
                    <p className="text-sm font-medium text-white/80 uppercase tracking-wide">New ARR</p>
                </div>
                <div>
                    <h4 className="text-5xl font-bold mb-1">6 Mo</h4>
                    <p className="text-sm font-medium text-white/80 uppercase tracking-wide">ROI Period</p>
                </div>
            </div>
        </div>

        {/* 3. STRATEGY: AI ABM (Medium Tile) */}
        <div className="md:col-span-6 bg-white rounded-3xl p-8 md:p-12 shadow-sm border-t-4 border-[#6D28D9]">
            <h3 className="text-xl font-bold text-[#1d1d1f] mb-4">AI-Driven ABM</h3>
            <p className="text-gray-600 mb-6">
                [cite_start]We combined Ideal Customer Profiles (ICPs) with real-time intent signals to identify high-value accounts[cite: 19].
            </p>
            <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-gray-500">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                    [cite_start]<span>Filtered out noise to focus on high-intent buyers[cite: 20].</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-500">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                    [cite_start]<span>Accelerated MQL to SQL conversion[cite: 25].</span>
                </li>
            </ul>
        </div>

        {/* 4. STRATEGY: PARTNER GROWTH (Medium Tile) */}
        <div className="md:col-span-6 bg-white rounded-3xl p-8 md:p-12 shadow-sm border-t-4 border-orange-500">
            <h3 className="text-xl font-bold text-[#1d1d1f] mb-4">Partner-Led Growth</h3>
            <p className="text-gray-600 mb-6">
                [cite_start]We operationalized a co-sell strategy with giants like AWS and Oracle[cite: 34].
            </p>
            <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-gray-500">
                    <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0" />
                    [cite_start]<span>Created vertical-specific value props[cite: 31].</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-500">
                    <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0" />
                    [cite_start]<span>Optimized MDF to fuel joint marketing opportunities[cite: 33].</span>
                </li>
            </ul>
        </div>

        {/* 5. STRATEGY: GLOBAL ORCHESTRATION (Wide Tile) */}
        <div className="md:col-span-12 bg-[#1d1d1f] rounded-3xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden">
             {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gray-800 rounded-full blur-3xl opacity-20 -mr-16 -mt-16 pointer-events-none"></div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                    <h3 className="text-3xl font-bold mb-4">Global Orchestration & Authority</h3>
                    <p className="text-gray-400 text-lg leading-relaxed mb-6">
                        [cite_start]We established a global content engine designed to elevate brand authority across regions[cite: 38]. 
                        [cite_start]By targeting the C-Suite with high-value insights, we warmed up decision-makers before Sales ever made a call[cite: 40].
                    </p>
                </div>
                <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                    <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">Dual-Driver Approach</h4>
                    <div className="space-y-4">
                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-white">1</div>
                            <div>
                                <p className="font-bold text-white">Top-Down</p>
                                [cite_start]<p className="text-sm text-gray-400">Targeting C-Suite with ROI & Agility narratives[cite: 43].</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                             <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-white">2</div>
                            <div>
                                <p className="font-bold text-white">Bottom-Up</p>
                                [cite_start]<p className="text-sm text-gray-400">Arming DevOps with technical proof points & pilots[cite: 43].</p>
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