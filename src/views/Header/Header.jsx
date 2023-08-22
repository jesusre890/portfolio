import React from 'react'
import foto from "../../assets/foto.png";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import {BiLogoGmail} from "react-icons/bi";
import style from './Header.module.css'
import Social from '../../components/Social/Social';

const Header = () => {
  return (
    <>
      <div className="py-10 text-center text-xl">
        <h2 className="text-2xl">Jesús Re</h2>
        <h3>FullStack Web Developer</h3>
      </div>
      <div className="flex justify-center items-center ">
        <Social/>
      </div>
      <div className='relative w-80 h-80 mt-10 mx-auto opacity-85'>
        <img src={foto} alt="foto de perfil" />
      </div>
    </>
  );
}

export default Header
