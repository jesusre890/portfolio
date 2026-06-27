import React from "react";
import "./Header.css";
import Social2 from "../../components/Social2/Social2";

const Header = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row md:justify-center items-center md:gap-16 mt-32">
        <div className=" py-10 text-center">
          <h1 className="text-4xl font-semibold pb-2 pt-2 text-gray-800 dark:text-blue-gray-100">
            Jesús Re
          </h1>
          <h3 className=" text-xl text-gray-700 dark:text-blue-gray-100">
            Semi Senior Frontend Developer
          </h3>
          <br />
          <p className="text-xl pb-3 text-gray-600 dark:text-blue-gray-100">
            Enfocado en construir productos reales, mantenibles y orientados al
            negocio.
          </p>
          <p className="text-gray-600 max-w-sm mx-auto md:max-w-md lg:max-w-lg dark:text-blue-gray-100">
            Trabajo con React, TypeScript y Next.js desarrollando aplicaciones
            web en producción. Participo en refactorizaciones, migraciones
            tecnológicas y mejoras de arquitectura frontend, con foco en
            calidad, performance y experiencia de usuario.
          </p>
          <div className="flex justify-center items-center pt-8">
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
