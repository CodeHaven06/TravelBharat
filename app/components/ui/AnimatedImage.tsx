"use client";

import { motion } from "framer-motion";

interface AnimatedImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function AnimatedImage({
  src,
  alt,
  className = "",
}: AnimatedImageProps) {
  return (
    <motion.img
      src={src}
      alt={alt}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      className={`h-full w-full object-cover ${className}`}
    />
  );
}