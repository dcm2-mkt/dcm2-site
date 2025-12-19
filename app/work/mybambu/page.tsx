"use client";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function CaseStudy() {
  return (
    <main className="min-h-screen bg-white pt-32 pb-24 px-6">
      
      {/* 1. Navigation */}
      <div className="max-w-4xl mx-auto mb-12">
        <Link href="/#work">
          <Button variant="ghost" className="-ml-4 text-gray-500 hover:text-black transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Work
          </Button>
        </Link>
      </div>

      {/* 2. Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto mb-16"
      >
        <p className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">2016 • Social Media</p>
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tighter text-[#1d1d1f] mb-8">
          GreenRoads: Social Campaigns.
        </h1>
        <p className="text-xl text-gray-500 leading-relaxed">
          GreenRoads needed to establish a dominant social presence in a crowded CBD market. 
          We executed a content-first strategy that drove organic engagement and direct sales.
        </p>
      </motion.div>

      {/* 3. Main Hero Image */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="max-w-6xl mx-auto mb-24 rounded-3xl overflow-hidden shadow-2xl"
      >
        <div className="relative aspect-video w-full">
             <Image 
                src="/project4.webp" 
                alt="GreenRoads Hero" 
                fill 
                className="object-cover"
             />
        </div>
      </motion.div>

      {/* 4. Content Blocks */}
      <div className="max-w-3xl mx-auto space-y-24">
        
        {/* Challenge */}
        <section>
            <h2 className="text-3xl font-bold text-[#1d1d1f] mb-6">The Challenge</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
                The CBD market was saturated with low-quality content. GreenRoads needed to educate consumers 
                while building trust and abiding by strict social media advertising restrictions.
            </p>
        </section>

        {/* Solution */}
        <section>
            <h2 className="text-3xl font-bold text-[#1d1d1f] mb-6">The Solution</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
                We pivoted to an educational influencer model, using micro-influencers to tell authentic stories 
                rather than just pushing product.
            </p>
        </section>

        {/* Results */}
        <section>
            <h2 className="text-3xl font-bold text-[#1d1d1f] mb-6">The Results</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                <div>
                    <h3 className="text-4xl font-bold text-black mb-1">200%</h3>
                    <p className="text-sm text-gray-500">Social Engagement</p>
                </div>
                <div>
                    <h3 className="text-4xl font-bold text-black mb-1">50k+</h3>
                    <p className="text-sm text-gray-500">New Followers</p>
                </div>
                <div>
                    <h3 className="text-4xl font-bold text-black mb-1">35%</h3>
                    <p className="text-sm text-gray-500">Direct Sales Lift</p>
                </div>
            </div>
        </section>

      </div>
    </main>
  );
}