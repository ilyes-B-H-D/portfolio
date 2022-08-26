import photo from "../assets/personal_img_home.svg";
import facebook from "../assets/facebook.svg";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import twitter from "../assets/twitter.svg";
import arrow_right from "../assets/arrow_right.svg";
import arrow_down from "../assets/arrow_down.svg";
import { HashLink } from "react-router-hash-link";

const Home = () => {
  return (
    <div
      className=" md:m-10 lg:flex justify-center items-center dark overflow-hidden h-screen "
      id="home"
    >
      <div className="flex items-center ml-2">
        <div className="flex flex-col justify-center h-10 ">
          <a
            href="https://www.linkedin.com/in/ilyes-ben-haj-dahmane-53a95021a/"
            target="_blank"
          >
            <img
              className="hover:cursor-pointer hover:contrast-150
                m-1 w-8 h-10 md:w-10 md:m-2"
              src={linkedin}
              alt=""
            />
          </a>
          <a href="https://github.com/ilyes-B-H-D" target="_blank">
            <img
              className="hover:cursor-pointer hover:contrast-150
                m-1 w-8 h-10 md:w-10 md:m-2"
              src={github}
              alt=""
            />
          </a>
          <a href="https://twitter.com/hajdahman_ilyes" target="_blank">
            <img
              className="hover:cursor-pointer hover:contrast-150
                m-1 w-8 h-10 md:w-10 md:m-2"
              src={twitter}
              alt=""
            />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100082682907741"
            target="_blank"
          >
            <img
              className="hover:cursor-pointer hover:contrast-150
                m-1 w-8 h-10 md:w-10 md:m-2"
              src={facebook}
              alt=""
            />
          </a>
        </div>
        <div
          className="
          flex justify-center w-96 h-68
          lg:absolute
          right-5
          top-[30%]
          md:w-80
          lg:mr-10
          m-4 lg:w-96 md:justify-end self-end	"
        >
          <img src={photo} alt="home page img" />
        </div>
      </div>

      <div className=" lg:ml-10 ml-4 flex flex-col justify-center">
        <h1 className="text-3xl font-medium lg:text-[4rem] lg:font-semibold">
          Hi, I’m Ilyes
        </h1>
        <h3 className="dark:text-black text-lightBlack font-semibold mb-2 lg:mb-8 mt-2 lg:mt-10 lg:text-xl ">
          Front-End Developer
        </h3>
        <p className=" w-[95%] lg:w-[50%] text-lightBlack mb-4 lg:mb-10">
          I will create an amazing modern responsive website for your business,
          you can contact me to get started by now !
        </p>
        <HashLink
          to="#contact"
          className="bg-blue flex items-center px-3 py-[.4rem] lg:py-3 text-white w-[11.1rem] rounded-[4rem] hover:cursor-pointer text-lg font-medium "
        >
          Contact Me
          <div className="bg-white rounded-full w-9 p-1 ml-3">
            <img src={arrow_right} alt="" />
          </div>
        </HashLink>

        <HashLink
          to="#about"
          className="absolute bottom-2 left-[30%] right-[30%]  flex justify-center"
        >
          <h1>Scroll Down</h1>
          <img src={arrow_down} alt="" className="h-8 animate-bounce " />
        </HashLink>
      </div>
    </div>
  );
};

export default Home;
