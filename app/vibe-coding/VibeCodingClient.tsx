"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// DATA: Your real tools
const tools = [
  {
    title: "GTM Simulator",
    desc: "Visualize cash flow between your fixed costs, paid acquisition, and viral growth to project your runway.",
    img: "/tool1.png", 
    link: "https://gtmcalculator.netlify.app/"
  },
  {
    title: "MarTech Stack Builder",
    desc: "Select or auto-generate a stack of industry leading tools based on your strategy, budget, and marketing objectives.",
    img: "/tool2.png",
    link: "https://martech-stackbuilder.netlify.app/"
  },
  {
    title: "Ad Budget Optimizer",
    desc: "Plan, compare, and optimize your PPC budget across multiple ad channels by modeling spend, CTR, and performance to see exactly where your dollars should go.",
    img: "/tool3.png",
    link: "https://ad-spend-optimizer.netlify.app/"
  },
  {
    title: "World Cup 2026 Simulator",
    desc: "Challenge your friends, test your luck, and see who can predict the World Cup winner with this bracket picker.",
    img: "/tool4.png",
    link: "https://dcm2worldcup2026picker.netlify.app/"
  },
];

// High-end shadow style
const SHADOW_EFFECT = "shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_24px_40px_-6px_rgba(0,0,0,0.15)] hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_30px_60px_-12px_rgba(0,0,0,0.25)]";

export default function VibeCoding() {
  return (
    <main className="min-h-screen pt-32 px-6 max-w-7xl mx-auto pb-24">
      
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mb-16"
      >
        <Link href="/">
            <Button variant="ghost" className="mb-8 -ml-4 text-gray-500 hover:text-black">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back Home
            </Button>
        </Link>
        
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tighter text-[#1d1d1f] mb-6">
          Vibe Coding.
        </h1>
        <p className="text-xl text-gray-500 leading-relaxed">
          Welcome to my digital playground. This is where I drop experiments, 
          micro-tools, and open-source explorations that don't fit into a 
          formal case study. Click any card to try them out.
        </p>
      </motion.div>

      {/* The Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {tools.map((item, i) => (
          <motion.a
            key={i}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            // UPDATE: Removed slide-in (y:20), used Fade Only for stability
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            // UPDATE: Height is now md:h-[500px] to match Bento Grid
            className={`group relative h-96 md:h-[500px] rounded-3xl overflow-hidden cursor-pointer block 
            ${SHADOW_EFFECT} 
            transform-gpu will-change-transform`}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image 
                src={item.img} 
                alt={item.title} 
                fill 
                priority={i < 2} // Load first 2 images instantly
                sizes="(max-width: 768px) 100vw, 50vw"
                // UPDATE: Removed blur-[2px]. Removed mobile scale. 
                // Only gentle zoom on desktop hover (md:group-hover:scale-105).
                className="object-cover transition-transform duration-700 md:group-hover:scale-105"
              />
              {/* UPDATE: Removed the dark bg-black/10 overlay entirely */}
            </div>

            {/* Floating Info Card */}
            <div className="absolute bottom-6 left-6 right-6 p-6 bg-white md:bg-white/95 md:backdrop-blur-sm rounded-2xl shadow-xl transition-all duration-300 group-hover:translate-y-[-5px]">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-2xl font-bold tracking-tight text-[#1d1d1f]">{item.title}</h3>
                <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" />
              </div>
              <p className="text-base font-medium text-gray-600 line-clamp-2">
                {item.desc}
              </p>
            </div>
          </motion.a>
        ))}
      </div>

    </main>
  );
}//added img