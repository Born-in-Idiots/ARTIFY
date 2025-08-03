import React, { ReactNode } from "react";

interface TitleProps {
  children: ReactNode;
}

const Title = ({ children }: TitleProps) => {
  return <div className="text-[1.2rem] font-bold">{children}</div>;
};

export default Title;
