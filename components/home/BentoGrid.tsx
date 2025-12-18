"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const items = [
  { 
    title: "Sensedia", 
    desc: "Global B2B Go-To-Market", 
    year: "2023", 
    img: "/project1.png",
    pdf: "https://drive.google.com/file/d/172OdHNh8rkxhhOCjNBVqDhSP-NclsGgZ/view?usp=sharing" 
  },
  { 
    title: "MyBambu", 
    desc: "Fintech 0-1 Launch", 
    year: "2020", 
    img: "/project2.png",
    pdf: "https://drive.google.com/file/d/1hTcMRLF_5N_nDTGEIVFf4oKSgRIJWSUV/view?usp=sharing"
  },
  { 
    title: "Miami Heat", 
    desc: "Heat VICE Integrated Campaign", 
    year: "2018", 
    img: "/project3.webp",
    pdf: "https://drive.google.com/file/d/1R_3AQ26Q84I05D9a-VD4Aqw_XWnaov3g/view?usp=sharing"
  },
  { 
    title: "GreenRoads", 
    desc: "Social Media Campaigns", 
    year: "2016", 
    img: "/project4.webp",
    pdf: "https://drive.google.com/file/d/16r6R8Mxw3bLBBQtWxw3RX7o6GwCH3mqO/view?usp=sharing"
  },
];

// Reusable Tailwind classes for the shadow effect
const SHADOW_CLASS = "shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_24px_40px_-6px_rgba(0,0,0,0.15)]";
const HOVER_SHADOW_CLASS = "hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_30px_60px_-12px_rgba(0,0,0,0.25)]";

export default function BentoGrid() {
  return (
    <section id="work" className="max-w-7xl mx-auto px-6 py-24">
      <h2 className="text-4xl font-semibold tracking-tight text-[#1d1d1f] mb-12">Case Studies</h2>

      <div className="flex flex-col gap-6">
        
        {/* --- ROW 1 --- */}
        <div className="flex flex-col md:flex-row gap-6 h-auto md:h-[500px]">
          
          {/* Item 1: Sensedia */}
          <motion.a
            href={items[0].pdf}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`group relative rounded-3xl overflow-hidden cursor-pointer block
            ${SHADOW_CLASS} ${HOVER_SHADOW_CLASS}
            flex-[2] hover:flex-[3] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]`}
          >
            <div className="absolute inset-0">
                <Image 
                    src={items[0].img} 
                    alt={items[0].title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
            </div>
            <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl transition-all duration-300 group-hover:translate-y-[-5px]">
                <div className="flex justify-between items-start mb-2">
                    <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">{items[0].year}</p>
                        <h3 className="text-2xl font-bold tracking-tight text-[#1d1d1f]">{items[0].title}</h3>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" />
                </div>
                <p className="text-base font-medium text-gray-600 line-clamp-1">{items[0].desc}</p>
            </div>
          </motion.a>

          {/* Item 2: MyBambu */}
          <motion.a
            href={items[1].pdf}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`group relative rounded-3xl overflow-hidden cursor-pointer block
            ${SHADOW_CLASS} ${HOVER_SHADOW_CLASS}
            flex-[1] hover:flex-[3] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]`}
          >
             <div className="absolute inset-0">
                <Image 
                    src={items[1].img} 
                    alt={items[1].title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
            </div>
            <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl transition-all duration-300 group-hover:translate-y-[-5px]">
                <div className="flex justify-between items-start mb-2">
                    <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">{items[1].year}</p>
                        <h3 className="text-2xl font-bold tracking-tight text-[#1d1d1f]">{items[1].title}</h3>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" />
                </div>
                <p className="text-base font-medium text-gray-600 line-clamp-1">{items[1].desc}</p>
            </div>
          </motion.a>
        </div>

        {/* --- ROW 2 --- */}
        <div className="flex flex-col md:flex-row gap-6 h-auto md:h-[500px]">
          
          {/* Item 3: Miami Heat */}
          <motion.a
            href={items[2].pdf}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`group relative rounded-3xl overflow-hidden cursor-pointer block
            ${SHADOW_CLASS} ${HOVER_SHADOW_CLASS}
            flex-[1] hover:flex-[3] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]`}
          >
             <div className="absolute inset-0">
                <Image 
                    src={items[2].img} 
                    alt={items[2].title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
            </div>
            <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl transition-all duration-300 group-hover:translate-y-[-5px]">
                <div className="flex justify-between items-start mb-2">
                    <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">{items[2].year}</p>
                        <h3 className="text-2xl font-bold tracking-tight text-[#1d1d1f]">{items[2].title}</h3>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" />
                </div>
                <p className="text-base font-medium text-gray-600 line-clamp-1">{items[2].desc}</p>
            </div>
          </motion.a>

          {/* Item 4: GreenRoads */}
          <motion.a
            href={items[3].pdf}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className={`group relative rounded-3xl overflow-hidden cursor-pointer block
            ${SHADOW_CLASS} ${HOVER_SHADOW_CLASS}
            flex-[2] hover:flex-[3] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]`}
          >
             <div className="absolute inset-0">
                <Image 
                    src={items[3].img} 
                    alt={items[3].title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
            </div>
            <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl transition-all duration-300 group-hover:translate-y-[-5px]">
                <div className="flex justify-between items-start mb-2">
                    <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">{items[3].year}</p>
                        <h3 className="text-2xl font-bold tracking-tight text-[#1d1d1f]">{items[3].title}</h3>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" />
                </div>
                <p className="text-base font-medium text-gray-600 line-clamp-1">{items[3].desc}</p>
            </div>
          </motion.a>
        </div>

      </div>
    </section>
  );
}