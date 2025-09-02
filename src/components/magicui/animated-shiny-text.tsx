import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface MagneticButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const MagneticButton = React.forwardRef<
  HTMLButtonElement,
  MagneticButtonProps
>(({ children, className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "group relative overflow-hidden rounded-full border-2 border-purple-400 bg-transparent px-8 py-3 font-semibold text-purple-400 transition-all duration-300 hover:scale-110 hover:border-purple-300 hover:text-white hover:shadow-[0_0_30px_rgba(147,51,234,0.6)]",
        "before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-purple-600 before:to-pink-600 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100",
        className,
      )}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2 transition-transform duration-300 group-hover:scale-105">
        {children}
        <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </button>
  );
});

MagneticButton.displayName = "MagneticButton";