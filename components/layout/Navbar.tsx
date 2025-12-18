"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

 const links = [
    { name: "Case Studies", href: "/#work" },   // Scrolls to the Bento Grid on Home
    { name: "Vibe Coding", href: "/vibe-coding" }, // Points to the new page (we need to create this!)
    { name: "About Me", href: "/about" },       // Points to your About page
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-semibold tracking-tighter text-black z-50">
          Diogo C. Marques
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
          {links.map((link) => (
            <Link key={link.name} href={link.href} className="hover:text-black transition-colors">
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button className="md:hidden z-50 text-black" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-0 left-0 w-full h-screen bg-[#f5f5f7] flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {links.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="text-2xl font-semibold tracking-tight text-black"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
}