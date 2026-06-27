import React from "react";
import { RiMailSendLine } from "react-icons/ri";
import { BiRightArrowAlt } from "react-icons/bi";
import { GrLinkedinOption } from "react-icons/gr";
import { FaDiscord } from "react-icons/fa";
import "./Contacto.css";
import FormHook from "../../components/Form/FormHook";

const contactItems = [
  {
    Icon: RiMailSendLine,
    title: "Email",
    text: "jesusre890@",
    href: "mailto:jesusre890@gmail.com",
    external: false,
  },
  {
    Icon: GrLinkedinOption,
    title: "Linkedin",
    text: "/in/jesus-re",
    href: "https://www.linkedin.com/in/jesus-re/",
    external: true,
  },
  {
    Icon: FaDiscord,
    title: "Discord",
    text: "Jesús Re",
    href: "https://www.discordapp.com/users/690992345155633195",
    external: true,
  },
];

const Contacto = () => {
  return (
    <section className="text-center py-16" id="contacto">
      <h2 className="text-3xl font-medium text-gray-700 mb-4 dark:text-blue-gray-100">
        Contacto
      </h2>
      <div className="contenedor flex flex-col items-center md:flex justify-around md:flex-row lg:justify-center lg:gap-32">
        <div className="contacto_escribeme">
          <div className="md:flex-col">
            {contactItems.map(({ Icon, title, text, href, external }) => (
              <a
                key={title}
                href={href}
                {...(external && { target: "_blank", rel: "noopener noreferrer" })}
              >
                <div className="info flex flex-col items-center p-3 bg-white m-3 dark:bg-gray-200">
                  <Icon className="text-2xl text-gray-800" aria-hidden="true" />
                  <h3 className="font-medium text-gray-800 text-md pt-2">{title}</h3>
                  <span className="flex flex-row items-center gap-2 text-gray-500 font-small text-sm">
                    {text}
                  </span>
                  <BiRightArrowAlt className="flecha" aria-hidden="true" />
                </div>
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center">
          <FormHook />
        </div>
      </div>
    </section>
  );
};

export default Contacto;
