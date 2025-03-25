"use client"

import React, { useEffect, useRef } from "react";
import { gsap } from "../utils/gsapConfig";

const Experience = () => {
  const expRef = useRef([]);

  useEffect(() => {
    expRef.current.forEach((el, i) => {
      gsap.fromTo(
        el,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            end: "top 30%",
            scrub: true,
            toggleActions: "play none reverse none",
          },
          delay: i * 0.2, // Stagger effect
        }
      );
    });
  }, []);

  const expData = [
    {
      companyName: "Axeno Consulting",
      position: "Software Engineer L-1",
      year: "Aug 2023 - Jan 2025",
      jobType: "Full-Time",
    },
    {
      companyName: "Axeno Consulting",
      position: "Software Intern",
      year: "Jan 2023 - Aug 2023",
      jobType: "Internship",
    },
  ];

  return (
    <section className="py-10 px-5 md:p-20 w-full">
      <div className="flex flex-col">
        <h3 className="text-[20px] uppercase font-semibold">Timeline</h3>
        <h2 className="text-[30px] md:text-[50px] text-[#f45050] font-bold">
          My Experience
        </h2>
      </div>
      <section className="flex justify-center relative">
        <div className="hidden md:block h-90 w-100 bg-[#f9d949] rounded-2xl left-[-120px] absolute"></div>
        <div className="flex flex-col gap-4">
          {expData.map((item, i) => (
            <div
              ref={(el) => (expRef.current[i] = el)}
              className="flex flex-col gap-3 bg-[#f0f0f0] w-100 md:w-180 px-8 py-5 rounded-2xl"
              key={i}
            >
              <h1 className="text-[20px] font-semibold">{item?.companyName}</h1>
              <h2 className="text-[#f45050]">{item?.position}</h2>
              <p className="text-[14px] text-[#45474b]">{item?.year}</p>
              <p className="bg-[#f9d949] w-fit px-2 text-sm rounded-full">{item?.jobType}</p>
            </div>
          ))}
        </div>
        <div className="hidden md:block h-90 w-100 bg-[#f9d949] rounded-2xl absolute right-[-120px]"></div>
      </section>
    </section>
  );
};

export default Experience;
