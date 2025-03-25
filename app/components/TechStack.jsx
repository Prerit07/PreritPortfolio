"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "../utils/gsapConfig";

const TechStack = () => {
  const techStackRef = useRef([]);

  const techStack = [
    { imgURL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", name: "HTML" },
    { imgURL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", name: "CSS" },
    { imgURL: "https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg", name: "Sass" },
    { imgURL: "https://seeklogo.com/images/T/tailwind-css-logo-5AD4175897-seeklogo.com.png", name: "TailwindCSS" },
    { imgURL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", name: "JavaScript" },
    { imgURL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", name: "ReactJS" },
    { imgURL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", name: "NextJS" },
    { imgURL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg", name: "MaterialUI" },
    { imgURL: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg", name: "Firebase" },
    { imgURL: "https://static.cdnlogo.com/logos/g/75/google-cloud.svg", name: "Google Cloud" }
  ];

  useEffect(() => {
    techStackRef.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "top 20%",
            scrub: true,
            toggleActions: "play none reverse none", 
          },
          delay: index * 0.1, 
        }
      );
    });
  }, []);

  return (
    <section className="py-10 px-5 md:p-20 w-full">
      <div className="flex flex-col">
        <h3 className="text-[20px] uppercase font-semibold">My Expertise</h3>
        <h2 className="text-[30px] md:text-[50px] text-[#f45050] font-bold">
          Innovative Solutions
        </h2>
      </div>
      <div className="mt-5">
        <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
          {techStack.map((item, i) => (
            <div
              ref={(el) => (techStackRef.current[i] = el)}
              className="bg-[#f0f0f0] h-40 rounded-xl p-2 flex flex-col justify-center items-center gap-3"
              key={item?.name}
            >
              <img src={item?.imgURL} alt={item?.name} className="h-20" />
              <h1>{item?.name}</h1>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
