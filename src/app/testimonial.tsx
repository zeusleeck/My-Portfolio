"use client";

import React from "react";
import Image from "next/image";
import { IconButton, Typography, Card, CardBody, Avatar } from "@material-tailwind/react";


export function Testimonial() {
  const [active, setActive] = React.useState(3);

  return (
    <section className="py-12 px-8 lg:py-24">
      <div className="container max-w-screen-lg mx-auto">
        <div className="container mx-auto mb-20 text-center">
          <Typography variant="h2" color="blue-gray" className="mb-4" 
           placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            What People who I work with say
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-8/12" 
             placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}          >
            Discover what co-workers have to say about their experiences working
            with me.
          </Typography>
        </div>
        <Card color="transparent" shadow={false} className="py-8 lg:flex-row" 
         placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          <CardBody className="w-full lg:gap-10 h-full lg:!flex justify-between " 
          placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <div className="w-full mb-10 lg:mb-0">
              <Typography
                variant="h3"
                color="blue-gray"
                className="mb-4 font-bold lg:max-w-xs" 
                placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}              >
                Web App Development
              </Typography>
              <Typography className="mb-3 w-full lg:w-8/12 font-normal !text-gray-500" 
               placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                Since joining my team as a software engineer, CK has consistently demonstrated a passion for technology and willingness to expand his technical skills. 
                What sets him apart is his initiative. He never hesitate to consult senior developers when faced with challenges, showing a keenness to learn and grow. 
              </Typography>
              <Typography variant="h6" color="blue-gray" className="mb-0.5" 
              placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                Xu Jin - Senior Director
              </Typography>
              <Typography
                variant="small"
                className="font-normal mb-5 !text-gray-500"
                 placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}              >
                Mobile and Chips Compliance @ Visa INC.
              </Typography>
              <div className="flex items-center gap-4">
                <Avatar
                  variant="rounded"
                  src="/image/avatar1.jpg"
                  alt="spotify"
                  size="sm"
                  className={`cursor-pointer ${active === 1 ? "opacity-100" : "opacity-50"}`}
                  onClick={() => setActive(1)} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                />
                <div className="w-[1px] h-[36px] bg-blue-gray-100 "></div>
                <Avatar
                  variant="rounded"
                  src="/image/avatar2.jpg"
                  alt="spotify"
                  size="sm"
                  className={`cursor-pointer ${active === 2 ? "opacity-100" : "opacity-50"}`}
                  onClick={() => setActive(2)} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                />
                
              </div>
            </div>
            <div className="h-[21rem] rounded-lg w-full sm:w-[18rem] shrink-0">
              <Image
                width={768}
                height={768}
                src={`/image/avatar${active}.jpg`}
                alt="testimonial image"
                className="h-full rounded-lg w-full object-cover"
              />
            </div>
          </CardBody>
        </Card>
      </div>
      <div className="grid place-items-center">
      <Typography className="mt-12 mb-4 text-blue-gray-900 font-medium uppercase" 
          placeholder={undefined} 
          onPointerEnterCapture={undefined} 
          onPointerLeaveCapture={undefined}>
            Connect me on:
          </Typography>
          <div className="gap-2 lg:flex">
            <IconButton variant="text"
            placeholder={undefined} 
            onPointerEnterCapture={undefined} 
            onPointerLeaveCapture={undefined}>
              <i className="fa-brands fa-facebook text-lg" />
            </IconButton>
            <IconButton variant="text"
            placeholder={undefined} 
            onPointerEnterCapture={undefined} 
            onPointerLeaveCapture={undefined}>
              <i className="fa-brands fa-instagram text-lg" />
            </IconButton>
            <IconButton variant="text"  
            placeholder={undefined} 
            onPointerEnterCapture={undefined} 
            onPointerLeaveCapture={undefined}>
              <i className="fa-brands fa-github text-lg" />
            </IconButton>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
