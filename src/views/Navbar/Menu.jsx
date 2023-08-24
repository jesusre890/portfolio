import React from "react";
import './Menu.css'


const Menu = () => {
  return (
    <div className="menuC flex gap-5 bg-white rounded-lg p-2">
      <a
        href="/"
        className="flex flex-row items-center text-gray-500 font-medium text-md"
      >
        Home
      </a>
      <a
        href="/about"
        className="flex flex-row items-center text-gray-500 font-medium text-md"
      >
        About
      </a>
      <a
        href="/proyectos"
        className="flex flex-row items-center text-gray-500 font-medium text-md"
      >
        Skills
      </a>
      <a
        href="/proyectos"
        className="flex flex-row items-center text-gray-500 font-medium text-md"
      >
        Proyectos
      </a>
      <a
        href="/contacto"
        className="flex flex-row items-center text-gray-500 font-medium text-md"
      >
        Contacto
      </a>
    </div>
  );
};

export default Menu;
