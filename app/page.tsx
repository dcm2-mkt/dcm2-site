"use client";
import Hero from "@/components/home/Hero";
import BentoGrid from "@/components/home/BentoGrid";
import { motion } from "framer-motion";
import { Trophy, Award, Tv, Zap, Eye, Star, TrendingUp, Globe } from "lucide-react";
import Link from "next/link";

export default function Home() {
  // Animation Variants for Staggered List
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 }
  };

  return (
    <main className="min-h-screen bg-[#F5F5F7]">
      
      <Hero />
      <BentoGrid />

      {/* --- RECOGNITION & IMPACT --- */}
      <section className="max-w-6xl mx-auto pb-32 px-6 mt-20">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h3 className="text-3xl md:text-4xl font-semibold text-[#1d1d1f] tracking-tight">Awards & Excellence.</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* 1. THE TROPHY CASE (Left Column) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.005 }}
            className="md:col-span-7 bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden text-white flex flex-col justify-between min-h-[600px] border border-white/10"
          >
            {/* Ambient Background Light */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />

            {/* Header Content */}
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-2">
                <motion.div
                   animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.2, 1] }}
                   transition={{ duration: 3, repeat: Infinity }}
                >
                   <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                </motion.div>
                <span className="text-yellow-400 font-bold uppercase tracking-wider text-xs">Top Honors</span>
              </div>
              
              {/* GOLD TYPOGRAPHY */}
              <h4 className="text-4xl md:text-5xl font-bold leading-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#FDE68A] via-[#D97706] to-[#92400E]">
                Creative <br/> Impact.
              </h4>
            </div>

            {/* Staggered Award List */}
            <motion.div 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-8 mt-8 relative z-10"
            >
              
              {/* Grand Clio */}
              <motion.div variants={item} className="group cursor-default">
                <div className="flex items-center justify-between mb-2">
                   <h5 className="text-2xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-300">Clio Sports Grand</h5>
                   <motion.div 
                     whileHover={{ rotate: 15, scale: 1.1 }}
                     className="bg-white/10 p-2 rounded-full backdrop-blur-sm"
                   >
                      <Trophy className="w-6 h-6 text-yellow-400" />
                   </motion.div>
                </div>
                <p className="text-gray-300 font-medium group-hover:translate-x-2 transition-transform duration-300">Miami Heat "VICE" Campaign</p>
                <div className="h-[1px] w-full bg-gradient-to-r from-white/20 to-transparent mt-6" />
              </motion.div>

              {/* Gold/Silver */}
              <motion.div variants={item} className="group cursor-default">
                <div className="flex items-center justify-between mb-2">
                   <h5 className="text-xl font-bold text-white group-hover:text-gray-300 transition-colors duration-300">Clio Gold & Silver</h5>
                   <motion.div 
                     whileHover={{ rotate: -15, scale: 1.1 }}
                     className="bg-white/10 p-2 rounded-full backdrop-blur-sm"
                   >
                      <Award className="w-6 h-6 text-gray-300" />
                   </motion.div>
                </div>
                <p className="text-gray-300 text-sm group-hover:translate-x-2 transition-transform duration-300">VICE & Homestrong Campaigns</p>
                <div className="h-[1px] w-full bg-gradient-to-r from-white/20 to-transparent mt-6" />
              </motion.div>

              {/* Emmys */}
              <motion.div variants={item} className="group cursor-default">
                <div className="flex items-center justify-between mb-2">
                   <h5 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">3x Emmy Awards</h5>
                   <motion.div 
                     whileHover={{ scale: 1.1 }}
                     className="bg-white/10 p-2 rounded-full backdrop-blur-sm"
                   >
                      <Tv className="w-6 h-6 text-blue-300" />
                   </motion.div>
                </div>
                <p className="text-gray-300 text-sm group-hover:translate-x-2 transition-transform duration-300">AméricaTevé Promotion</p>
              </motion.div>

            </motion.div>
          </motion.div>


          {/* 2. THE IMPACT STATS (Right Column - 2x2 Grid) */}
          <div className="md:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
            
            {/* Stat 1: 2 BILLION (Miami Heat) */}
            <Link href="/work/miami-heat" className="block h-full">
              <motion.div 
                whileHover={{ scale: 1.03 }}
                className="h-full bg-white rounded-[2rem] p-6 flex flex-col justify-center relative overflow-hidden shadow-sm border border-gray-200 group cursor-pointer"
              >
                 <motion.div 
                   animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                   transition={{ duration: 4, repeat: Infinity }}
                   className="absolute -bottom-5 -right-5 w-24 h-24 bg-pink-500 rounded-full blur-[40px]" 
                 />
                 <Zap className="w-8 h-8 text-[#FF0055] mb-3 relative z-10" />
                 <h4 className="text-4xl md:text-5xl font-bold tracking-tighter text-[#1d1d1f] mb-1 relative z-10">
                   2B<span className="text-[#FF0055]">+</span>
                 </h4>
                 <p className="text-xs font-bold uppercase tracking-widest text-gray-400 relative z-10">Impressions</p>
                 <div className="flex items-center gap-1 mt-2 relative z-10">
                    <span className="text-gray-500 text-xs font-medium group-hover:text-[#FF0055] transition-colors">Miami Heat VICE</span>
                 </div>
              </motion.div>
            </Link>

            {/* Stat 2: 200 MILLION (MyBambu) */}
            <Link href="/work/mybambu" className="block h-full">
              <motion.div 
                whileHover={{ scale: 1.03 }}
                transition={{ delay: 0.05 }}
                className="h-full bg-white rounded-[2rem] p-6 flex flex-col justify-center relative overflow-hidden shadow-sm border border-gray-200 group cursor-pointer"
              >
                 <motion.div 
                   animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                   transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                   className="absolute -bottom-5 -right-5 w-24 h-24 bg-blue-500 rounded-full blur-[40px]" 
                 />
                 <Eye className="w-8 h-8 text-[#007AFF] mb-3 relative z-10" />
                 <h4 className="text-4xl md:text-5xl font-bold tracking-tighter text-[#1d1d1f] mb-1 relative z-10">
                   200M<span className="text-[#007AFF]">+</span>
                 </h4>
                 <p className="text-xs font-bold uppercase tracking-widest text-gray-400 relative z-10">Global Views</p>
                 <div className="flex items-center gap-1 mt-2 relative z-10">
                    <span className="text-gray-500 text-xs font-medium group-hover:text-[#007AFF] transition-colors">MyBambu</span>
                 </div>
              </motion.div>
            </Link>

            {/* Stat 3: 95% REVENUE (Greenroads) */}
            <Link href="/work/greenroads" className="block h-full">
              <motion.div 
                whileHover={{ scale: 1.03 }}
                transition={{ delay: 0.1 }}
                className="h-full bg-white rounded-[2rem] p-6 flex flex-col justify-center relative overflow-hidden shadow-sm border border-gray-200 group cursor-pointer"
              >
                 <motion.div 
                   animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                   transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                   className="absolute -bottom-5 -right-5 w-24 h-24 bg-green-500 rounded-full blur-[40px]" 
                 />
                 <TrendingUp className="w-8 h-8 text-green-600 mb-3 relative z-10" />
                 <h4 className="text-4xl md:text-5xl font-bold tracking-tighter text-[#1d1d1f] mb-1 relative z-10">
                   95<span className="text-green-600">%</span>
                 </h4>
                 <p className="text-xs font-bold uppercase tracking-widest text-gray-400 relative z-10">Revenue Growth</p>
                 <div className="flex items-center gap-1 mt-2 relative z-10">
                    <span className="text-gray-500 text-xs font-medium group-hover:text-green-600 transition-colors">Greenroads</span>
                 </div>
              </motion.div>
            </Link>

            {/* Stat 4: 200% PARTNER GROWTH (Sensedia) */}
            <Link href="/work/sensedia" className="block h-full">
              <motion.div 
                whileHover={{ scale: 1.03 }}
                transition={{ delay: 0.15 }}
                className="h-full bg-white rounded-[2rem] p-6 flex flex-col justify-center relative overflow-hidden shadow-sm border border-gray-200 group cursor-pointer"
              >
                 <motion.div 
                   animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                   transition={{ duration: 4, repeat: Infinity, delay: 3 }}
                   className="absolute -bottom-5 -right-5 w-24 h-24 bg-purple-500 rounded-full blur-[40px]" 
                 />
                 <Globe className="w-8 h-8 text-purple-600 mb-3 relative z-10" />
                 <h4 className="text-4xl md:text-5xl font-bold tracking-tighter text-[#1d1d1f] mb-1 relative z-10">
                   200<span className="text-purple-600">%</span>
                 </h4>
                 <p className="text-xs font-bold uppercase tracking-widest text-gray-400 relative z-10">Partner-led Growth</p>
                 <div className="flex items-center gap-1 mt-2 relative z-10">
                    <span className="text-gray-500 text-xs font-medium group-hover:text-purple-600 transition-colors">Sensedia</span>
                 </div>
              </motion.div>
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}