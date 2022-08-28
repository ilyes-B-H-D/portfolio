import css from "../assets/tech_stack_icons/css.svg";
import adobexd from "../assets/tech_stack_icons/adobexd.svg";
import cpp from "../assets/tech_stack_icons/cpp.svg";
import figma from "../assets/tech_stack_icons/figma.svg";
import firebase from "../assets/tech_stack_icons/firebase.svg";
import firestore from "../assets/tech_stack_icons/firestore.svg";
import html from "../assets/tech_stack_icons/html.svg";
import js from "../assets/tech_stack_icons/js.svg";
import python from "../assets/tech_stack_icons/python.svg";
import react from "../assets/tech_stack_icons/react.svg";
import scss from "../assets/tech_stack_icons/scss.svg";
import sql from "../assets/tech_stack_icons/sql.svg";
import tailwindcss from "../assets/tech_stack_icons/tailwindcss.svg";
import vue from "../assets/tech_stack_icons/vue.svg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Skills = () => {
  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, []);
  return (
    <div id="skills" className="min-h-[80%]">
      <h1 className="flex justify-center pt-6 p-2 text-blue font-medium text-3xl sm:font-semibold sm:text-4xl sm:p-4 md:font-black lg:text-6xl md:p-6 bg-whiteYello">
        <span className="text-black p-3">-</span>
        What I know
        <span className="text-black p-3">-</span>
      </h1>
      <div className="flex flex-col md:flex-row md:justify-around ">
        {/* coding skills */}
        <div data-aos='fade-up' className="flex justify-around flex-wrap mx-10 my-5 md:w-[25%] bg-black rounded-3xl p-6 opacity-80">
          <img src={react} alt="" className="w-20 h-20 p-1" />
          <img src={vue} alt="" className="w-20 h-20 p-1" />
          <img src={js} alt="" className="w-20 h-20 p-1" />
          <img src={html} alt="" className="w-20 h-20 p-1" />
          <img src={css} alt="" className="w-20 h-20 p-1" />
          <img src={tailwindcss} alt="" className="w-20 h-20 p-1" />
          <img src={scss} alt="" className="w-20 h-20 p-1" />
          <img src={python} alt="" className="w-20 h-20 p-1" />
          <img src={cpp} alt="" className="w-20 h-20 p-1" />
        </div>
        {/* db skills */}
        <div  data-aos='fade-up' className="flex justify-around items-start flex-wrap mx-10 my-5 md:w-[25%] bg-black rounded-3xl p-6 opacity-80">
          <img src={sql} alt="" className="w-20 h-20 p-1" />
          <img src={firestore} alt="" className="w-20 h-20 p-1" />
          <img src={firebase} alt="" className="w-20 h-20 p-1" />
        </div>
        {/* graphic skills */}
        <div  data-aos='fade-up' className="flex justify-around items-start flex-wrap mx-10 my-5 md:w-[25%] bg-black rounded-3xl p-6 opacity-80">
          <img src={figma} alt="" className="w-20 h-20 p-1" />
          <img src={adobexd} alt="" className="w-20 h-20 p-1" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
