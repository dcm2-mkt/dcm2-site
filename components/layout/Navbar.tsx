"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const links = [
    { name: "Case Studies", href: "/#work" },
    { name: "Vibe Coding", href: "/vibe-coding" },
    { name: "About Me", href: "/about" },
  ];

  // This function handles the cross-page scrolling issue
  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // If it's a regular link (no hash) or we are just closing the menu, do nothing special
    if (!href.includes("#")) {
      setIsOpen(false);
      return;
    }

    // Isolate the target ID (e.g., "work")
    const targetId = href.replace("/#", "");

    // If we are NOT on the homepage, we need to help the browser
    if (pathname !== "/") {
      e.preventDefault(); // Stop the default jump
      setIsOpen(false); // Close mobile menu
      router.push("/"); // Go to home

      // Wait 100ms for the home page to mount, then scroll
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      // If we ARE on the homepage, just close the menu and let default anchor behavior happen
      setIsOpen(false);
    }
  };

  return (
    // Updated z-index to 100 to stay above ScrollTracker
    <nav className="fixed top-0 w-full z-[100] bg-white/80 backdrop-blur-xl border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link 
          href="/" 
          className="text-xl font-semibold tracking-tighter text-black z-50"
          onClick={() => setIsOpen(false)}
        >
          Diogo C. Marques
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
          {links.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleNavigation(e, link.href)}
              className="hover:text-black transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button 
          className="md:hidden z-50 text-black" 
          onClick={() => setIsOpen(!isOpen)}
        >
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
                onClick={(e) => handleNavigation(e, link.href)}
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