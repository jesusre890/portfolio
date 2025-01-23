import React from "react";
import Info from "../../components/InfoAbout/Info";
import cv from "../../assets/CV - Jesús Re - Fullstack Developer.pdf";
import ButtonCv from "../../components/ButtonCv/ButtonCv";
import './About.css'

const About = () => {
  return (
    <section className="text-center py-16 mt-24" id="about">
      <div className=" md:ml-32 lg:ml-72">
        <h2 className="sobreMi text-3xl font-medium text-gray-700 dark:text-blue-gray-100">
          Sobre mi
        </h2>
        <p className="introD text-l text-gray-600 dark:text-blue-gray-300">
          Introducción
        </p>
      </div>

      <div className="mx-auto mt-5 md:flex md:justify-center md:items-center md:gap-10 lg:justify-center lg:gap-40">
        <div className="infoS flex flex-col items-center basis-full md:basis-0">
          <Info />
        </div>
        <div>
          <p className="text-gray-600 max-w-sm mx-auto mt-3 md:max-w-md lg:max-w-lg md:mb-12 md:mt-0 dark:text-blue-gray-100">
            Dedicado a la programación desde 2022, he enfocado mi tiempo a
            desarrollar habilidades sólidas en el desarrollo web fullstack. Mi
            trayectoria incluye un aprendizaje autodidacta y una formación
            intensiva en tecnologías frontend.
          </p>
          <p className="text-gray-600 max-w-sm mx-auto mt-3 mb-8 md:mb-0 md:max-w-md lg:max-w-lg md:mt-0 dark:text-blue-gray-100">
            Participé en multiples proyectos personales y colaborativos, donde me enfoque principalmente en en desarrollo frontend, y actualmente me dedico a esa orientación al 100%.
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
