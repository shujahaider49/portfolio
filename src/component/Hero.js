import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import react from '../asset/hero-section-img.webp'
import { Fade } from 'react-reveal';

const Hero = () => {
  const social_media =[
    {logo:'logo-linkedin' , link: "https://www.linkedin.com/in/muhammad-shuja-haider/"},
    {logo:'logo-github', link: "https://github.com/shujahaider49"},
  ]



  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <Fade right>
      <div className="flex-1 flex items-center justify-center h-full">
        <img src={react} alt="" className="md:w-11/12 h-full object-cover blur-3xl" />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            My Name is <span>Shuja Haider</span>
          </h1>
          <Typewriter words={['Frontend Web Developer', 'React js', 'Javascript']}
            loop={true}
            typeSpeed={80}
            deleteSpeed={60}
            delaySpeed={1000} 
            className="md:text-3xl text-3xl md:leading-normal leading-5 mt-4 font-bold text-gray-600"/>        
            <br />       
          <button className="btn-primary mt-8">Contact Me</button>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {social_media?.map((icon) => (
              <div
                key={icon}
                className="text-gray-600 hover:text-white cursor-pointer "
              >
                <a href={icon?.link}> <ion-icon name={icon.logo}></ion-icon></a>
               
              </div>
            ))}
          </div>
        </div>
      </div>
      </Fade>
    </section>
  );
};


export default Hero