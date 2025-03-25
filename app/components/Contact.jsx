import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { SiGmail } from "react-icons/si";
import { IoCall } from "react-icons/io5";
import Link from 'next/link';

const Contact = () => {
  return (
    <section className='flex gap-10 flex-col'>
    <div className='flex flex-col pt-5 px-5 md:px-20'>
            <h3 className='text-[20px] uppercase font-semibold'>Contact Me</h3>
            <h2 className='text-[30px] md:text-[50px] text-[#f45050] font-bold'>
              Get in Touch
            </h2>
    </div>
    <section className='flex flex-col gap-10'>
      <Link href={"https://www.linkedin.com/in/prerit-ahuja"} target='_blank'>
      <div className='flex items-center justify-center gap-5 hover:scale-105 transition-all ease-in'>
        <p className='text-[#0077B5]'><FaLinkedin size={50}/></p>
        <p className='text-[#0077B5]'> @prerit-ahuja</p>
      </div>
      </Link>
      <a href="mailto:preritahuja07@gmail.com">
      <div className='flex items-center justify-center gap-5 hover:scale-105 transition-all ease-in'>
        <p className='text-[#f45050]'><SiGmail size={50}/></p>
        <p className='text-[#f45050]'> preritahuja07@gmail.com</p>
      </div>
      </a>
      <div className='flex items-center justify-center gap-5 hover:scale-105 transition-all ease-in cursor-pointer'>
        <p className='text-green-300'><IoCall size={50}/></p>
        <p className='text-green-300'> +91 9354 040 527</p>
      </div>
    </section>
    </section>
  )
}

export default Contact
