"use client";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <section className="w-fit flex fixed bottom-0 right-0 py-5 px-5 md:px-20 bg-transparent justify-center">
      <a href="/Prerit CV.pdf" download>
        <motion.button
          className="bg-[#f45050] text-white text-[16px] px-2 py-1 rounded-full cursor-pointer"
          animate={{
            scale: [1, 1.1, 1],
            boxShadow: ["0px 0px 0px rgba(0,0,0,0)", "0px 0px 15px rgba(244, 80, 80, 0.8)", "0px 0px 0px rgba(0,0,0,0)"],
          }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatDelay: 1.5, 
            ease: "easeInOut",
          }}
        >
          Download CV
        </motion.button>
      </a>
    </section>
  );
};

export default Footer;
