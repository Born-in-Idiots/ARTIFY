import React from "react";
import { ColorMapType, ModuleItemType } from "../type";
import Link from "next/link";

function ModuleItem({ label, type, keyword }: ModuleItemType) {
  const colorMap: ColorMapType = {
    sun: "from-amber-500 to-pink-500",
    Uranus: "from-teal-200 to-teal-500",
    neptune: "from-indigo-400 to-cyan-400",
  };

  const glowColorMap: Record<string, string> = {
    sun: "rgba(247, 123, 23, 0.8)",
    Uranus: "rgba(45, 212, 191, 0.8)",
    neptune: "rgba(56, 189, 248, 0.8)",
  };

  return (
    <Link href={`/main/${keyword}`}>
      <div className="relative w-[14rem] h-[9rem] rounded-lg overflow-hidden group">
        <div
          className="absolute inset-0 rounded-lg animate-glow-border"
          style={{
            background: `linear-gradient(90deg, transparent, ${glowColorMap[type]}, transparent)`,
            backgroundSize: "200% 100%",
          }}
        />
        <div
          className={`
            absolute inset-[3.5px] rounded-lg
            bg-gradient-to-r ${colorMap[type]}
            flex justify-center items-center
            group-hover:font-bold
            cursor-pointer
          `}
        >
          <p className="text-white">{label}</p>
        </div>
      </div>
    </Link>
  );
}

export default ModuleItem;
