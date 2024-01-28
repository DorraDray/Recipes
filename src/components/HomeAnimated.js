"use client";
import { motion } from "framer-motion";

export default function HomeAnimated({ children, className }) {
  return (
    <motion.div
      className={`bg-blue-500 p-4 rounded-md flex items-center justify-center ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
}
