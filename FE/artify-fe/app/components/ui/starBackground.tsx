"use client";

import React from "react";
import Image from "next/image";
import { starBackgroundType } from "./type";

const StarBackground = ({
  imageSrc,
  imageWidth,
  imageHeight,
  numStars,
}: starBackgroundType) => {
  const getRandom = (min: number, max: number) => {
    return Math.random() * (max - min) + min;
  };

  const stars = Array.from({ length: numStars }).map((_, i) => {
    const top = getRandom(0, 100);
    const left = getRandom(0, 100);
    const size = getRandom(1, 4);
    const duration = getRandom(1.5, 3.5);
    return (
      <div
        key={i}
        className="star"
        style={{
          top: `${top}%`,
          left: `${left}%`,
          width: `${size}px`,
          height: `${size}px`,
          animationDuration: `${duration}s`,
        }}
      />
    );
  });

  return (
    <div className="flex items-center justify-center relative w-full h-full">
      <div className="stars absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        {stars}
      </div>
      <Image
        src={imageSrc}
        alt="starry background image"
        width={imageWidth}
        height={imageHeight}
        className="relative z-10"
      />
    </div>
  );
};

export default StarBackground;
