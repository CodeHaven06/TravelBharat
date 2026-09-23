"use client";

import { motion } from "framer-motion";

interface RevealImageProps {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
}

export default function RevealImage({
  src,
  alt,
  className = "",
  imageClassName = "",
}: RevealImageProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
        scale: 0.97,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        margin: "-80px",
      }}
      transition={{
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`overflow-hidden ${className}`}
    >
      <motion.img
        src={src}
        alt={alt}
        initial={{ scale: 1.12 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1.3,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={`h-full w-full object-cover
           transition-transform duration-700 hover:scale-105 ${imageClassName}`}
      />
    </motion.div>
  );
}