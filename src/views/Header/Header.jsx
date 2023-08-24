import React from "react";
import foto from "../../assets/foto.png";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
import style from "./Header.module.css";
import Social from "../../components/Social/Social";
import './Header.css'
import Social2 from "../../components/Social2/Social2";

const Header = () => {
  return (
    <>
      <div className="py-10 text-center">
        <h1 className="text-4xl font-semibold pb-2 text-gray-700">Jesús Re</h1>
        <h3 className=" text-xl text-gray-600">FullStack Web Developer</h3>
        <br />
        <p className="text-xl pb-3 text-gray-600">Bienvenido/a!</p>
        <p className="text-gray-600 max-w-sm mx-auto">
          Recién graduado del bootcamp de Henry, descubrí la inmensidad del
          mundo de la programación y su potencial para soluciones infinitas.
          Contáctame por cualquier consulta.
        </p>
      </div>
      <div className="flex justify-center items-center ">
        {/*<Social />*/}
        <Social2 />
      </div>
      <div className="imagenPerfil relative mx-auto mt-11 opacity-90"></div>
    </>
  );
};

export default Header;
