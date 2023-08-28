import React from "react";
import './Menu.css'


const Menu = () => {
  return (
    <div className="menuC flex gap-5 rounded-lg ">
      <a
        href="#"
        className="flex flex-row items-center text-gray-500 font-medium text-md dark:text-slate-300"
      >
        Home
      </a>
      <a
        href="#about"
        className="flex flex-row items-center text-gray-500 font-medium text-md dark:text-slate-300"
      >
        About
      </a>
      <a
        href="#skills"
        className="flex flex-row items-center text-gray-500 font-medium text-md dark:text-slate-300"
      >
        Skills
      </a>
      <a
        href="#proyectos"
        className="flex flex-row items-center text-gray-500 font-medium text-md dark:text-slate-300"
      >
        Proyectos
      </a>
      <a
        href="#contacto"
        className="flex flex-row items-center text-gray-500 font-medium text-md dark:text-slate-300"
      >
        Contacto
      </a>
    </div>
  );
};

export default Menu;
