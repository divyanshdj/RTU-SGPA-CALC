import React, { useState } from 'react';
import { FaSquareGithub, FaLinkedin, FaSquareXTwitter } from 'react-icons/fa6';

const Social = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={togglePopup}
        className="bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition duration-200 text-sm sm:text-base"
      >
        Connect with Me
      </button>

      {isOpen && (
        <div className="mt-2 p-2 sm:p-4 bg-white shadow-lg rounded-lg border border-gray-300">
          <div className="flex flex-col items-center gap-2">
            <a
              className="flex items-center border border-gray-300 px-2 sm:px-3 py-1 sm:py-2 rounded-lg hover:bg-gray-100 transition duration-200 text-sm sm:text-base"
              href="http://github.com/divyanshdj"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareGithub className="mr-2 w-5 h-5 sm:w-6 sm:h-6" />
              Github
            </a>
            <a
              className="flex items-center border border-gray-300 px-2 sm:px-3 py-1 sm:py-2 rounded-lg hover:bg-gray-100 transition duration-200 text-sm sm:text-base"
              href="https://www.linkedin.com/in/divyansh-jain-29712726b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="mr-2 w-5 h-5 sm:w-6 sm:h-6" />
              Linkedin
            </a>
            <a
              className="flex items-center border border-gray-300 px-2 sm:px-3 py-1 sm:py-2 rounded-lg hover:bg-gray-100 transition duration-200 text-sm sm:text-base"
              href="https://twitter.com/divyansh_dj3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareXTwitter className="mr-2 w-5 h-5 sm:w-6 sm:h-6" />
              Twitter
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Social;
