import Title from "@/app/components/title";
import React from "react";

const borderStyle = "border-2 border-[#DBDBDB]";
const TranslationResult = () => {
  return (
    <div className="w-full h-full px-3 py-2">
      <Title>Result</Title>
      <div className="w-full h-full">
        <textarea
          className={`w-full h-[90%] px-2 py-1 bg-gray-100 resize-none ${borderStyle}`}
          placeholder="test Result"
          disabled
        />
      </div>
    </div>
  );
};

export default TranslationResult;
