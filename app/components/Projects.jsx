"use client"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "../utils/gsapConfig";

const Projects = () => {
  const projectRef = useRef([]);

  useEffect(() => {
    projectRef.current.forEach((el, i) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            end: "top 30%",
            scrub: true,
            toggleActions: "play none reverse none",
          },
          delay: i * 0.2,
        }
      );
    });
  }, []);

  const projectData = [
    {
      title: "To-Do React App",
      url: "https://make-todo-now.vercel.app/",
      techStack: ["ReactJS", "Tailwind CSS", "Firebase DB"],
      imageUrl: "/todoProp.png",
    },
    {
      title: "AI Trip Planner",
      url: "https://ai-travel-planner-livid.vercel.app/",
      techStack: ["ReactJS", "VITE", "Tailwind CSS", "shadcn", "Firebase", "Gemini API"],
      imageUrl: "/tripPlannerProp.png",
    },
    {
      title: "Apple iPhone Landing Page",
      url: "https://apple-landing-page-theta.vercel.app/",
      techStack: ["ReactJS", "Tailwind CSS", "GSAP", "Framer Motion", "Three.js"],
      imageUrl: "/iPhoneProp.png",
    },
    {
      title: "E-commerce Web App",
      url: "https://apnamarketco.vercel.app/",
      techStack: ["NextJS", "ReactJS", "Tailwind CSS", "Firebase", "Stripe", "Algolia Search"],
      imageUrl: "/ecommerceProp.png",
    },
  ];

  return (
    <section className="py-10 px-5 pt-50 md:pt-0 md:p-20 w-full">
      <div className="flex flex-col">
        <h3 className="text-[20px] uppercase font-semibold">Portfolio</h3>
        <h2 className="text-[30px] md:text-[50px] text-[#f45050] font-bold">
          Amazing Works
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-3 w-fit m-auto">
        {projectData.map((item, i) => (
          <div
            ref={(el) => (projectRef.current[i] = el)}
            className="h-fit hover:bg-[#f9d949] transition-all ease-in duration-500"
            key={item.title}
          >
            <h1 className="text-xl font-semibold text-[#f45050]">{item.title}</h1>
            <Link href={item.url} target="_blank">
              <Image src={item.imageUrl} width={400} height={50} alt={item.title} />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
