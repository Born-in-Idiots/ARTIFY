import React from "react";
import { FaSpaceAwesome } from "react-icons/fa6";
import { PiPaperPlaneTiltFill } from "react-icons/pi";

const Introduce = () => {
  // OverView 데이터 받아오는 코드 구현

  return (
    <div className="flex flex-col justify-center w-[60rem] mx-auto">
      <div className="font-bold text-2xl flex items-center">
        <span className="pr-2">
          <PiPaperPlaneTiltFill />
        </span>
        <p>INTRODUCE</p>
      </div>
      <div className="flex pt-[2.5rem] px-[2rem]">
        <FaSpaceAwesome className="w-[4rem] h-[4rem]" />
        <div className="flex-1 flex items-center flex-wrap pl-12">
          <p>
            Thank you for using ARTIFY. We offer a variety of services through
            AI. Besides translation and summary modules, Various features will
            be added.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Introduce;
