import React from 'react'
import { BiLogoGmail } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer flex flex-col items-center">
      <div className="flex flex-col items-center">
        <h1>Jesús Re</h1>
        <ul className="flex flex-col items-center">
          <div className="cardF">
            <a
              className="socialContainerF containerOne"
              href="mailto:jesusre890@gmail.com"
              target="_blank"
            >
              <svg viewBox="0 0 16 16" className="socialSvgF instagramSvg">
                <BiLogoGmail />
              </svg>
            </a>

            <a
              className="socialContainerF containerThree"
              href="https://www.linkedin.com/in/jesus-re/"
              target="_blank"
            >
              <svg viewBox="0 0 448 512" className="socialSvg linkdinSvg">
                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
              </svg>
            </a>

            <a
              className="socialContainerF containerFour"
              href="https://github.com/jesusre890"
              target="_blank"
            >
              <svg viewBox="1 0 13.5 16" className="socialSvg whatsappSvg">
                <AiFillGithub className="gitHub" />
              </svg>
            </a>
          </div>
        </ul>
      </div>
    </footer>
  );
}

export default Footer
