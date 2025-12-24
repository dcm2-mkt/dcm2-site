"use client";
import { motion } from "framer-motion";
import { ArrowLeft, Leaf, ShieldCheck, Heart, TrendingUp, Users, Star, ShoppingCart, Award, MessageCircle, BarChart3 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function GreenRoadsClient() {
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
            <div className="h-3 w-3 rounded-full bg-[#10B981]" /> {/* Green Roads Emerald */}
            <p className="text-sm font-bold uppercase tracking-widest text-gray-500">Category Leadership</p>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-[#1d1d1f] mb-6">
            Green Roads.
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-gray-400 mb-8 leading-tight">
             Scaling a local startup into the largest private CBD company in the U.S.
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
             We humanized the science to build a brand identity that is both approachable and undeniably trustworthy.
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
                src="/greenroads-hero.png" 
                alt="Green Roads Hero" 
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
            <h3 className="text-3xl font-bold text-[#1d1d1f] mb-6">Cutting through the Noise</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                <div className="space-y-6">
                    <div>
                        <h4 className="text-lg font-bold text-[#1d1d1f] mb-2">The Obstacle</h4>
                        <p className="text-gray-600 leading-relaxed">
                            How does a pharmacist-led enterprise communicate complex quality standards in a market flooded with noise and white-label competitors?
                        </p>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold text-[#1d1d1f] mb-2">The Strategy</h4>
                        <p className="text-gray-600 leading-relaxed">
                            We humanized the science. We pivoted the narrative to spotlight their unique competitive advantage: being one of the few U.S. companies with in-house manufacturing. By blending this clinical authority with their authentic &quot;humble beginnings&quot; story, we created a brand identity that is both approachable and undeniably trustworthy.
                        </p>
                    </div>
                </div>
                 {/* Visual Highlight */}
                <div className="bg-[#ECFDF5] rounded-2xl p-8 flex items-center justify-center border border-green-100 h-full">
                    <div className="text-center space-y-4">
                        <div className="w-16 h-16 bg-[#10B981] rounded-full mx-auto flex items-center justify-center">
                            <ShieldCheck className="text-white w-8 h-8" />
                        </div>
                        <h4 className="text-xl font-bold text-[#10B981]">Clinical Authority</h4>
                        <p className="text-sm text-gray-400 uppercase tracking-widest">Trust & Transparency</p>
                    </div>
                </div>
            </div>
        </div>

        {/* 2. WHAT WE DID: Branding & Messaging */}
        <div className="md:col-span-6 bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
            <div className="mb-6 bg-green-50 w-12 h-12 rounded-2xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-[#10B981]" />
            </div>
            <h3 className="text-2xl font-bold text-[#1d1d1f] mb-2">Branding</h3>
            <p className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6">&quot;It&apos;s Personal&quot;</p>
            <p className="text-gray-600 leading-relaxed">
                We moved beyond standard product marketing to build a purpose-driven brand architecture. By centering the identity around a &quot;It&apos;s Personal&quot; objective, we aligned internal teams and external audiences. The result is a brand that doesn&apos;t just sell CBD; it demonstrates the transformative potential of cannabis with the end-user as the hero.
            </p>
        </div>

        <div className="md:col-span-6 bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
             <div className="mb-6 bg-green-50 w-12 h-12 rounded-2xl flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-[#10B981]" />
            </div>
            <h3 className="text-2xl font-bold text-[#1d1d1f] mb-2">Messaging</h3>
            <p className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6">From &quot;Getting High&quot; to &quot;Getting Healthy&quot;</p>
            <p className="text-gray-600 leading-relaxed">
                In a saturated market, trust is the ultimate currency. We crafted a narrative dedicated to radical transparency, quality control, and pharmacist formulated precision. We shifted the conversation from &quot;getting high&quot; to &quot;getting healthy,&quot; prioritizing customer satisfaction to elevate Green Roads above the competitors.
            </p>
        </div>

        {/* 3. MARKET LEADERSHIP (Updated) */}
        <div className="md:col-span-12 bg-[#064E3B] rounded-3xl p-8 md:p-16 text-white shadow-2xl relative overflow-hidden">
             {/* Background Gradient */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#10B981] rounded-full blur-[160px] opacity-20 -mr-20 -mt-20 pointer-events-none"></div>

            <div className="relative z-10 text-center mb-16">
                <h3 className="text-3xl font-bold mb-2">Market Leadership?</h3>
                <p className="text-2xl text-emerald-300 font-medium">We defined it.</p>
            </div>

            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-center">
                
                {/* Stat 1 */}
                <div className="space-y-2">
                    <TrendingUp className="w-8 h-8 text-[#10B981] mx-auto mb-4" />
                    <h4 className="text-5xl font-bold text-white tracking-tight">$6B</h4>
                    <p className="text-sm font-bold uppercase tracking-wide text-emerald-200">U.S. CBD Market</p>
                </div>

                {/* Stat 2 */}
                <div className="space-y-2">
                     <ShoppingCart className="w-8 h-8 text-[#10B981] mx-auto mb-4" />
                    <h4 className="text-5xl font-bold text-white tracking-tight">+9k</h4>
                    <p className="text-sm font-bold uppercase tracking-wide text-emerald-200">Monthly Orders</p>
                </div>

                {/* Stat 3 */}
                <div className="space-y-2">
                     <Star className="w-8 h-8 text-[#10B981] mx-auto mb-4" />
                    <h4 className="text-5xl font-bold text-white tracking-tight">30k</h4>
                    <p className="text-sm font-bold uppercase tracking-wide text-emerald-200">Five Star Reviews</p>
                </div>

                {/* Stat 4 (New) */}
                <div className="space-y-2">
                     <BarChart3 className="w-8 h-8 text-[#10B981] mx-auto mb-4" />
                    <h4 className="text-5xl font-bold text-white tracking-tight">95%</h4>
                    <p className="text-sm font-bold uppercase tracking-wide text-emerald-200">Revenue Growth</p>
                </div>
            </div>
        </div>

        {/* 4. EXPONENTIAL GROWTH */}
        <div className="md:col-span-12 bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <div className="mb-6 bg-green-50 w-16 h-16 rounded-full flex items-center justify-center">
                <Award className="w-8 h-8 text-[#10B981]" />
            </div>
            <h3 className="text-3xl font-bold text-[#1d1d1f] mb-6">What We Saw: Exponential Growth</h3>
            <p className="text-lg text-gray-600 leading-relaxed max-w-4xl">
                Green Roads has successfully pivoted from a niche player to a category leader. This strategic overhaul secured placements in major retail chains and a massive network of independent retailers nationwide. Today, Green Roads stands as a pioneering force in the CPG sector, fully prepared for the mass-market acceptance of CBD.
            </p>
        </div>

      </div>
    </main>
  );
}