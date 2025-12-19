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
        <p className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">2023 • Global GTM Strategy</p>
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tighter text-[#1d1d1f] mb-8">
          Sensedia: Shaping the Future of AI Adoption.
        </h1>
        <p className="text-xl text-gray-500 leading-relaxed">
          Sensedia faced a critical hurdle: shifting perception from a technical vendor to a strategic enabler. 
          We built a GTM engine to penetrate the C-suite in regulated industries, proving API-first strategies 
          are the bridge between legacy systems and future agility[cite: 8, 9].
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
                src="/project1.png" 
                alt="Sensedia Hero" 
                fill 
                className="object-cover"
             />
        </div>
      </motion.div>

      {/* 4. Content Blocks */}
      <div className="max-w-3xl mx-auto space-y-24">
        
        {/* Challenge */}
        <section>
            <h2 className="text-3xl font-bold text-[#1d1d1f] mb-6">The Challenge: Breaking the Legacy</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
                Legacy institutions are racing to adopt AI and Open API infrastructures, but rigid legacy infrastructure 
                holds them back[cite: 7]. To succeed, we needed to filter the noise and focus exclusively on high-value accounts, 
                proving that forward-thinking API strategies were the right way to bridge the gap[cite: 9, 20].
            </p>
        </section>

        {/* Solution */}
        <section>
            <h2 className="text-3xl font-bold text-[#1d1d1f] mb-6">The Solution</h2>
            <div className="space-y-12">
                
                {/* Pillar 1 */}
                <div>
                    <h3 className="text-2xl font-semibold text-black mb-3">1. AI-Driven ABM & Segmentation</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        We combined Ideal Customer Profiles (ICPs) with real-time intent signals to identify high-value targets[cite: 19, 20]. 
                        We crafted dual-narrative playbooks that spoke the language of the buyer—whether a CTO worried about 
                        uptime or a CEO worried about market share[cite: 22, 23]. This accelerated MQL to SQL conversion significantly[cite: 25].
                    </p>
                </div>

                {/* Pillar 2 */}
                <div>
                    <h3 className="text-2xl font-semibold text-black mb-3">2. Partner-Led Growth</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        We operationalized a co-sell strategy with industry giants like AWS and Oracle[cite: 34]. 
                        Instead of generic "better together" messaging, we crafted vertical-based value propositions 
                        and optimized MDF to fuel joint marketing, penetrating enterprise accounts with established credibility[cite: 31, 33].
                    </p>
                </div>

                {/* Pillar 3 */}
                <div>
                    <h3 className="text-2xl font-semibold text-black mb-3">3. Global Authority & Dual-Driver Approach</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        To penetrate complex financial institutions, we won on two fronts. We targeted the C-Suite (Top-Down) 
                        with ROI narratives, while simultaneously arming DevOps teams (Bottom-Up) with technical proof points 
                        and fully supported pilots[cite: 42, 43].
                    </p>
                </div>

            </div>
        </section>

        {/* Results */}
        <section>
            <h2 className="text-3xl font-bold text-[#1d1d1f] mb-6">The Results</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                <div>
                    <h3 className="text-4xl font-bold text-black mb-1">Co-Sell</h3>
                    <p className="text-sm text-gray-500">Strategy with AWS/Oracle [cite: 34]</p>
                </div>
                <div>
                    <h3 className="text-4xl font-bold text-black mb-1">MQL to SQL</h3>
                    <p className="text-sm text-gray-500">Accelerated Conversion [cite: 25]</p>
                </div>
                <div>
                    <h3 className="text-4xl font-bold text-black mb-1">Global</h3>
                    <p className="text-sm text-gray-500">Brand Authority Established [cite: 38]</p>
                </div>
            </div>
        </section>

      </div>
    </main>
  );
}