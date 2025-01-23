import React from "react";
import foto from "../../assets/foto.png";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
import style from "./Header.module.css";
import Social from "../../components/Social/Social";
import "./Header.css";
import Social2 from "../../components/Social2/Social2";
import NombreNavideño from "../../components/NombreNavideño/NombreNavideño";

const Header = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row md:justify-center items-center md:gap-16 mt-32">
        <div className=" py-10 text-center">
          <h1 className="text-4xl font-semibold pb-2 pt-2 text-gray-800 dark:text-blue-gray-100">
            Jesús Re
          </h1>
          <h3 className=" text-xl text-gray-700 dark:text-blue-gray-100">
            Frontend Web Developer
          </h3>
          <br />
          <p className="text-xl pb-3 text-gray-600 dark:text-blue-gray-100">
            Bienvenido/a!
          </p>
          <p className="text-gray-600 max-w-sm mx-auto md:max-w-md lg:max-w-lg dark:text-blue-gray-100">
            Soy un desarrollador frontend apasionado por crear experiencias web
            interactivas. A lo largo de mi trayectoria, he adquirido sólidas
            habilidades en React,
            TypeScript, Zustand, Redux, entre otras. 
          </p>
          <div className="flex justify-center items-center pt-8">
            {/*<Social />*/}
            <Social2 />
          </div>
        </div>
        <div>
          <div className="imagenPerfil relative mx-auto mt-11 mb-11 opacity-90 md:w-80 md:h-80"></div>
        </div>
      </div>
    </>
  );
};

export default Header;
