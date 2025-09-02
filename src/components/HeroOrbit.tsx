import { PropsWithChildren } from "react";

type HeroOrbitProps = {
  size?: number; // optional size
  rotation?: number; // optional angle
  speed?: number; // optional speed in seconds
};

export const HeroOrbit = ({
  children,
  size = 300,
  rotation = 45,
  speed = 30,
}: PropsWithChildren<HeroOrbitProps>) => {
  return (
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
      role="presentation"
    >
      {/* Outer orbit spin */}
      <div style={{ animation: `spin ${speed}s linear infinite` }}>
        <div
          className="flex items-start justify-start"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            transform: `rotate(${rotation}deg)`,
          }}
        >
          {/* Inner counter-spin to keep child upright */}
          <div style={{ animation: `spin ${speed / 2}s linear infinite` }}>
            <div
              className="inline-flex"
              style={{ transform: `rotate(-${rotation}deg)` }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

