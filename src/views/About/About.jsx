import React from "react";
import Info from "../../components/InfoAbout/Info";
import cv from "../../assets/Cv Jesús Re FullStack Dev.pdf";
import ButtonCv from "../../components/ButtonCv/ButtonCv";

const About = () => {
  return (
    <section className="text-center py-16" id="about">
      <h2 className="text-3xl font-medium text-gray-700">Sobre mi</h2>
      <span className="text-l text-gray-600">Introducción</span>
      
        <div className="mx-auto">
          <div className="flex flex-col items-center basis-full">
            <Info />
          </div>
          <p className="text-gray-600 max-w-sm mx-auto mt-3">
            Fullstack developer. Empecé con la programación a principios del
            2022 de manera autodidacta. Luego decidí formarme con cursos
            orientados solamente al front.
          </p>
          <p className="text-gray-600 max-w-sm mx-auto mt-3 mb-5">
            En 2023 tomé la decisión de hacer un cambio grande en mi vida y me
            embarqué en el bootcamp de Henry. Adquirí herramientas fundamentales
            que me han preparado para dar mis primeros pasos en el mundo
            laboral.
          </p>

          <a download="" href={cv}>
            <ButtonCv />
          </a>
        </div>
      
    </section>
  );
};

export default About;
