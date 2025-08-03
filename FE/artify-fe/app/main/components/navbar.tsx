"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { CiLogout } from "react-icons/ci";

const Navbar = () => {
  const [currentDate, setCurrentDate] = useState("");
  const [dayOfWeek, setDayOfWeek] = useState("");

  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    const dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    const dayOfWeek = dayNames[today.getDay()];

    setCurrentDate(`${year}.${month}.${day}`);
    setDayOfWeek(dayOfWeek);
  }, []);

  return (
    <div className="bg-white h-[3rem] flex justify-between items-center px-4 font-bold">
      <div className="relative w-[6rem] h-[6rem]">
        <Image src={"/logo.png"} width={100} height={100} alt="logo" />
      </div>
      <div className="flex justify-around items-center w-[18rem]">
        <CiLogout className="hover:cursor-pointer" />
        <div className="relative w-[2.5rem] h-[2.5rem]">
          <Image
            src={"/userIcon.png"}
            width={40}
            height={40}
            alt="userIcon"
            className="hover:cursor-pointer"
          />
        </div>
        <p>
          {currentDate}{" "}
          <span className={dayOfWeek === "SUN" ? "text-red-500" : ""}>
            {dayOfWeek}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Navbar;
