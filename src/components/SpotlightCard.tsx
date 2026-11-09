"use client";

import React, { useRef, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring, useTransform, HTMLMotionProps } from "framer-motion";

interface SpotlightCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  tiltIntensity?: number;
  spotlightColor?: string;
}

// ponytail: 2.5D spring tilt + radial cursor gradient; upgrade to multi-layer depth parallax with three.js if complex 3D models are introduced.
export default function SpotlightCard({
  children,
  className = "",
  tiltIntensity = 6,
  spotlightColor = "rgba(234, 88, 12, 0.18)",
  ...props
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse coordinate motion values relative to card
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for rotation
  const springConfig = { damping: 20, stiffness: 260, mass: 0.5 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], [tiltIntensity, -tiltIntensity]);
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-tiltIntensity, tiltIntensity]);

  // Spotlight coordinates in px
  const [spotlightPos, setSpotlightPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Normalized coordinates (-0.5 to 0.5)
      mouseX.set(x / rect.width - 0.5);
      mouseY.set(y / rect.height - 0.5);

      setSpotlightPos({ x, y });
    },
    [mouseX, mouseY]
  );

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        rotateX,
        rotateY,
      }}
      whileHover={{ y: -4, transition: { duration: 0.25 } }}
      className={`relative group ${className}`}
      {...props}
    >
      {/* Dynamic Cursor Spotlight Layer */}
      <div
        className="pointer-events-none absolute -inset-px rounded-[inherit] transition-opacity duration-300 z-20"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(400px circle at ${spotlightPos.x}px ${spotlightPos.y}px, ${spotlightColor}, transparent 75%)`,
        }}
        aria-hidden="true"
      />

      {/* Interactive Glowing Border Highlight on Hover */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[inherit] border border-orange-500/0 group-hover:border-orange-500/50 transition-colors duration-300 z-20 shadow-xs group-hover:shadow-[0_0_20px_rgba(234,88,12,0.18)]"
        aria-hidden="true"
      />

      {children}
    </motion.div>
  );
}
