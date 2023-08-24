import React from "react";
import {BsHeadset} from "react-icons/bs";
import { AiOutlineFieldTime } from "react-icons/ai";
import './Info.css'

const Info = () => {
  return (
    <>
      <div className="card2 mx-auto my-4 flex justify-center items-center flex-col px-5 py-5">
        <BsHeadset className="icono" />
              <h3 className="font-medium text-gray-700">Soporte</h3>
              <span className="flex flex-row">Full time<AiOutlineFieldTime/></span>
      </div>
    </>
  );
};

export default Info;
