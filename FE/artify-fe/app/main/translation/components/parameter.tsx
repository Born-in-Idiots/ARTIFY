"use client";
import React, { useState } from "react";
import Title from "@/app/components/title";

export const DEFAULTPARAMETER = {
  language_from: "korean",
  language_to: "english",
  temperature: 0.0,
  top_k: 1.0,
  repetition_penalty: 0.5,
  presence_penalty: 0.5,
};

const borderStyle = "border-2 border-[#DBDBDB]";

const Parameter = () => {
  const [parameter, setParameter] = useState(DEFAULTPARAMETER);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setParameter((prev) => ({
      ...prev,
      [name]: type === "number" ? Number(value) : value,
    }));
  };

  return (
    <div className="w-full h-[40%] px-3">
      <Title>Parameter</Title>
      <div className="w-full h-[70%] grid gap-2 grid-cols-2">
        <label className="flex flex-col text-xs">
          language_from
          <input
            name="language_from"
            className={`px-2 py-1 bg-white ${borderStyle}`}
            value={parameter.language_from}
            onChange={handleChange}
          />
        </label>
        <label className="flex flex-col text-xs">
          language_to
          <input
            name="language_to"
            className={`px-2 py-1 bg-gray-100 ${borderStyle}`}
            value={parameter.language_to}
            readOnly // or disabled
          />
        </label>
        <label className="flex flex-col text-xs">
          temperature
          <input
            name="temperature"
            type="number"
            step="0.01"
            className={`px-2 py-1 bg-white ${borderStyle}`}
            value={parameter.temperature}
            onChange={handleChange}
          />
        </label>
        <label className="flex flex-col text-xs">
          top_k
          <input
            name="top_k"
            type="number"
            step="0.01"
            className={`px-2 py-1 bg-white ${borderStyle}`}
            value={parameter.top_k}
            onChange={handleChange}
          />
        </label>
        <label className="flex flex-col text-xs">
          repetition_penalty
          <input
            name="repetition_penalty"
            type="number"
            step="0.01"
            className={`px-2 py-1 bg-white ${borderStyle}`}
            value={parameter.repetition_penalty}
            onChange={handleChange}
          />
        </label>
        <label className="flex flex-col text-xs">
          presence_penalty
          <input
            name="presence_penalty"
            type="number"
            step="0.01"
            className={`px-2 py-1 bg-white ${borderStyle}`}
            value={parameter.presence_penalty}
            onChange={handleChange}
          />
        </label>
      </div>
    </div>
  );
};

export default Parameter;
