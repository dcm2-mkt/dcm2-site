"use client";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, TrendingUp, Globe, Users, Target, Zap, Layers, Cpu, Briefcase } from "lucide-react";
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
            <div className="h-3 w-3 rounded-full bg-[#6D28D9]" /> {/* Sensedia Purple */}
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

        {/* 1. AI-DRIVEN ABM (Wide Tile - Broken into 3 Pillars) */}
        <div className="md:col-span-8 bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
            <div className="text-center max-w-3xl mx-auto mb-12">
                <h3 className="text-3xl font-bold text-[#1d1d1f] mb-2">AI-Driven ABM</h3>
                <p className="text-lg text-gray-500">Accelerating Demand Generation with Intelligence</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Column 1: Segmentation */}
                <div className="flex flex-col items-center text-center">
                    <div className="mb-6 bg-purple-50 w-14 h-14 rounded-2xl flex items-center justify-center">
                        <Target className="w-7 h-7 text-[#6D28D9]" />
                    </div>
                    <h4 className="text-xl font-bold text-[#1d1d1f] mb-3">Target Segmentation</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        We combined Ideal Customer Profiles (ICPs) with real-time intent signals. This allowed us to filter the noise and focus exclusively on high-value accounts.
                    </p>
                </div>

                {/* Column 2: Positioning */}
                <div className="flex flex-col items-center text-center">
                    <div className="mb-6 bg-purple-50 w-14 h-14 rounded-2xl flex items-center justify-center">
                        <Briefcase className="w-7 h-7 text-[#6D28D9]" />
                    </div>
                    <h4 className="text-xl font-bold text-[#1d1d1f] mb-3">Strategic Positioning</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        We crafted dual-narrative playbooks that equipped sales teams to speak the language of the buyer. Whether a CTO worried about uptime or a CEO worried about market share.
                    </p>
                </div>

                {/* Column 3: Execution */}
                <div className="flex flex-col items-center text-center">
                    <div className="mb-6 bg-purple-50 w-14 h-14 rounded-2xl flex items-center justify-center">
                        <Cpu className="w-7 h-7 text-[#6D28D9]" />
                    </div>
                    <h4 className="text-xl font-bold text-[#1d1d1f] mb-3">AI-Driven Execution</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        Created dynamic, personalized ABM that accelerated MQL to SQL conversion and significantly increased lead quality and shortened the sales cycles.
                    </p>
                </div>
            </div>
        </div>

        {/* 2. STATS (Purple Tile - Moved to match layout balance) */}
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

        {/* 3. PARTNER-LED GROWTH (Medium Tile) */}
        <div className="md:col-span-5 bg-white rounded-3xl p-8 md:p-12 shadow-sm border-t-4 border-orange-500">
             <div className="mb-6 bg-orange-50 w-12 h-12 rounded-2xl flex items-center justify-center">
                <Users className="w-6 h-6 text-orange-500" />
            </div>
            <h3 className="text-2xl font-bold text-[#1d1d1f] mb-4">Partner-Led Growth</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
                We operationalized a co-sell strategy with giants like AWS and Oracle.
            </p>
            <ul className="space-y-4">
                <li className="flex items-start gap-3 text-sm text-gray-500 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0" />
                    <span>Created vertical-specific value props.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-500 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0" />
                    <span>Optimized MDF to fuel joint marketing opportunities.</span>
                </li>
            </ul>
        </div>

        {/* 4. GLOBAL ORCHESTRATION (Wide Tile - Dark Mode) */}
        <div className="md:col-span-7 bg-[#1d1d1f] rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
             {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#6D28D9] rounded-full blur-[128px] opacity-20 -mr-20 -mt-20 pointer-events-none"></div>

            <div className="relative z-10">
                <div className="mb-8">
                    <h3 className="text-3xl font-bold mb-4">Global Orchestration & Authority</h3>
                    <p className="text-gray-400 leading-relaxed">
                        We established a global content engine designed to elevate brand authority across regions. 
                        By targeting the C-Suite with high-value insights, we warmed up decision-makers before Sales ever made a call.
                    </p>
                </div>
                
                <div className="bg-white/10 rounded-3xl p-6 backdrop-blur-md border border-white/10">
                    <div className="mb-4">
                        <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Dual-Driver Approach</p>
                    </div>
                    <div className="space-y-6">
                        {/* Top-Down */}
                        <div className="flex gap-4 items-start">
                            <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center font-bold shrink-0 text-sm">1</div>
                            <div>
                                <p className="font-bold text-white text-lg">Top-Down</p>
                                <p className="text-gray-400 text-sm">Targeting C-Suite with ROI & Agility narratives.</p>
                            </div>
                        </div>
                        {/* Divider */}
                        <div className="w-full h-[1px] bg-white/10" />
                        {/* Bottom-Up */}
                        <div className="flex gap-4 items-start">
                             <div className="w-8 h-8 rounded-full bg-[#6D28D9] text-white flex items-center justify-center font-bold shrink-0 text-sm">2</div>
                            <div>
                                <p className="font-bold text-white text-lg">Bottom-Up</p>
                                <p className="text-gray-400 text-sm">Arming DevOps with technical proof points & pilots.</p>
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