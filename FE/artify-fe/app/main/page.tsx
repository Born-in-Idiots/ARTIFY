"use client";

import React, { JSX, useEffect, useState } from "react";
import Module from "./module";
import Introduce from "./overView";

const StarBackground = ({ numStars = 60 }) => {
  const [stars, setStars] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const getRandom = (min, max) => Math.random() * (max - min) + min;
    const generatedStars = Array.from({ length: numStars }).map((_, i) => {
      const size = getRandom(1, 4);
      const top = getRandom(0, 100);
      const left = getRandom(0, 100);
      const duration = getRandom(1.5, 3.5);
      const delay = getRandom(0, 20);
      const blinkType = Math.random() > 0.5 ? "twinkle" : "blink";
      return (
        <div
          key={i}
          style={{
            position: "absolute",
            top: `${top}%`,
            left: `${left}%`,
            width: `${size}px`,
            height: `${size}px`,
            borderRadius: "50%",
            background: "white",
            opacity: 0,
            animation: `${blinkType} ${duration}s infinite ${delay}s`,
          }}
        />
      );
    });
    setStars(generatedStars);
  }, [numStars]);

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none -z-10">
      {stars}
      <style jsx>{`
        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
        }
        @keyframes blink {
          0%,
          100% {
            opacity: 0;
          }
          10%,
          90% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

const Main = () => {
  return (
    <div className="relative flex flex-col justify-start min-h-screen text-white overflow-y-hidden">
      <StarBackground numStars={70} />
      <div className="relative z-10 flex-grow flex flex-col justify-evenly mb-12">
        <Introduce />
        <Module />
      </div>
    </div>
  );
};

export default Main;
