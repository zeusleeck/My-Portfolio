"use client";
import Image from "next/image";
import { Button } from "@material-tailwind/react";

export function FixedPlugin() {
  return (
    <a href="document/Chong_Kai_Lee_Resume.pdf" target="_blank">
      <Button
        color="white"
        size="sm"
        className="!fixed bottom-4 right-4 flex gap-1 pl-2 items-center border border-blue-gray-50" 
         placeholder={undefined}>
        <Image
          width={128}
          height={128}
          className="w-5 h-5"
          alt="Download Resume"
          src="https://www.material-tailwind.com/favicon.png"
        />{" "}
        Download Resume
      </Button>
    </a>
  );
}
