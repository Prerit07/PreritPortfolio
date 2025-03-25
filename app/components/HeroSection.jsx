"use client";
import { motion } from "framer-motion";
import React from "react";

const HeroSection = () => {
  return (
    <main>
      <section className="text-center">
        <div className="flex flex-col gap-7">
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-[24px] text-[#45474b] font-semibold">
              UI/UX Developer
            </h2>
            <h1 className="text-[64px] text-[#f45050] font-bold">
              Prerit Ahuja
            </h1>
          </motion.div>

          <motion.div
            className="px-10 md:px-100"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            <p className="text-[#45474b] text-[14px]">
              Hello, I'm Prerit Ahuja. Motivated and detail-oriented Web
              Developer with a passion for creating seamless and visually
              appealing websites. Adept at collaborating with cross-functional
              teams to deliver high-quality projects on time.
            </p>
          </motion.div>

          <motion.div
            className="flex justify-center px-20 md:px-120"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
          >
            <a href="#contact">
              <button className="bg-[#45474b] text-white text-[16px] px-4 py-2 rounded-full cursor-pointer">
                Contact Me
              </button>
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default HeroSection;
