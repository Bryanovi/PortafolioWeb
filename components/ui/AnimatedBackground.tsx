"use client";

import { motion } from "framer-motion";

export function AnimatedBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="grid-mask absolute inset-0 opacity-30" />

      <motion.div
        className="absolute -left-32 top-24 h-80 w-80 rounded-full bg-primary/25 blur-3xl"
        animate={{
          x: [0, 70, 0],
          y: [0, 40, 0],
          scale: [1, 1.18, 1]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute right-[-7rem] top-40 h-96 w-96 rounded-full bg-secondary/20 blur-3xl"
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          scale: [1, 0.9, 1]
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute bottom-[-8rem] left-1/3 h-96 w-96 rounded-full bg-accent/20 blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -60, 0],
          scale: [1, 1.14, 1]
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
}