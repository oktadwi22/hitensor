'use client'
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

interface ButtonSpotProps {
  title: string;
  className?: string;
}

export const ButtonSpot: React.FC<ButtonSpotProps> = ({ title, className }) => {
  const btnRef = useRef<HTMLButtonElement>(null);
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { width } = (e.target as HTMLButtonElement).getBoundingClientRect();
      const offset = e.offsetX;
      const left = `${(offset / width) * 100}%`;

      if (spanRef.current)
        spanRef.current.animate({ left }, { duration: 250, fill: "forwards" });
    };

    const handleMouseLeave = () => {
      if (spanRef.current)
        spanRef.current.animate(
          { left: "50%" },
          { duration: 100, fill: "forwards" }
        );
    };

    const btn = btnRef.current;

    if (btn) {
      btn.addEventListener("mousemove", handleMouseMove);
      btn.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      const btn = btnRef.current;

      if (btn) {
        btn.removeEventListener("mousemove", handleMouseMove);
        btn.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <motion.button
      whileTap={{ scale: 0.985 }}
      ref={btnRef}
      className={`${className} relative w-full group  max-w-xs overflow-hidden rounded-full  px-4 py-2 text-base font-medium  text-white`}
    >
      <span className="pointer-events-none relative z-10 mix-blend-difference">
        {title}
      </span>

      <span
        ref={spanRef}
        className="pointer-events-none rounde absolute left-[50%] top-[50%] h-16 group-hover:w-16 w-0 transition-all duration-500 -translate-x-[50%] -translate-y-[50%] rounded-full bg-slate-100 dark:bg-neutral-950"
      />
    </motion.button>
  );
};
