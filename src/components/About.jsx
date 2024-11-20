import React,{useEffect}from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const cards=[
{
heading:"Frontend",
list:["HTML","CSS","Javascript" , "ReactJS", "TailwindCSS"]
},
{
    heading:"Programming Language",
    list:["Python" , "C" ,"Java"]
},
{
    heading:"Database",
    list:["MYSQL"]
},
{
    heading:"Tools",
    list:["Excel ","PowerBI" ,"Tableau"]
}
];

const About = () => {
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
        <p className='flex justify-center font-bold text-3xl text-[#2bbcca]'data-aos="fade-up"> About Me</p>
    </div>
    <div className='md:flex grid'>
    <div className='bg-[#0000001a] md:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 md:max-w-[630px] md:m-20 grid space-y-2 gap-x-2 p-6 w-full items-start'data-aos="fade-right">
  <h3 className='text-lg font-bold'>My Introduction</h3>
  <p className='md:text-sm text-lg'>I am well-versed in HTML, CSS and JavaScript, and other cutting-edge frameworks and libraries, which allows me to implement interactive features.</p>
</div>

    <div className='md:grid md:gap-x-6 gap-x-3 md:grid-cols-4 mt-14 '>
        {cards.map((card,index)=>(
            <div key={index} className='p-2  ' data-aos="fade-left"
            data-aos-delay={index * 100}>
                <span className='md:text-lg font-bold text-sm '>{card.heading}</span>
                <ul className='grid gap-y-3  text-center mt-4'>
                {card.list.map((item, i) => (
                  <li key={i} className="text-sm rounded-md text-white bg-[#6e57e0]  ">{item}</li>
                ))}
                </ul>
            </div>

        ))
        
        }
    </div>
    </div>
    
    </>
  )
}

export default About