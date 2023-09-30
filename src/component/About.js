import React from "react";
import aboutImg from "../asset/hero-section-img.webp";
import CountUp from "react-countup";
import { Fade } from 'react-reveal';


const About = () => {
  const info = [
    { text: "Years experience", count: "04" },
    { text: "Completed Projects", count: "24" },
    { text: "Companies Work", count: "06" },
  ];
  return (
    <>
    <Fade right >
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">My introduction</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <p className="text-justify leading-7 w-11/12 mx-auto">
                 I'm a passionate React.js Frontend Developer dedicated to creating captivating user interfaces
        and seamless web experiences. With a strong foundation in web development and a keen eye for
        design, I enjoy transforming ideas into beautifully crafted digital solutions. Let's build
        something amazing together!
              </p>
              <div className="flex mt-10 items-center gap-7">
              <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
            <h2 class="title-font font-bold text-3xl text-gradient">
              <CountUp duration={5} start={100} end={9} />+
            </h2>
            <p class="leading-relaxed text-dimWhite">Completed Projects</p>
          </div>
              <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
            <h2 class="title-font font-bold text-3xl text-gradient">
              <CountUp duration={5} start={50} end={2} />+
            </h2>
            <p class="leading-relaxed text-dimWhite">Companies Work</p>
          </div>
              </div>
              <br />
              <br />
              <a href="./src/assets/Code_a_program.pdf" download>
                <button className="btn-primary">Download CV</button>
              </a>
            </div>
          </div>
          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
              <img
                src={aboutImg}
                alt=""
                className="w-full object-cover bg-cyan-600 rounded-xl blur-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    </Fade>
    </>
  );
};

export default About;