import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import send from "../assets/send.svg";
import phone from "../assets/phone.svg";
import email from "../assets/email.svg";
import location from "../assets/location.svg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, []);

  const form = useRef();
  const confirmationMsg = "";
  const sendEmail = (e) => {
    e.preventDefault();
    confirmationMsg = "flex";
    emailjs
      .sendForm(
        "service_995scxs",
        "template_yihykcs",
        form.current,
        "TtgW5XvTlq1MVghtw"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="contact">
      <h1 className="flex justify-center pt-6 p-2 text-blue font-medium text-3xl sm:font-semibold sm:text-4xl sm:p-4 md:font-black md:text-6xl md:p-6 bg-whiteYello">
        <span className="text-black p-3">-</span>
        Contact Me
        <span className="text-black p-3">-</span>
      </h1>
      <div className="bg-whiteYello h-full md:flex">
        <div data-aos='fade-right' className="flex flex-col ml-[10%]">
          <p className="mt-20 sm:ml-3 text-3xl font-medium ">
            Let's discuss your project
          </p>
          <div className="flex items-center ">
            <img src={phone} alt="" height={40} width={40} className="my-6" />
            <div className="text-2xl font-semibold"> Phone </div>
          </div>
          <span className="sm:ml-12 text-lightBlack ">+216 92 822 323</span>

          <div className="flex items-center">
            <img src={email} alt="" height={40} width={40} className="my-6" />
            <div className="text-2xl font-semibold"> Email Adress </div>
          </div>
          <span className="sm:ml-12 text-lightBlack">
            <a href="mailto:ilyesbenhajdahmane@gmail.com">
              ilyesbenhajdahmane@gmail.com
            </a>
          </span>

          <div className="flex items-center">
            <img
              src={location}
              alt=""
              height={30}
              width={40}
              className="my-6"
            />
            <div className="text-2xl font-semibold"> Official Adress </div>
          </div>
          <span className="sm:ml-12 text-lightBlack">
            Djerba, Medenine, Tunisia
          </span>
        </div>
        <div  data-aos='fade-left' className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <form ref={form} onSubmit={sendEmail} className="space-y-8">
            <div className="md:flex justify-between ">
              <div className="flex-col">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-black "
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="user_email"
                  id="email"
                  className="shadow-sm bg-bgInput bg-opacity-10 text-black text-sm rounded-lg  block w-full p-3"
                  placeholder="name@gmail.com"
                  required
                />
              </div>
              <div className="flex-col md:ml-5">
                <label
                  htmlFor="subject"
                  className="block mb-2 mt-5 sm:mt-0 text-sm font-medium text-black "
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="block p-3 w-full text-sm text-black bg-bgInput bg-opacity-10 rounded-lg shadow-sm "
                  placeholder="Let us know how we can help you"
                  required
                />
              </div>
            </div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-black"
            >
              Your name
            </label>
            <input
              type="text"
              name="user_name"
              id="name"
              className="shadow-sm bg-bgInput bg-opacity-10 text-black text-sm rounded-lg  block w-full p-2.5"
              placeholder="your name"
              required
            />
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-black "
              >
                Your message
              </label>
              <textarea
                name="message"
                id="message"
                rows="6"
                className="block p-2.5 w-full text-sm text-black bg-bgInput bg-opacity-10 rounded-lg shadow-sm "
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <div
              className="bg-blue w-52 rounded-lg flex hover:cursor-pointer
            items-center  p-2 px-5 text-md font-medium text-center text-white bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 "
            >
              <input
                type="submit"
                value="send"
                className="hover:cursor-pointer"
              />
              <img
                src={send}
                alt="send icon"
                width={30}
                height={30}
                className="mx-2"
              />
            </div>
          </form>
          {!confirmationMsg == "" && (
            <div className="absolute top-0 bg-blue">
              email send seccussfully
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Contact;
