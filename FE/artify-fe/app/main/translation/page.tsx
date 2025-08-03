import React from "react";
import Content from "./components/content";
import Parameter from "./components/parameter";
import TranslationResult from "./components/translation";

const Translation = () => {
  return (
    <div className="text-white w-full h-full flex justify-center items-center">
      <div className="w-[95%] h-[95%] bg-white text-black rounded-xl px-6 py-2 flex">
        <div className="w-[70%] h-full flex flex-col">
          <Content />
          <Parameter />
        </div>
        <div className="w-[30%] h-full">
          <TranslationResult />
        </div>
      </div>
    </div>
  );
};

export default Translation;
