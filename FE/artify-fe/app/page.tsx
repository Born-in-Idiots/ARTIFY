"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import LogoPage from "./logo/page";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const handleKeyPress = () => {
      router.push("/login");
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [router]);

  return (
    <div className="w-full min-h-screen flex items-center">
      <LogoPage />
    </div>
  );
}
