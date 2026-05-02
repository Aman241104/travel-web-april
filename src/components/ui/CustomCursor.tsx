"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    if (!cursor || !follower) return;

    // Use quickSetter for high-performance updates
    const xCursorSet = gsap.quickSetter(cursor, "x", "px");
    const yCursorSet = gsap.quickSetter(cursor, "y", "px");
    const xFollowerSet = gsap.quickSetter(follower, "x", "px");
    const yFollowerSet = gsap.quickSetter(follower, "y", "px");

    // Smooth following variables
    const mouse = { x: 0, y: 0 };
    const pos = { x: 0, y: 0 };
    const ratio = 0.15; // Speed of follower

    const moveCursor = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      
      // Update small cursor immediately
      xCursorSet(mouse.x);
      yCursorSet(mouse.y);
    };

    // Use GSAP ticker for the follower's smooth movement
    const updateFollower = () => {
      pos.x += (mouse.x - pos.x) * ratio;
      pos.y += (mouse.y - pos.y) * ratio;
      
      xFollowerSet(pos.x);
      yFollowerSet(pos.y);
    };

    gsap.ticker.add(updateFollower);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, .interactive")) {
        gsap.to(follower, { 
          scale: 3, 
          backgroundColor: "rgba(108, 180, 165, 0.2)", 
          duration: 0.3,
          ease: "power2.out"
        });
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, .interactive")) {
        gsap.to(follower, { 
          scale: 1, 
          backgroundColor: "transparent", 
          duration: 0.3,
          ease: "power2.out"
        });
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);

    return () => {
      gsap.ticker.remove(updateFollower);
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <>
      <div 
        ref={cursorRef} 
        className="fixed top-0 left-0 w-2 h-2 bg-[#C1A67B] rounded-full z-[9999] pointer-events-none -translate-x-1/2 -translate-y-1/2 hidden md:block" 
      />
      <div 
        ref={followerRef} 
        className="fixed top-0 left-0 w-8 h-8 border border-[#C1A67B]/50 rounded-full z-[9998] pointer-events-none -translate-x-1/2 -translate-y-1/2 hidden md:block" 
      />
    </>
  );
}
