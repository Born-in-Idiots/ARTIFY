"use client";

import React from "react";
import MemberShipForm from "./components/memberShipForm";
import StarBackground from "@/app/components/ui/starBackground";

const MemberShip = () => {
  return (
    <div className="w-full h-screen grid grid-cols-10 relative overflow-hidden">
      <div className="col-span-4 flex items-center justify-center bg-white z-10">
        <MemberShipForm />
      </div>
      <div className="col-span-6">
        <StarBackground
          imageSrc="/images/c4.png"
          imageWidth={500}
          imageHeight={500}
          numStars={60}
        />
      </div>
    </div>
  );
};

export default MemberShip;
