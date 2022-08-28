import ikrili from "../assets/projects_screen_shot/ikrili.png";
import bookmark from "../assets/projects_screen_shot/bookmark.png";
import makhbazti from "../assets/projects_screen_shot/makhbazti.png";
import see_code from "../assets/see_code.svg";
import see_website from "../assets/see_website.svg";
import css from "../assets/tech_stack_icons/css.svg";
import adobexd from "../assets/tech_stack_icons/adobexd.svg";
import figma from "../assets/tech_stack_icons/figma.svg";
import firebase from "../assets/tech_stack_icons/firebase.svg";
import html from "../assets/tech_stack_icons/html.svg";
import js from "../assets/tech_stack_icons/js.svg";
import react from "../assets/tech_stack_icons/react.svg";
import scss from "../assets/tech_stack_icons/scss.svg";
import tailwindcss from "../assets/tech_stack_icons/tailwindcss.svg";
import vue from "../assets/tech_stack_icons/vue.svg";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Projects = () => {
  useEffect(()=>{
    Aos.init({duration:2500});
  },[])
  return (
    <div className="min-h-[80%]" id="projects">
      <h1 className="flex justify-center pt-6 p-2 text-blue font-medium text-3xl sm:font-semibold sm:text-4xl sm:p-4 md:font-black lg:text-6xl md:p-6 bg-whiteYello">
        <span className="text-black p-3">-</span>
        My projects
        <span className="text-black p-3">-</span>
      </h1>
      <div className="flex flex-col md:flex-row md:m-10 ">
        {/* makhbazti */}
        <div  data-aos='fade-right' className=" m-8 bg-white p-5 rounded-xl  md:w[25%]">
          <img src={makhbazti} alt="" className="z-[-10]" />
          <p className="self-center text-lightBlack font-bold text-xl my-2">
            Makhbazti
          </p>
          <p className="text-lightBlack">
            Makhbazti is website that I code in collaboration with a co-intern
            in my last internship
          </p>
          <p className="text-lightBlack">
            I used those technologies to done it
          </p>
          <div className="flex flex-wrap justify-around my-2 ">
            <img src={tailwindcss} alt="" className="w-10" />
            <img src={html} alt="" className="w-10" />
            <img src={js} alt="" className="w-10" />
            <img src={vue} alt="" className="w-10" />
            <img src={adobexd} alt="" className="w-10" />
          </div>
          <div className="flex justify-center mt-20">
            <a href="https://makhbazti.com/" target="_blank">
              <img
                src={see_website}
                alt=""
                className="w-8 mt-2 ml-2 hover:cursor-pointer"
              />
            </a>
          </div>
        </div>
        {/* ikrili */}
        <div  data-aos='fade-up' className=" m-8 bg-white p-5 rounded-xl  md:w[25%]">
          <img src={ikrili} alt="" className="z-[-10]" />
          <p className="self-center text-lightBlack font-bold text-xl my-2">
            ikrili
          </p>
          <p className="text-lightBlack">
            ikrili is website to solve the problem of renting accommodation in
            Tunisia so he have to facilate the finding of the accommodation and
            the accommodation-partner for the student and have to facilate the
            process of finding good renter for the house owner{" "}
          </p>
          <p className="text-lightBlack">
            I used those technologies to done it
          </p>
          <div className="flex flex-wrap justify-around my-2 ">
            <img src={tailwindcss} alt="" className="w-10" />
            <img src={html} alt="" className="w-10" />
            <img src={js} alt="" className="w-10" />
            <img src={react} alt="" className="w-10" />
            <img src={figma} alt="" className="w-10" />
            <img src={firebase} alt="" className="w-10" />
          </div>

          <div className="flex justify-center items-end mt-4 ">
            <a href="https://ikrili.tn/" target="_blank">
              <img
                src={see_website}
                alt=""
                className="w-8 mt-2 ml-2 hover:cursor-pointer"
              />
            </a>
          </div>
        </div>
        {/* bookmark */}
        <div  data-aos='fade-left' className=" m-8 bg-white p-5 rounded-xl  md:w[25%]">
          <img src={bookmark} alt="" className="z-[-10]" />
          <p className="self-center text-lightBlack font-bold text-xl my-2">
            bookmark
          </p>
          <p className="text-lightBlack">
            bookmark is website from
            <a href="https://www.frontendmentor.io/"> frontendmentor.io </a>
          </p>
          <p className="text-lightBlack">
            I used those technologies to done it
          </p>
          <div className="flex flex-wrap justify-around my-2 ">
            <img src={scss} alt="" className="w-10" />
            <img src={html} alt="" className="w-10" />
            <img src={js} alt="" className="w-10" />
            <img src={css} alt="" className="w-10" />
          </div>

          <div className="flex justify-center">
            <a href="https://github.com/A-amon/Bookmark" target="_blank">
              <img
                src={see_code}
                alt=""
                className="w-8 mt-2 ml-2 hover:cursor-pointer"
              />
            </a>
            <a
              href="https://determined-brahmagupta-fbb485.netlify.app/"
              target="_blank"
            >
              <img
                src={see_website}
                alt=""
                className="w-8 mt-2 ml-2 hover:cursor-pointer"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
