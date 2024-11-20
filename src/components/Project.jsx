import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const project =[
  {
  title:"E-sketch",
  description:"The e-sketch project is a digital tool designed to transform any image into a hand-drawn sketch-like representation, simulating the work of a skilled artist. Users can upload an image, and e-sketch analyzes and interprets its details to create a realistic, stylized sketch effect. "
},
{
  title:"Smart Parking Solution",
  description:"The Smart Parking Solution project enables users to check parking availability and book a parking slot remotely before heading out. This system offers real-time updates on available parking spaces, allowing users to view and reserve a slot from the convenience of their home. With features for user registration, slot monitoring, and booking, the solution improves parking efficiency, reduces time spent searching for spaces, and ensures a hassle-free parking experience."
},
{
  title:"AI chatbot",
  description:"The AI Chatbot project leverages machine learning to deliver accurate, dataset-driven responses to user questions. Built with a dataset of predefined questions and answers, the chatbot uses a Simple Linear Support Vector Machine (SVM) algorithm to classify and match user queries with relevant responses. By analyzing input text, the chatbot identifies the closest match within the dataset, providing precise answers based on the trained model. This project demonstrates the application of machine learning in natural language processing, showcasing an efficient way to automate responses and enhance user interaction through AI."
},
{
  title:"Onefold website",
  description:"The Onefold Website project is a multi-page website created using HTML, CSS, and JavaScript, featuring a seamless and interactive user experience with page routing functionality. Designed to provide users with a structured navigation flow, this website employs JavaScript to dynamically route between pages without the need for page reloads, enhancing performance and responsiveness."
}
];


const Project = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 200,
      easing: 'ease-in-out',
    });
  }, []);
  return (
    <>
    <div >
        <p className='flex justify-center font-bold text-3xl text-[#2bbcca] mb-2'>Projects</p>
    </div>
    <div className='grid md:space-x-3 md:grid-cols-4 md:mt-4 gap-y-8    '>
      {project.map((projects,index)=>(
        <div key={index} className='bg-[#0000001a] p-6 rounded-lg shadow-md '    data-aos="fade-up">
           <p className='font-bold text-xl text-center'>{projects.title}</p>
           <p className='text-sm text-center mt-1'>{projects.description}</p>
           
        </div>
     
        

      ))}

    </div>
    
   
    
    </>
  )
}

export default Project