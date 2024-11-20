import React,{useEffect} from 'react'
import Link from 'next/link'
import { IoMail } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 200,
      easing: 'ease-in-out',
    });
  }, []);
  return (
    <>
      <div className='pb-8 ' >
        <p className='flex justify-center font-bold text-3xl text-[#2bbcca]'>Get in touch</p>
      </div>
      <div className='md:flex md:justify-evenly grid'>
        <div className='bg-[#00c9ff] hover:bg-[#ededed] p-6 rounded-xl shadow-md text-white hover:text-black w-full md:max-w-[500px] md:h-[300px] flex flex-col  md:justify-center text-center ml-8 max-w-[300px] h-[200px]' data-aos="fade-up">
          <p className='mb-4'>Find Me</p>
          <Link href="mailto:nanjujhansi@gmail.com" className='flex items-center justify-center mb-2'>
            <IoMail className='mr-2' /> nanjujhansi@gmail.com
          </Link>
          <Link href="tel:9361616383" className='flex items-center justify-center'>
            <FaPhoneAlt className='mr-2' /> 9361616383
          </Link>
        </div>
        
<div className='space-y-4 p-4'data-aos="fade-right">
  
  <div className='md:flex md:gap-4 md:space-y-0 space-y-4 '>
    <input type='text' placeholder='Name'className='border-2 border-[#aaa] md:p-2 bg-[#efede6] md:w-full w-auto'/>
    <input type='text'placeholder='Email'className='border-2 border-[#aaa] md:p-2 bg-[#efede6] md:w-full w-auto'/>
  </div>
 <textarea placeholder='Message'className='border-2 border-[#aaa] md:p-2 bg-[#efede6] w-full h-[100px]'/>
 <Link href="./" className='rounded-lg p-2 text-white bg-[#00c9ff] flex items-center justify-center mb-2 max-w-max'>Send <FaLocationArrow className='ml-1'/></Link>

</div>

</div>

    </>
  )
}

export default Contact