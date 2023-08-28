import React from "react";
import './Menu.css'


const Menu = () => {
  return (
    <div className="menuC flex flex-col gap-5 rounded-lg md:flex-row">
      <a
        href="#"
        className="acc flex flex-row items-center text-gray-500 font-medium text-md dark:text-slate-300"
      >
        Home
      </a>
      <a
        href="#about"
        className="acc flex flex-row items-center text-gray-500 font-medium text-md dark:text-slate-300"
      >
        About
      </a>
      <a
        href="#skills"
        className="acc flex flex-row items-center text-gray-500 font-medium text-md dark:text-slate-300"
      >
        Skills
      </a>
      <a
        href="#proyectos"
        className="acc flex flex-row items-center text-gray-500 font-medium text-md dark:text-slate-300"
      >
        Proyectos
      </a>
      <a
        href="#contacto"
        className="acc flex flex-row items-center text-gray-500 font-medium text-md dark:text-slate-300"
      >
        Contacto
      </a>
    </div>
  );
};

export default Menu;
