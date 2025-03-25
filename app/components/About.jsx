"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "../utils/gsapConfig";

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const element = aboutRef.current;
    
    gsap.fromTo(
      element,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "top 20%",
          toggleActions: "play none reverse reset",
        },
      }
    );
  }, []);

  return (
    <main className="p-5 w-full">
      <section ref={aboutRef} className="flex flex-col md:flex-row justify-center sm:items-center px-10 md:px-60 gap-3 md:gap-0">
        <div className="w-[30%]">
          <div className="h-100 w-70 md:w-60 rounded-3xl bg-[#f9d949] relative">
            <Image
              src="/myImage.jpg"
              width={300}
              height={100}
              alt="pic"
              className="bg-[#45474b] rounded-xl h-100 absolute top-[-20px] right-[-20px] object-cover"
            />
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-2 px-0 md:px-10">
          <h2 className="text-[16px] uppercase font-semibold text-[#45474b]">
            Hello, My Name is
          </h2>
          <h1 className="text-[50px] md:text-[64px] text-[#f45050] font-extrabold">
            Prerit Ahuja
          </h1>
          <p className="text-[14px]">
            A passionate frontend developer specializing in building modern,
            responsive, and high-performance web applications. I love crafting{" "}
            <span className="font-semibold text-[#f45050]">
              beautiful user interfaces
            </span>{" "}
            and ensuring a seamless user experience. My goal is to help
            businesses and individuals bring their ideas to life through{" "}
            <span className="font-semibold text-[#f45050]">
              scalable and interactive web solutions
            </span>
            .
          </p>
          <p className="text-[16px]">
            Currently, I'm also open to{" "}
            <span className="font-semibold text-[#f45050]">
              freelance projects
            </span>{" "}
            and collaborations. If you're looking for a{" "}
            <span className="font-semibold text-[#f45050]">
              skilled frontend developer
            </span>
            , let's connect! 🚀
          </p>
        </div>
      </section>
    </main>
  );
};

export default About;
