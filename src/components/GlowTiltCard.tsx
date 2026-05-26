import React, { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

interface GlowTiltCardProps {
  children: React.ReactNode;
  className?: string;
  isDarkMode?: boolean;
  key?: string | number;
}

export default function GlowTiltCard({ children, className = "", isDarkMode = true }: GlowTiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  // Mouse absolute positions
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // 3D Tilt calculation springs
  const rotateXSpring = useSpring(0, { damping: 25, stiffness: 250 });
  const rotateYSpring = useSpring(0, { damping: 25, stiffness: 250 });

  // Call useTransform unconditionally at the top level
  const radialBg = useTransform(
    [mouseX, mouseY],
    ([x, y]) => {
      const colorGlow = isDarkMode 
        ? "rgba(0, 240, 255, 0.09)" 
        : "rgba(6, 182, 212, 0.05)";
      const subGlow = isDarkMode 
        ? "rgba(189, 0, 255, 0.05)" 
        : "rgba(168, 85, 247, 0.03)";
      return `radial-gradient(circle 220px at ${x}px ${y}px, ${colorGlow} 0%, ${subGlow} 50%, transparent 100%)`;
    }
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Relative mouse position from card center
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Track cursor for glowing hover effect
    mouseX.set(x);
    mouseY.set(y);

    // Calculate rotation (-8 to 8 degrees based on coordinate offset)
    const rotateX = ((y - height / 2) / (height / 2)) * -8;
    const rotateY = ((x - width / 2) / (width / 2)) * 8;

    rotateXSpring.set(rotateX);
    rotateYSpring.set(rotateY);
  };

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    rotateXSpring.set(0);
    rotateYSpring.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: rotateXSpring,
        rotateY: rotateYSpring,
        transformStyle: "preserve-3d",
      }}
      className={`relative rounded-3xl overflow-hidden border transition-all duration-300 ${
        isDarkMode 
          ? "bg-slate-950/80 border-slate-900/80 hover:border-cyan-500/45 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]" 
          : "bg-white border-slate-200/80 hover:border-[#00f0ff] shadow-sm hover:shadow-xl"
      } ${className}`}
    >
      {/* Laser Spotlight Overlay */}
      {hovered && (
        <motion.div
          className="absolute inset-0 pointer-events-none transition-all duration-300 z-0"
          style={{
            background: radialBg,
          }}
        />
      )}

      {/* Decorative Top Left border lighting for dark mode */}
      {isDarkMode && (
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none z-10" />
      )}

      {/* Inner Children Content (with translation wrapper for 3D depth) */}
      <div 
        className="relative z-10 w-full h-full flex flex-col"
        style={{ transform: hovered ? "translateZ(8px)" : "translateZ(0px)", transition: "transform 0.3s ease" }}
      >
        {children}
      </div>
    </motion.div>
  );
}
