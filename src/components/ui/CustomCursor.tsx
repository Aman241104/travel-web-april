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

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
      });
      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
      });
    };

    const handleHover = () => {
      gsap.to(follower, { scale: 3, backgroundColor: "rgba(197, 160, 89, 0.2)", duration: 0.3 });
    };

    const handleLeave = () => {
      gsap.to(follower, { scale: 1, backgroundColor: "transparent", duration: 0.3 });
    };

    window.addEventListener("mousemove", moveCursor);
    
    const links = document.querySelectorAll("a, button, .interactive");
    links.forEach(link => {
      link.addEventListener("mouseenter", handleHover);
      link.addEventListener("mouseleave", handleLeave);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      links.forEach(link => {
        link.removeEventListener("mouseenter", handleHover);
        link.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, []);

  return (
    <>
      <div 
        ref={cursorRef} 
        className="fixed top-0 left-0 w-2 h-2 bg-gold rounded-full z-[9999] pointer-events-none -translate-x-1/2 -translate-y-1/2 hidden md:block" 
      />
      <div 
        ref={followerRef} 
        className="fixed top-0 left-0 w-8 h-8 border border-gold/30 rounded-full z-[9998] pointer-events-none -translate-x-1/2 -translate-y-1/2 hidden md:block" 
      />
    </>
  );
}
