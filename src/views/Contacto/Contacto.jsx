import React from "react";
import { RiMailSendLine } from "react-icons/ri";
import { BiRightArrowAlt } from "react-icons/bi";
import { GrLinkedinOption } from "react-icons/gr";
import { FaDiscord } from "react-icons/fa";
import "./Contacto.css";
import Form from "../../components/Form/Form";

const Contacto = () => {
  return (
    <section className="text-center py-16" id="contacto">
      <h2 className="text-3xl font-medium text-gray-700 mb-4">Contacto</h2>
      <div className="contenedor">
        <h3 className="font-medium text-gray-700 text-lg">Escríbeme</h3>
        <div className="contacto_escribeme flex justify-center">
          {/*Email*/}
          <div className="info flex flex-col items-center p-3 bg-white m-3">
            <RiMailSendLine className=" text-2xl text-gray-600" />

            <h3 className="font-medium text-gray-700 text-md pt-2">Email</h3>
            <span className="flex flex-row items-center gap-2 text-gray-500 font-small text-sm">
              jesusre890@
            </span>
            <a
              href="mailto:jesusre890@gmail.com"
              className="escribeme font-medium text-gray-500 text-lg pt-2 flex items-center gap-1"
            >
              <BiRightArrowAlt className="flecha" />
            </a>
          </div>
          {/*Linkedin*/}
          <div className="info flex flex-col items-center p-3 bg-white m-3">
            <GrLinkedinOption className=" text-2xl text-gray-600" />

            <h3 className="font-medium text-gray-700 text-md pt-2">Linkedin</h3>
            <span className="flex flex-row items-center gap-2 text-gray-500 font-small text-sm">
              /in/jesus-re
            </span>
            <a
              href="https://www.linkedin.com/in/jesus-re/"
              className="escribeme font-medium text-gray-500 text-lg pt-2 flex items-center gap-1"
              target="_blank"
            >
              <BiRightArrowAlt className="flecha" />
            </a>
          </div>
          {/*Discord*/}
          <div className="info flex flex-col items-center p-3 bg-white m-3">
            <FaDiscord className=" text-2xl text-gray-600" />

            <h3 className="font-medium text-gray-700 text-md pt-2">Discord</h3>
            <span className="flex flex-row items-center gap-2 text-gray-500 font-small text-sm">
              Jesús Re
            </span>
            <a
              href="https://www.discordapp.com/users/690992345155633195"
              className="escribeme font-medium text-gray-500 text-lg pt-2 flex items-center gap-1"
              target="_blank"
            >
              <BiRightArrowAlt className="flecha" />
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="font-medium text-gray-700 text-lg mt-10">Envíame un mensaje directo</h3>
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Contacto;
