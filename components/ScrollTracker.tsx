"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function ScrollTracker() {
  const pathname = usePathname();
  const [trackedMilestones, setTrackedMilestones] = useState<Set<number>>(new Set());

  useEffect(() => {
    // Reset milestones when the user navigates to a new page
    setTrackedMilestones(new Set());

    const handleScroll = () => {
      // Calculate how far down the user is (0 to 1)
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = scrollTop / docHeight;

      // Define milestones (25%, 50%, 75%, 90%)
      const milestones = [0.25, 0.50, 0.75, 0.90];

      milestones.forEach((milestone) => {
        // If we haven't tracked this milestone yet AND user scrolled past it
        if (!trackedMilestones.has(milestone) && scrollPercent >= milestone) {
          
          // 1. Mark it as tracked so we don't fire it 100 times
          const newSet = new Set(trackedMilestones);
          newSet.add(milestone);
          setTrackedMilestones(newSet);

          // 2. Send to Google
          if (typeof window !== "undefined" && (window as any).gtag) {
            (window as any).gtag("event", "scroll_depth", {
              event_category: "Case Study Engagement",
              event_label: pathname, // e.g., "/work/sensedia"
              value: milestone * 100, // Sends "25", "50", etc.
            });
          }
        }
      });
    };

    // Listen to scroll events
    window.addEventListener("scroll", handleScroll);

    // Cleanup when leaving page
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname, trackedMilestones]);

  return null; // This component renders nothing visually
}