"use client";

import { IconButton, Typography } from "@material-tailwind/react";

function Hero() {
  return (
    <div className="relative w-full background">
      <div className="grid place-items-center min-h-[92vh] px-8 bg">
        <div className="container mx-auto grid h-max introduction">
          <Typography variant="h1" 
          color="white"
          placeholder={undefined} 
          onPointerEnterCapture={undefined} 
          onPointerLeaveCapture={undefined}
          >
            Lee Chong Kai
          </Typography>
          <Typography
            variant="lead"
            className="mt-4 mb-12 introduction"
            color="white" 
            placeholder={undefined} 
            onPointerEnterCapture={undefined} 
            onPointerLeaveCapture={undefined}>
            Software Engineer / Systems Analyst
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default Hero;
