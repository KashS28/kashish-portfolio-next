"use client";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  return (
    <motion.main
      key={path}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.22, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{ flex: 1 }}
    >
      {children}
    </motion.main>
  );
}
