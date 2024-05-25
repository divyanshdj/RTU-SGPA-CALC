import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Social = () => {
  return (
    <div className="h-10 flex justify-center items-center gap-3">
      <a
        className="border-black border-2 px-2 rounded-lg hover:text-white hover:bg-black"
        href="http://github.com/divyanshdj"
        target="_blank"
      >
        <div className="flex flex-row justify-center items-center gap-1">
          <FaSquareGithub /> Github
        </div>
      </a>
      <a
        className="border-black border-2 px-2 rounded-lg hover:text-white hover:bg-black"
        href="http://github.com/divyanshdj"
        target="_blank"
      >
        <div className="flex flex-row justify-center items-center gap-1">
          <FaLinkedin /> Linkedin
        </div>
      </a>
      <a
        className="border-black border-2 px-2 rounded-lg hover:text-white hover:bg-black"
        href="https://twitter.com/divyansh_dj3"
        target="_blank"
      >
        <div className="flex flex-row justify-center items-center gap-1">
          <FaSquareXTwitter /> Twitter
        </div>
      </a>
    </div>
  );
};

export default Social;
