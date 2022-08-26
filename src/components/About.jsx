import about from "../assets/about.png";
import { HashLink } from "react-router-hash-link";
import arrow_right from "../assets/arrow_right.svg";

const About = () => {
  return (
    <div id="about" className="min-h-screen">
      <h1 className="flex justify-center pt-6 p-2 text-blue font-medium text-3xl sm:font-semibold sm:text-4xl sm:p-4 md:font-black md:text-6xl md:p-6 bg-whiteYello">
        <span className="text-black p-3">-</span>
        About Me
        <span className="text-black p-3">-</span>
      </h1>
      <div className="h-[70%] md:flex mb-10 ">
        <img src={about} alt="about me image" className="h-[70vh]" />
        <div className="flex flex-col">
          <h1>Ilyes Ben Haj Dahmane</h1>
          <p className="text-lightBlack">Front-end developer</p>
          <p>
            I’m Ilyes, a 21 years old student at ISET RADES and I’m one year
            away from acquiring my licence degree in DSI. I develop modern and
            responsive webistes in professional manner from scratch, You can
            take a look at my works before starting to work together, and if you
            want to develop your business website you can contact me to start
            your project by now.
          </p>

          <HashLink
            to="#portfolio"
            className="bg-blue flex items-center px-3 py-[.4rem] lg:py-3 text-white w-[11.1rem] rounded-[4rem] hover:cursor-pointer text-lg font-medium "
          >
            Contact Me
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
