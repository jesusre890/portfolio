import React from "react";
import Info from "../../components/InfoAbout/Info";
import cv from "../../assets/Cv Jesús Re FullStack Dev.pdf";
import ButtonCv from "../../components/ButtonCv/ButtonCv";
import './About.css'

const About = () => {
  return (
    <section className="text-center py-16 mt-24" id="about">
      <div className=" md:ml-32 lg:ml-72">
        <h2 className="sobreMi text-3xl font-medium text-gray-700 dark:text-slate-300">
          Sobre mi
        </h2>
        <p className="introD text-l text-gray-600 dark:text-slate-400">
          Introducción
        </p>
      </div>

      <div className="mx-auto mt-5 md:flex md:justify-center md:items-center md:gap-10 lg:justify-center lg:gap-40">
        <div className="infoS flex flex-col items-center basis-full md:basis-0">
          <Info />
        </div>
        <div>
          <p className="text-gray-600 max-w-sm mx-auto mt-3 md:max-w-md lg:max-w-lg md:mb-12 md:mt-0 dark:text-slate-300">
            Fullstack developer. Empecé con la programación a principios del
            2022 de manera autodidacta. Luego decidí formarme con cursos
            orientados solamente al front.
          </p>
          <p className="text-gray-600 max-w-sm mx-auto mt-3 mb-8 md:mb-0 md:max-w-md lg:max-w-lg md:mt-0 dark:text-slate-300">
            En 2023 tomé la decisión de hacer un cambio grande y me embarqué en
            el bootcamp de Henry. Adquirí herramientas fundamentales que me han
            preparado para dar mis primeros pasos en el mundo laboral.
          </p>

          <a download="" href={cv}>
            <ButtonCv />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
