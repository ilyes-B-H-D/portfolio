import humberger from "../assets/humberger.svg";
import { useState } from "react";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <div className="sticky top-0 bg-white bg-opacity-60  backdrop-filter backdrop-blur-lg z-10">
      <div className="max-w-5xl mx-auto px-4 ">
        <div className="flex items-center justify-between h-16">
          <h1 className="font-bold text-semibold text-[1.8rem]">
            <a href="/">
              ilyes <span className="text-blue">BHD</span>
            </a>
          </h1>
          <div className="hidden lg:flex space-x-6 text-gray-900 font-medium mt-3">
            <HashLink
              to="#home"
              className="hover:text-blue text-xl font-semibold"
            >
              Home
            </HashLink>

            <HashLink
              to="#about"
              className="hover:text-blue text-xl font-semibold"
            >
              About
            </HashLink>

            <HashLink
              to="#skills"
              className="hover:text-blue text-xl font-semibold"
            >
              Skills
            </HashLink>
            <HashLink
              to="#portfolio"
              className="hover:text-blue text-xl font-semibold"
            >
              Portfolio
            </HashLink>
            <HashLink
              to="#contact"
              className="hover:text-blue text-xl font-semibold"
            >
              Contact
            </HashLink>
          </div>
        </div>
        <div className="lg:hidden">
          <img
            src={humberger}
            alt=""
            className="absolute top-5 right-5 hover:cursor-pointer"
            onClick={() => {
              setNavbar(!navbar);
            }}
          />
          <div
            className={
              "lg:hidden" + (navbar ? " flex justify-center " : " hidden")
            }
          >
            <div className="flex flex-col items-center absolute bg-blue top-20 rounded-xl p-8 w-[80%] leading-10">
              <HashLink
                to="#home"
                className="text-white hover:text-black"
                onClick={() => {
                  setNavbar(!navbar);
                }}
              >
                Home
              </HashLink>

              <HashLink
                to="#about"
                className="text-white hover:text-black"
                onClick={() => {
                  setNavbar(!navbar);
                }}
              >
                About
              </HashLink>

              <HashLink
                to="#skills"
                className="text-white hover:text-black"
                onClick={() => {
                  setNavbar(!navbar);
                }}
              >
                Skills
              </HashLink>
              <HashLink
                to="#portfolio"
                className="text-white hover:text-black"
                onClick={() => {
                  setNavbar(!navbar);
                }}
              >
                Portfolio
              </HashLink>
              <HashLink
                to="#contact"
                className="text-white hover:text-black"
                onClick={() => {
                  setNavbar(!navbar);
                }}
              >
                Contact
              </HashLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
