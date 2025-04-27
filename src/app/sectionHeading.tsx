"use client";
import { motion } from "motion/react";

const headingVariants = {
  slideIn: {
    initial: { x: -100, opacity: 0 },
    whileInView: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 50 },
    },
  },
  zoomIn: {
    initial: { scale: 0.5, opacity: 0 },
    whileInView: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  },
};

interface SectionHeadingProps {
  title: string;
  variant?: keyof typeof headingVariants;
}

export function SectionHeading({
  title,
  variant = "slideIn",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={headingVariants[variant].initial}
      whileInView={headingVariants[variant].whileInView}
      viewport={{ once: true }}
      className="relative w-fit mx-auto pb-2.5"
    >
      <p className=" text-4xl md:text-5xl font-bold text-neutral-800 text-center">
        {title}
      </p>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
        className="absolute bottom-0 left-0 h-1 bg-primary-blue"
      />
    </motion.div>
  );
}
