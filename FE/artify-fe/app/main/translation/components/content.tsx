"use client";

import React, { useState } from "react";
import Title from "@/app/components/title";
import Button from "@/app/components/ui/button";
import { CgClose } from "react-icons/cg";
import RegisterModal from "./regist";

const commonButtonStyle =
  "w-[8rem] text-white px-3 py-2 rounded-lg text-[0.8rem] border hover:cursor-pointer";

const borderStyle = "border-2 border-[#DBDBDB]";

const dictionaryData = [
  { from: "A big fish in a small pond", to: "작은 연못의 큰 물고기" },
  {
    from: "The greatest glory in living lies not in never falling, but in rising every time we fall",
    to: "인생에서 가장 큰 영광은 넘어지지 않는 것에 있는 것이 아니라 매번 일어선다는 데 있다",
  },
  {
    from: "Many of life’s failures are people who did not realize how close they were to success when they gave up",
    to: "많은 인생의 실패는 사람이 포기할 때 자신이 성공에 얼마나 가까이 있는지 깨닫지 못하는 것이다",
  },
  {
    from: "Love, free as air at sight of human ties, Spreads his light wings, and in a moment flies",
    to: "사람들과의 인연에서 사랑이란 공기처럼 가벼운 것이다. 가벼운 날개를 활짝 펴고 순식간에 날아간다",
  },
  { from: "Apple", to: "사과" },
  { from: "Light", to: "빛" },
  { from: "Table", to: "테이블" },
  { from: "translate", to: "번역하다" },
  { from: "Apple", to: "사과" },
  { from: "Light", to: "빛" },
  { from: "Table", to: "테이블" },
  { from: "translate", to: "번역하다" },
  { from: "Apple", to: "사과" },
  { from: "Light", to: "빛" },
  { from: "Table", to: "테이블" },
  { from: "translate", to: "번역하다" },
];

const Content = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [dictData, setDictData] = useState([]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleRegister = ({ from, to }: { from: string; to: string }) => {
    setDictData((prev) => [...prev, { from, to }]);
    setIsRegisterModalOpen(false);
  };

  return (
    <div className="w-full h-[60%] p-2 flex flex-col">
      <div className="flex flex-col gap-2 flex-grow overflow-hidden">
        <Title>Content</Title>
        <div className="flex flex-col md:flex-row justify-around gap-4 flex-grow overflow-hidden">
          <textarea
            className={`w-full md:w-1/2 h-full p-2 bg-gray-100 resize-none ${borderStyle}`}
            placeholder="Please translation followings:{passage} 
           yours:"
          />
          <textarea
            className={`w-full md:w-[40%] h-full px-2 py-1 bg-gray-100 resize-none ${borderStyle}`}
            placeholder="{ ‘passage’ : ‘translation result’ }"
          />
        </div>
      </div>
      <div className="w-full h-[20%] flex items-center justify-between px-4">
        <div className="w-[70%] h-[4rem] flex flex-row justify-around items-center">
          <Button
            title="RUN"
            styles={`${commonButtonStyle} bg-emerald-500 border-emerald-600 hover:bg-emerald-600`}
          />
          <Button
            title="SAVE"
            styles={`${commonButtonStyle} bg-sky-500 border-sky-600 hover:bg-sky-600`}
          />
          <Button
            title="DICTIONARY"
            styles={`${commonButtonStyle} bg-gray-200 text-gray-800 border-gray-300 hover:bg-gray-300`}
            onClick={openModal}
          />
          <Button
            title="REGIST"
            styles={`${commonButtonStyle} bg-amber-500 border-amber-600 hover:bg-amber-600`}
            onClick={() => setIsRegisterModalOpen(true)}
          />
        </div>
        <div className="text-[0.8rem] text-gray-700">
          <p>0/3000 TOKEN</p>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 w-[50rem] max-w-[60rem]">
            <div className="w-full flex justify-between items-baseline">
              <h2 className="text-xl font-bold mb-4">My Dictionary</h2>
              <button
                className="mt-2 px-4 py-2 bg-emerald-400 text-white rounded hover:bg-emerald-500"
                onClick={closeModal}
              >
                <CgClose />
              </button>
            </div>
            <div className="max-h-64 overflow-y-auto mb-4">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="border-b-2 border-emerald-400 py-2 text-left">
                      FROM
                    </th>
                    <th className="border-b-2 border-emerald-400 py-2 text-left">
                      TO
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {dictionaryData.map((item, idx) => (
                    <tr key={idx}>
                      <td className="p-2 border-b border-gray-200">
                        {item.from}
                      </td>
                      <td className="p-2 border-b border-gray-200">
                        {item.to}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      <RegisterModal
        isOpen={isRegisterModalOpen}
        onClose={() => setIsRegisterModalOpen(false)}
        onRegister={handleRegister}
      />
    </div>
  );
};

export default Content;
