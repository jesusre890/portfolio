import React from "react";
import "./Menu.css";

const Menu = () => {
  return (
    <div className="menuC flex flex-col gap-4 rounded-lg md:flex-row">
      {/*<a
        href="#"
        className="acc flex flex-row items-center text-gray-500 font-medium text-md dark:text-slate-300"
      >
        Home
      </a>*/}
      <a
        href="#about"
        className="acc flex flex-row items-center text-gray-700 font-medium text-md dark:text-blue-gray-100"
      >
        Perfil
      </a>
      <a
        href="#skills"
        className="acc flex flex-row items-center text-gray-700 font-medium text-md dark:text-blue-gray-100"
      >
        Skills
      </a>
      <a
        href="#proyectos"
        className="acc flex flex-row items-center text-gray-700 font-medium text-md dark:text-blue-gray-100"
      >
        Proyectos
      </a>
      <a
        href="#journey"
        className="acc flex flex-row items-center text-gray-700 font-medium text-md dark:text-blue-gray-100"
      >
        Viaje
      </a>
      <a
        href="#contacto"
        className="acc flex flex-row items-center text-gray-700 font-medium text-md dark:text-blue-gray-100"
      >
        Contacto
      </a>
    </div>
  );
};

export default Menu;
