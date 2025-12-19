"use client";
import { motion } from "framer-motion";
import { ArrowLeft, Target, Compass, Bot, Users, Layers, Globe, Zap, Handshake } from "lucide-react";
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

        {/* 1. THE CHALLENGE */}
        <div className="md:col-span-12 bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
            <h3 className="text-3xl font-bold text-[#1d1d1f] mb-6">The Challenge: Breaking the Legacy</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="text-lg text-gray-600 leading-relaxed space-y-6">
                    <p>
                        Legacy institutions are racing to adopt AI and Open API infrastructures, but rigid legacy infrastructure holds them back.
                    </p>
                    <p>
                        Sensedia faced a critical hurdle: shifting perception from a technical vendor to a strategic enabler. To succeed, we needed to penetrate the C-suite in complex, regulated industries, proving that our forward-thinking API-first strategies were the right way to bridge the gap between old systems and future agility.
                    </p>
                </div>
                 {/* Visual decoration representing the "API Economy" graphic from your screenshot */}
                <div className="bg-[#F5F5F7] rounded-2xl p-8 flex items-center justify-center">
                    <div className="text-center space-y-4">
                        <div className="w-16 h-16 bg-[#6D28D9] rounded-full mx-auto flex items-center justify-center">
                            <Layers className="text-white w-8 h-8" />
                        </div>
                        <h4 className="text-xl font-bold text-[#6D28D9]">API Economy</h4>
                        <p className="text-sm text-gray-400 uppercase tracking-widest">Trends & Strategy</p>
                    </div>
                </div>
            </div>
        </div>

        {/* 2. AI-DRIVEN ABM (Three Columns) */}
        <div className="md:col-span-12 bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h3 className="text-3xl font-bold text-[#1d1d1f] mb-2">AI-Driven ABM</h3>
                <p className="text-xl text-gray-500">Accelerating Demand Generation with Intelligence</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {/* Target Segmentation */}
                <div className="flex flex-col items-center text-center group">
                    <div className="mb-6 bg-purple-50 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:bg-[#6D28D9] transition-colors duration-300">
                        <Target className="w-8 h-8 text-[#6D28D9] group-hover:text-white transition-colors" />
                    </div>
                    <h4 className="text-xl font-bold text-[#1d1d1f] mb-4">Target Segmentation</h4>
                    <p className="text-gray-600 leading-relaxed">
                        We combined Ideal Customer Profiles (ICPs) with real-time intent signals. This allowed us to filter the noise and focus exclusively on high-value accounts.
                    </p>
                </div>

                {/* Strategic Positioning */}
                <div className="flex flex-col items-center text-center group">
                    <div className="mb-6 bg-purple-50 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:bg-[#6D28D9] transition-colors duration-300">
                        <Compass className="w-8 h-8 text-[#6D28D9] group-hover:text-white transition-colors" />
                    </div>
                    <h4 className="text-xl font-bold text-[#1d1d1f] mb-4">Strategic Positioning</h4>
                    <p className="text-gray-600 leading-relaxed">
                        We crafted dual-narrative playbooks that equipped sales teams to speak the language of the buyer. Whether a CTO worried about uptime or a CEO worried about market share.
                    </p>
                </div>

                {/* AI-Driven Execution */}
                <div className="flex flex-col items-center text-center group">
                    <div className="mb-6 bg-purple-50 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:bg-[#6D28D9] transition-colors duration-300">
                        <Bot className="w-8 h-8 text-[#6D28D9] group-hover:text-white transition-colors" />
                    </div>
                    <h4 className="text-xl font-bold text-[#1d1d1f] mb-4">AI-Driven Execution</h4>
                    <p className="text-gray-600 leading-relaxed">
                        Created dynamic, personalized ABM that accelerated MQL to SQL conversion and significantly increased lead quality and shortened the sales cycles.
                    </p>
                </div>
            </div>
        </div>

        {/* 3. PARTNER-LED GROWTH */}
        <div className="md:col-span-12 bg-[#F5F5F7] rounded-3xl p-0">
             <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-[#1d1d1f] mb-2">Partner-Led Growth</h3>
                <p className="text-xl text-gray-500">Smart Scaling Through Ecosystems</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Card 1 */}
                <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                        <Handshake className="w-6 h-6 text-orange-500" />
                        <h4 className="text-xl font-bold text-[#1d1d1f]">Joint Value Propositions</h4>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                        We moved beyond generic "better together" messaging. We crafted specific, vertical-based value propositions that attacked deep niches with complementary technical offers.
                    </p>
                </div>

                {/* Card 2 */}
                <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                     <div className="flex items-center gap-3 mb-4">
                        <Users className="w-6 h-6 text-orange-500" />
                        <h4 className="text-xl font-bold text-[#1d1d1f]">The Co-Sell Motion</h4>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                        We unlocked partner-led revenue streams by optimizing MDF to fuel joint marketing opportunities, allowing us to penetrate enterprise accounts with the credibility of established market leaders.
                    </p>
                </div>
            </div>
            <p className="text-center text-gray-500 mt-8 italic">
                We operationalized a co-sell strategy with industry giants like AWS and Oracle to drive market penetration.
            </p>
        </div>

        {/* 4. GLOBAL INDUSTRY AUTHORITY (Wide Tile - Dark Mode) */}
        <div className="md:col-span-12 bg-[#1d1d1f] rounded-3xl p-8 md:p-16 text-white shadow-2xl relative overflow-hidden mt-6">
             {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#6D28D9] rounded-full blur-[160px] opacity-20 -mr-20 -mt-20 pointer-events-none"></div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                {/* Left Column: Authority */}
                <div>
                    <div className="flex items-center gap-3 mb-6 text-[#6D28D9]">
                        <Globe className="w-6 h-6" />
                        <span className="font-bold tracking-widest uppercase text-sm">Global Orchestration</span>
                    </div>
                    <h3 className="text-4xl font-bold mb-6">Global Industry Authority</h3>
                    <p className="text-gray-400 text-lg leading-relaxed mb-6">
                        We established a global content engine designed to elevate brand authority across regions. Leveraging webinars, event presence, content syndication, and PR, we integrated thought leadership with our AI-driven ABM stack, we orchestrated a seamless, automated journey.
                    </p>
                    <p className="text-gray-400 text-lg leading-relaxed">
                         Delivering high-value insights directly to the C-suite based on behavior, warming up decision-makers and shortening the sales cycle before Sales ever made a call.
                    </p>
                </div>

                {/* Right Column: Dual Driver */}
                <div className="bg-white/5 rounded-3xl p-8 border border-white/10 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-6">
                        <Zap className="w-5 h-5 text-[#6D28D9]" />
                        <h4 className="font-bold text-xl">A Dual-Driver Approach</h4>
                    </div>
                    
                    <p className="text-gray-300 leading-relaxed mb-8">
                        To penetrate complex financial institutions, we needed to win on two fronts. We crafted specific enterprise playbooks that targeted the C-Suite (Top-Down) with narratives around ROI and digital agility, while simultaneously arming DevOps teams (Bottom-Up) with technical proof points, demos, and fully supported pilots.
                    </p>
                    
                    <div className="p-4 bg-white/10 rounded-xl border-l-4 border-[#6D28D9]">
                        <p className="text-white font-medium italic">
                            "By aligning these two drivers, we turned technical gatekeepers into internal champions and executives into trusted partners and confident buyers."
                        </p>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </main>
  );
}