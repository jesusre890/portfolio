import React from "react";
import { BsHeadset } from "react-icons/bs";
import { AiOutlineFieldTime } from "react-icons/ai";
import { GrMapLocation } from "react-icons/gr";
import { ImLocation } from "react-icons/im";
import { BiLogoVisualStudio } from "react-icons/bi";
import { BsCheck2Circle } from "react-icons/bs";
import "./Info.css";

const Info = () => {
  return (
    <div className="flex gap-2 md:gap-4 md:mb-8 md:flex-col">
      <div
        className="card2 mx-auto my-4 flex justify-center items-center flex-col px-5 py-5 md:my-0 dark:bg-slate-200"
      >
        <GrMapLocation />
        <h3 className="font-medium text-gray-700 text-lg">Ubicación</h3>
        <span className="flex flex-row items-center gap-2 text-gray-500 font-medium text-sm">
          Argentina
          <ImLocation />
        </span>
      </div>

      <div className="card2 mx-auto my-4 flex justify-center items-center flex-col px-5 py-5 md:my-0 dark:bg-slate-200">
        <BiLogoVisualStudio className="icono" />
        <h3 className="font-medium text-gray-700 text-lg">Proyectos</h3>
        <span className="flex flex-row items-center gap-2 text-gray-500 font-medium text-sm">
          5
          <BsCheck2Circle />
        </span>
      </div>

      <div className="card2 mx-auto my-4 flex justify-center items-center flex-col px-5 py-5 md:my-0 dark:bg-slate-200">
        <BsHeadset className="icono" />
        <h3 className="font-medium text-gray-700 text-lg">Soporte</h3>
        <span className="flex flex-row items-center gap-2 text-gray-500 font-medium text-sm">
          Full time
          <AiOutlineFieldTime />
        </span>
      </div>
    </div>
  );
};

export default Info;
