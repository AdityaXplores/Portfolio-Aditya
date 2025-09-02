"use client";

import React, { memo } from "react";

interface WaveTextProps {
  children: React.ReactNode;
  className?: string;
  amplitude?: number;
  frequency?: number;
  speed?: number;
  color?: string;
}

export const WaveText = memo(
  ({
    children,
    className = "",
    amplitude = 10,
    frequency = 0.5,
    speed = 1,
    color = "#3b82f6",
  }: WaveTextProps) => {
    const text = typeof children === "string" ? children : "";
    
    return (
      <span className={`relative inline-block ${className}`}>
        <span className="sr-only">{children}</span>
        <span
          className="relative inline-block"
          style={{ color }}
          aria-hidden="true"
        >
          {text.split("").map((char, index) => (
            <span
              key={index}
              className="inline-block animate-wave"
              style={{
                animationDelay: `${index * 0.1}s`,
                animationDuration: `${2 / speed}s`,
                transform: `translateY(${Math.sin(index * frequency) * amplitude}px)`,
              }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </span>
      </span>
    );
  }
);

WaveText.displayName = "WaveText";

// Add this CSS to your globals.css:
/*
@keyframes wave {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-wave {
  animation: wave 2s ease-in-out infinite;
}
*/