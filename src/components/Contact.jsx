import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { IoMail } from 'react-icons/io5';
import { FaPhoneAlt, FaLocationArrow } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { handleSubmit } from '@/components/contacthandler'; 

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null); 

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 200,
      easing: 'ease-in-out',
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus(null); 
    await handleSubmit(formData, setStatus);
  };

  return (
    <>
      <div className="pb-8">
        <p className="flex justify-center font-bold text-3xl text-[#2bbcca]">Get in touch</p>
      </div>
      <div className="md:flex md:justify-evenly grid">
        <div
          className="bg-[#00c9ff] hover:bg-[#ededed] p-6 rounded-xl shadow-md text-white hover:text-black w-full md:max-w-[500px] md:h-[300px] flex flex-col md:justify-center text-center ml-8 max-w-[300px] h-[200px]"
          data-aos="fade-up"
        >
          <p className="mb-4">Find Me</p>
          <Link href="mailto:nanjujhansi@gmail.com" className="flex items-center justify-center mb-2">
            <IoMail className="mr-2" /> nanjujhansi@gmail.com
          </Link>
          <Link href="tel:9361616383" className="flex items-center justify-center">
            <FaPhoneAlt className="mr-2" /> 9361616383
          </Link>
        </div>

        <div className="space-y-4 p-4  " data-aos="fade-right">
          <form onSubmit={onSubmit}>
            <div className="md:flex md:gap-4 md:space-y-0 space-y-4">
            <div className="flex-grow">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2bbcca] bg-[#efede6]"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex-grow">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2bbcca] bg-[#efede6]"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
            </div>
            <div className="mb-4 py-3">
                <textarea
                  name="message"
                  placeholder="Message"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2bbcca] h-[120px] bg-[#efede6]"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

            <button
              type="submit"
              className="rounded-lg p-2 text-white bg-[#00c9ff] flex items-center justify-center mb-2 max-w-max"
            >
              Send <FaLocationArrow className="ml-1" />
            </button>
          </form>
          {status && (
            <p className={`text-center ${status.success ? 'text-green-500' : 'text-red-500'}`}>
              {status.message}
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Contact;
