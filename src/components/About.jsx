import about from "../assets/about.png";
import { HashLink } from "react-router-hash-link";
import arrow_right from "../assets/arrow_right.svg";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const About = () => {
  useEffect(()=>{
    Aos.init({duration:2500});
  },[])
  return (
    <div id="about" className="min-h-[80%]">
      <h1 className="flex justify-center pt-6 p-2 text-blue font-medium text-3xl sm:font-semibold sm:text-4xl sm:p-4 md:font-black lg:text-6xl md:p-6 bg-whiteYello">
        <span className="text-black p-3">-</span>
        About Me
        <span className="text-black p-3">-</span>
      </h1>
      <div className="h-[70%] flex flex-col items-center sm:flex-row mb-10 md:mx-20">
        <img
        data-aos='fade-right'
          src={about}
          alt="about me image"
          className="h-[70vh] max-w-[70%] "
        />
        <div data-aos='fade-left' className="flex flex-col m-5 md:m-10 ">
          <h1 className="text-3xl font-semibold lg:text-6xl mb-4 lg:mb-12">
            Ilyes Ben Haj Dahmane
          </h1>
          <p className=" text-xl font-medium lg:text-4xl  mb-4 lg:mb-12">
            Front-end developer
          </p>
          <p className="text-lg lg:text-2xl text-lightBlack  mb-4 lg:mb-12">
            I’m Ilyes, a 21 years old student at ISET RADES and I’m one year
            away from acquiring my licence degree in DSI. I develop modern and
            responsive webistes in professional manner from scratch, You can
            take a look at my works before starting to work together, and if you
            want to develop your business website you can contact me to start
            your project by now.
          </p>

          <HashLink
            to="#projects"
            className="bg-blue flex items-center px-3 py-[.4rem] lg:py-3 text-white w-[9.5rem] rounded-[4rem] hover:cursor-pointer text-lg font-medium "
          >
            My work
            <div className="bg-white rounded-full w-9 p-1 ml-3">
              <img src={arrow_right} alt="" />
            </div>
          </HashLink>
        </div>
      </div>
    </div>
  );
};

export default About;
