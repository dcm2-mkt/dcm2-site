"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

// 1. Defined the shadow here to keep the button code clean
const SHADOW_EFFECT = "shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_24px_40px_-6px_rgba(0,0,0,0.15)] hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_30px_60px_-12px_rgba(0,0,0,0.25)] transition-shadow duration-300";

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center items-center text-center px-4 pt-20">
      <motion.h1 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-6xl md:text-8xl font-semibold tracking-tighter text-[#1d1d1f] mb-6"
      >
        Turning Ideas
        <br />
        Into Growth.
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-xl md:text-2xl text-gray-500 max-w-2xl font-medium leading-relaxed mb-10"
      >
        Go from Vision to Execution. Efficiently.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="flex flex-col md:flex-row gap-4 items-center"
      >
        {/* Button 1: About Me */}
        <Link href="/about">
          <Button 
            // 2. Added SHADOW_EFFECT here
            className={`rounded-full px-12 py-7 text-base font-medium min-w-[200px] bg-white text-gray-700 hover:bg-gray-50 hover:text-black transition-all hover:scale-105 ${SHADOW_EFFECT}`}
          >
            About Me
          </Button>
        </Link>

        {/* Button 2: View Work */}
        <Link href="/#work">
          <Button 
            // 3. Removed old 'shadow-md' and added SHADOW_EFFECT here
            className={`rounded-full px-12 py-7 text-base font-medium min-w-[200px] bg-[#0071e3] text-white hover:bg-[#0077ED] transition-all hover:scale-105 ${SHADOW_EFFECT}`}
          >
            View Work <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </Link>
      </motion.div>
    </section>
  );
}