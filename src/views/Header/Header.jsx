import React from "react";
import foto from "../../assets/foto.png";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
import style from "./Header.module.css";
import Social from "../../components/Social/Social";
import './Header.css'

const Header = () => {
  return (
    <>
      <div className="py-10 text-center">
        <h1 className="text-3xl font-medium pb-2 text-gray-700">Jesús Re</h1>
        <h3 className=" text-xl text-gray-600">FullStack Web Developer</h3>
        <br />
        <p className="text-xl pb-3 text-gray-600">¡Bienvenido!</p>
        <p className="text-gray-600">
          Recién graduado del bootcamp de Henry, descubrí la inmensidad del
          mundo de la programación y su potencial para soluciones infinitas.
          Fusiono mi pasión por el diseño con la creación de experiencias de
          usuario. ¡Contáctame para cualquier consulta!
        </p>
      </div>
      <div className="flex justify-center items-center ">
        <Social />
      </div>
      {/*<div className="relative w-72 h-72 mt-10 mx-auto opacity-85">
        <img src={foto} alt="foto de perfil"/>
      </div>*/}
      <div className="imagenPerfil relative mx-auto mt-10 opacity-90"></div>
    </>
  );
};

export default Header;
