import React from 'react'
import { BiLogoGmail } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";
import { BiCopyright } from "react-icons/bi";
import './Footer.css'

const Footer = () => {
  return (
    <footer className="pie flex items-center justify-center pt-10 dark:bg-gray-900">
      <div className="flex flex-col items-center">
        <h1 className="font-medium text-gray-700 text-2xl mt-7 dark:text-slate-300">
          Jesús Re
        </h1>
        <div className="flex gap-5 pt-4">
          <a
            href="#about"
            className="flex flex-row items-center text-gray-400 font-medium text-sm"
          >
            About
          </a>
          <a
            href="#skills"
            className="flex flex-row items-center text-gray-400 font-medium text-sm"
          >
            Skills
          </a>
          <a
            href="#proyectos"
            className="flex flex-row items-center text-gray-400 font-medium text-sm"
          >
            Proyectos
          </a>
        </div>
        <ul className="flex flex-col items-center">
          <div className="cardF ">
            <a
              className="socialContainerF containerOne dark:bg-gray-800 dark:hover:bg-red-500"
              href="mailto:jesusre890@gmail.com"
              target="_blank"
            >
              <svg viewBox="0 0 16 16" className="socialSvgF instagramSvg ">
                <BiLogoGmail />
              </svg>
            </a>

            <a
              className="socialContainerF containerThree dark:bg-gray-800 dark:hover:bg-cyan-600"
              href="https://www.linkedin.com/in/jesus-re/"
              target="_blank"
            >
              <svg viewBox="0 0 448 512" className="socialSvgF linkdinSvg">
                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
              </svg>
            </a>

            <a
              className="socialContainerF containerFour dark:bg-gray-800 dark:hover:bg-slate-500"
              href="https://github.com/jesusre890"
              target="_blank"
            >
              <svg
                viewBox="1 0 13.5 16"
                className="socialSvgF whatsappSvg"
              >
                <AiFillGithub className="gitHub" />
              </svg>
            </a>
          </div>
        </ul>
        <h1 className="flex items-center gap-2 font-medium text-gray-500 text-sm my-5 dark:text-slate-400">
          <BiCopyright />
          Jesús Re 2023
        </h1>
      </div>
    </footer>
  );
}

export default Footer
