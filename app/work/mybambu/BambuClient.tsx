"use client";
import { motion } from "framer-motion";
import { ArrowLeft, Users, TrendingUp, Target, Zap, Smartphone, Star, BarChart3, Eye, Download } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function CaseStudy() {
  return (
    <main className="min-h-screen bg-[#F5F5F7] pt-32 pb-24 px-6">
      
      {/* --- HEADER --- */}
      <div className="max-w-6xl mx-auto mb-12">
        {/* FIX APPLIED HERE: Added 'asChild' and moved Link inside */}
        <Button asChild variant="ghost" className="-ml-4 text-gray-500 hover:text-black transition-colors">
          <Link href="/#work">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Work
          </Link>
        </Button>
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
            <div className="h-3 w-3 rounded-full bg-[#00C853]" /> {/* MyBambu Green */}
            {/* UPDATE: Changed Title Text */}
            <p className="text-sm font-bold uppercase tracking-widest text-gray-500">The Sprint: Fintech 0→1 Launch</p>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-[#1d1d1f] mb-6">
            MyBambu.
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-gray-400 mb-8 leading-tight">
             Banking on Culture: A Fintech Success Story.
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
            We helped MyBambu bridge the gap between "accessible" and "trustworthy," bypassing general market noise to speak directly to the unbanked Hispanic community.
          </p>
        </motion.div>

        {/* Right: Hero Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="relative aspect-video w-full rounded-3xl overflow-hidden shadow-2xl"
        >
             {/* UPDATE: Changed Image Source to new file */}
             <Image 
                src="/mybambu-hero.png" 
                alt="MyBambu Hero" 
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
            <h3 className="text-3xl font-bold text-[#1d1d1f] mb-6">The Challenge: Beating the Giants</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="text-lg text-gray-600 leading-relaxed space-y-6">
                    <p>
                        How do you compete with Chime and Revolut? 
                        <br />
                        <strong className="block text-[#1d1d1f] mt-2 text-xl">You don&apos;t. You out-niche them.</strong>
                    </p>
                    <p>
                        With millions of unbanked individuals underserved by traditional banking, MyBambu needed to bridge the gap between "accessible" and "trustworthy." Our goal was to bypass the general market noise and speak directly to a community that needed a financial home, not just another app.
                    </p>
                </div>
                 {/* Visual Highlight */}
                <div className="bg-[#F0FDF4] rounded-2xl p-8 flex items-center justify-center border border-green-100">
                    <div className="text-center space-y-4">
                        <div className="w-16 h-16 bg-[#00C853] rounded-full mx-auto flex items-center justify-center">
                            <Zap className="text-white w-8 h-8" />
                        </div>
                        <h4 className="text-xl font-bold text-[#00C853]">Trust & Access</h4>
                        <p className="text-sm text-gray-400 uppercase tracking-widest">Core Mission</p>
                    </div>
                </div>
            </div>
        </div>

        {/* 2. MARKET RESEARCH (Dark Navy Card) */}
        <div className="md:col-span-12 bg-[#0F172A] rounded-3xl p-8 md:p-16 text-white shadow-2xl relative overflow-hidden">
             {/* Background Gradient */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00C853] rounded-full blur-[160px] opacity-10 -mr-20 -mt-20 pointer-events-none"></div>

            <div className="relative z-10 text-center mb-16">
                <h3 className="text-3xl font-bold mb-2">Market Research</h3>
                <p className="text-gray-400">Here is what we uncovered</p>
            </div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                {/* Demographic */}
                <div className="space-y-4">
                    <div className="mx-auto w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                        <Users className="text-white w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-bold">The Demographic</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Hispanics are the largest, fastest-growing minority cohort in the U.S., driven by a deeply community-oriented culture.
                    </p>
                </div>

                {/* Opportunity */}
                <div className="space-y-4">
                     <div className="mx-auto w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                        <TrendingUp className="text-white w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-bold">The Opportunity</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Decisions are made collectively, yet 14% of Hispanics remain unbanked and 34% are underbanked. A 40-million-person opportunity.
                    </p>
                </div>

                {/* Strategy */}
                <div className="space-y-4">
                     <div className="mx-auto w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                        <Target className="text-white w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-bold">The Strategy</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        We targeted the "less acculturated," first-generation immigrants and their families, focusing on bilingual and bicultural trust-building.
                    </p>
                </div>
            </div>
        </div>

        {/* 3. EXECUTION: GTM & PLG (Split Row) */}
        {/* GTM */}
        <div className="md:col-span-6 bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
            <div className="mb-6 bg-green-50 w-12 h-12 rounded-2xl flex items-center justify-center">
                <Target className="w-6 h-6 text-[#00C853]" />
            </div>
            <h3 className="text-2xl font-bold text-[#1d1d1f] mb-2">Go-To-Market</h3>
            <p className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6">We didn&apos;t just build ads, we built value.</p>
            <p className="text-gray-600 leading-relaxed">
                Using data-driven analytics, we identified the specific financial friction points of our audience. We crafted a comprehensive user journey that felt familiar and safe, ensuring every touchpoint was meticulously timed and culturally relevant.
            </p>
        </div>

        {/* Product Led Growth */}
        <div className="md:col-span-6 bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
             <div className="mb-6 bg-green-50 w-12 h-12 rounded-2xl flex items-center justify-center">
                <Smartphone className="w-6 h-6 text-[#00C853]" />
            </div>
            <h3 className="text-2xl font-bold text-[#1d1d1f] mb-2">Product Led Growth</h3>
            <p className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6">Differentiation through agility.</p>
            <p className="text-gray-600 leading-relaxed">
                To win in Fintech, you have to move faster than the banks. We anchored our positioning in differentiation, using agile development to iterate products in real-time based on direct customer feedback. This customer-centric loop turned early adopters into loyal brand advocates.
            </p>
        </div>

        {/* 4. RESULTS (Wide Card) */}
        <div className="md:col-span-12 bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
            <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-[#1d1d1f] mb-4">Marketing Results</h3>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Our strategy delivered explosive adoption. By prioritizing cultural relevance and data-driven agility, we generated massive scale in just 24 months.
                </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
                
                <div className="space-y-2">
                    <Download className="w-8 h-8 text-[#00C853] mx-auto mb-2" />
                    <h4 className="text-4xl font-bold text-[#1d1d1f] tracking-tight">2M+</h4>
                    <p className="text-xs font-bold uppercase tracking-wide text-gray-500">App Downloads</p>
                </div>

                <div className="space-y-2">
                    <Star className="w-8 h-8 text-[#00C853] mx-auto mb-2" />
                    <h4 className="text-4xl font-bold text-[#1d1d1f] tracking-tight">4.8</h4>
                    <p className="text-xs font-bold uppercase tracking-wide text-gray-500">Star Rating</p>
                </div>

                <div className="space-y-2">
                    <TrendingUp className="w-8 h-8 text-[#00C853] mx-auto mb-2" />
                    <h4 className="text-4xl font-bold text-[#1d1d1f] tracking-tight">35%</h4>
                    <p className="text-xs font-bold uppercase tracking-wide text-gray-500">Growth Rate (MoM)</p>
                </div>

                <div className="space-y-2">
                    <BarChart3 className="w-8 h-8 text-[#00C853] mx-auto mb-2" />
                    <h4 className="text-4xl font-bold text-[#1d1d1f] tracking-tight">1B+</h4>
                    <p className="text-xs font-bold uppercase tracking-wide text-gray-500">Impressions</p>
                </div>

                <div className="space-y-2">
                    <Eye className="w-8 h-8 text-[#00C853] mx-auto mb-2" />
                    <h4 className="text-4xl font-bold text-[#1d1d1f] tracking-tight">200M</h4>
                    <p className="text-xs font-bold uppercase tracking-wide text-gray-500">Video Views</p>
                </div>

            </div>
        </div>

      </div>
    </main>
  );
}