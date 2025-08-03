"use client";

import React, { useState } from "react";
import LoginForm from "./components/loginForm";
import { defaultData } from "./const";
import { defaultDataType } from "./type";
import StarBackground from "../components/ui/starBackground";

const Login = () => {
  const [requestData, setRequestData] = useState<defaultDataType>(defaultData);

  return (
    <div className="w-full h-screen grid grid-cols-10 relative overflow-hidden">
      <div className="col-span-4 flex items-center justify-center bg-white z-10">
        <LoginForm requestData={requestData} setRequestData={setRequestData} />
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

export default Login;
