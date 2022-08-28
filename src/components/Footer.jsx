import twitter from "../assets/twitter_white.svg";
import linkedin from "../assets/linkedin_white.svg";
import github from "../assets/github_white.svg";
import facebook from "../assets/facebook_white.svg";

const Footer = () => {
  return (
    <div className="bg-blue pt-10 pb-2 px-10" id="footer">
      <div className="flex flex-col sm:flex-row sm:justify-around ">
        <p className="text-white md:w-[30%] text-lg ">
          You can contact me to start your project, and you can get a 10%
          discount for your first project.
        </p>
        <div>
          <h1 className="text-white text-xl mb-3 mt-10 sm:mt-0 flex justify-center">
            Follow
          </h1>
          <div className="flex  justify-center mb-10 ">
            <a href="https://twitter.com/hajdahman_ilyes" target="_blank">
              <img
                className="hover:cursor-pointer hover:contrast-50 w-10 mx-2"
                src={twitter}
                alt=""
              />
            </a>
            <a href="https://github.com/ilyes-B-H-D" target="_blank">
              <img
                className="hover:cursor-pointer hover:contrast-50 w-10 mx-2"
                src={github}
                alt=""
              />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100082682907741"
              target="_blank"
            >
              <img
                className="hover:cursor-pointer hover:contrast-50 w-10 mx-2"
                src={facebook}
                alt=""
              />
            </a>
            <a
              href="https://www.linkedin.com/in/ilyes-ben-haj-dahmane-53a95021a/"
              target="_blank"
            >
              <img
                className="hover:cursor-pointer hover:contrast-50 w-10 mx-2"
                src={linkedin}
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
      <p className="flex justify-center">coded with ❤️ by me</p>
    </div>
  );
};

export default Footer;
