import React from "react";
import { RiBootstrapFill } from "react-icons/ri";
import {BiLogoJquery } from "react-icons/bi";
import {SiTailwindcss, SiCsharp,SiUnity } from "react-icons/si";
import { Fade } from 'react-reveal';


const Skills = () => {
  return (
    <>
    <section id="skills" className="py-10 bg-gray-800 relative">
      <div className="mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Skills</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My knowledge</p>
        <div>
      <div className=" mt-10 flex flex-row justify-center items-start flex-wrap min-w-full ">
          <Fade left>
    <div className="rounded-full p-2 m-1 bg-orange-700 text-gray-100  w-24 h-24 flex items-center justify-center text-4xl font-bold"> <ion-icon name="logo-html5"></ion-icon> </div>
    <div className="rounded-full p-2 m-1 bg-indigo-600 text-indigo-100  w-40 h-40 flex items-center justify-center text-5xl font-bold"><ion-icon name="logo-css3"></ion-icon></div>
    <div className="rounded-full p-2 m-1 bg-yellow-500 text-pink-100  w-32 h-32 flex items-center justify-center text-4xl font-bold"><ion-icon name="logo-javascript"></ion-icon></div>
    <div className="rounded-full p-2 m-1 bg-white text-blue-600  w-40 h-40 flex items-center justify-center text-4xl font-bold "><ion-icon name="logo-react" className=''></ion-icon> </div>
    </Fade>
    <div className="rounded-full p-2 m-1 bg-white text-purple-600  w-24 h-24 flex items-center justify-center text-4xl font-bold"> <RiBootstrapFill /> </div>
    <Fade right>
    <div className="rounded-full p-2 m-1 bg-blue-600 text-blue-100  w-40 h-40 flex items-center justify-center text-4xl font-bold"> <BiLogoJquery /> </div>
    <div className="rounded-full p-2 m-1 bg-white text-[#3490dc]  w-32 h-32 flex items-center justify-center text-4xl font-bold"> <SiTailwindcss /> </div>
    <div className="rounded-full p-2 m-1 bg-white text-purple-600  w-40 h-40 flex items-center justify-center text-4xl font-bold"> <SiCsharp /> </div>
    <div className="rounded-full p-2 m-1 bg-white text-[#272727]  w-24 h-24 flex items-center justify-center text-4xl font-bold"> <SiUnity /> </div>
    </Fade>
</div>
    </div>
      </div>
    </section>
    </>
  );
};

export default Skills;