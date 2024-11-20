import Link from 'next/link'
import React,{useEffect} from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { CiGlobe } from "react-icons/ci";
import Image from 'next/image';
import gsap from 'gsap';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    gsap.to(".photo", {
      y: 10,
      duration: 2,
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut",
    });
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      offset: 50,
    });
  }, []);
  return (
    <>
      <div className='flex flex-col-reverse md:flex-row md:items-start items-center md:mx-20 m-10 md:space-y-0 space-y-4 md:space-x-10'>
        <div className=" flex-col  md:m-20 md:space-y-8 space-y-4 gap-y-4"data-aos="fade-up">
          <span className="bg-[#c0a631] text-white md:p-2 md:border-2 p-1  md:mt-8 " >
            NANJUNDESWARI MOHANRAJ
          </span>
          <p className="text-5xl text-[#2bbcca]"  data-aos="fade-up">I am Developer</p>
          <p className='text-lg max-w-[630px]' data-aos="fade-up">Experienced frontend developer with a passion for creating visually stunning and user-friendly websites.</p>
          <div >
            <ul className='flex flex-row gap-6 text-3xl'data-aos="fade-up">
              <Link href="https://www.linkedin.com/in/nanjundeswari-m-001557225"><FaLinkedin /></Link>
              <Link href="https://github.com/Nanjundeswari-2406"><FaGithub /></Link>
              <Link href="mailto:nanjujhansi@gmail.com"><IoMail /></Link>
              <Link href="./"><CiGlobe /></Link>
            </ul>

          </div>
        </div>
        <div className='md:m-20 '>
          <Image src={"/images/Nanju.jpg"} width={500} height={500} className='rounded-full md:w-96 md:h-96 w-48 h-48 mb-2'alt='Nanju' />
        </div>
      </div>


    </>
  )
}

export default Home