import React from "react";
import { IoFileTrayStackedSharp } from "react-icons/io5";
import ModuleItem from "./components/moduleItem";

const Module = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-[60rem]">
        <div className="font-bold text-2xl mb-4 flex items-center">
          <span className="pr-2">
            <IoFileTrayStackedSharp />
          </span>
          <p>MODULE</p>
        </div>
        <div className="flex justify-between pt-[1rem] px-[2rem]">
          <ModuleItem label="TRANSLATION" type="sun" keyword="translation" />
          <ModuleItem
            label="SUMMERIZATION"
            type="neptune"
            keyword="summerization"
          />
          <ModuleItem label="COMMING SOON..." type="Uranus" keyword="" />
        </div>
      </div>
    </div>
  );
};

export default Module;
