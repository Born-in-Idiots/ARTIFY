"use client";

import Button from "@/app/components/ui/button";
import Input from "@/app/components/ui/Input";
import React, { useState } from "react";
import axios from "axios";
import { defaultDataType } from "../type";
import { useRouter } from "next/navigation";
import { IoMdPlanet } from "react-icons/io";
import API from "@/utils/endpoint";

const LoginForm = ({
  requestData,
  setRequestData,
}: {
  requestData: defaultDataType;
  setRequestData: React.Dispatch<React.SetStateAction<defaultDataType>>;
}) => {
  const [formItem, setFormItem] = useState(requestData);
  const [error, setError] = useState("");
  const router = useRouter();

  const onChange = (name: string, e: React.ChangeEvent<HTMLInputElement>) => {
    setFormItem((prev) => ({
      ...prev,
      [name]: e.target.value,
    }));
  };

  const onSubmit = async () => {
    try {
      const response = await axios.post(API.LOGIN, {
        email: formItem.email,
        password: formItem.password,
      });

      if (response.status === 200) {
        router.push("/main");
      }
    } catch (error: any) {
      if (error.response?.status === 401) {
        setError(error.response?.msg);
      } else if (error.response?.status === 500) {
        setError(error.response?.msg);
      } else {
        setError("에러 발생");
      }
    }
  };

  const onJoin = () => {
    router.push("/login/membership");
  };

  return (
    <div className="w-full h-full flex items-center justify-center z-20">
      <div className="w-full max-w-[420px] bg-white p-4 sm:p-6 rounded-xl shadow-lg flex flex-col items-center mx-2">
        <div className="flex items-center justify-center w-full text-xl sm:text-2xl md:text-3xl py-4 sm:py-6 text-center font-bold">
          <IoMdPlanet className="mr-2" />
          <p>WELCOME TO ARTIFY</p>
        </div>
        <div className="w-full border border-gray-300 py-6 px-4 sm:py-8 sm:px-6 rounded-lg">
          <Input
            title={"Email"}
            type="email"
            value={formItem.email}
            styles="w-full mb-3 sm:mb-4 p-2 border border-gray-300 rounded text-sm sm:text-base focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            placeholder={"Your Email"}
            onChange={onChange}
          />
          <Input
            title={"Password"}
            type="password"
            value={formItem.password}
            styles="w-full mb-3 sm:mb-4 p-2 border border-gray-300 rounded text-sm sm:text-base focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            placeholder={"Your Password"}
            onChange={onChange}
          />
          <Button
            title={"Sign in"}
            styles="w-full bg-gray-800 py-2 rounded-lg text-white mt-4 cursor-pointer hover:bg-gray-700 transition-colors"
            onClick={onSubmit}
          />
          <Button
            title={"Sign up"}
            styles="w-full py-2 rounded-lg text-gray-800 mt-4 cursor-pointer border border-gray-800 hover:bg-gray-50 transition-colors"
            onClick={onJoin}
          />
          {error && (
            <div className="mt-4 flex justify-center">
              <p className="text-red-400 text-sm sm:text-base">{error}</p>
            </div>
          )}
        </div>
        {/* 소셜 로그인 */}
        <div className="mt-6 w-full">
          <button className="w-full py-2 rounded-lg mt-4 border border-black h-12 cursor-pointer hover:bg-gray-50 text-sm sm:text-base transition-colors">
            😁 Sign in (Git)
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
