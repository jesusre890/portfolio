import React, { useState } from "react";
import { FaMoon } from "react-icons/fa";
import { GrMenu } from "react-icons/gr";
import { AiOutlineMenu } from "react-icons/ai";
import { GrFormClose } from "react-icons/gr";
import { AiOutlineClose } from "react-icons/ai";
import DarkLight from "../../components/DarkLight/DarkLight.jsx";
import DarkLight2 from "../../components/DarkLight2/DarkLight2.jsx";
import Menu from "./Menu.jsx";
import ButtonMenu from "../../components/ButtonMenu/ButtonMenu.jsx";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const hamburg = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="headerM">
      <div className="py-10 mb-5 flex justify-between">
        <div className="flex items-center gap-1">
          <nav className="flex w-1/3 justify-start">
            <div className="hidden w-full justify-between md:flex">
              <Menu />
            </div>
            <div className="flex md:hidden">
              <button className=" text-gray-500" onClick={hamburg}>
                {isOpen ? (
                  <AiOutlineClose
                    className=" text-gray-600 mr-2 dark:text-gray-300"
                  />
                ) : (
                  <ButtonMenu />
                )}
              </button>
            </div>
          </nav>
          {isOpen && (
            <div className="flex flex-col items-center basis-full">
              <Menu />
            </div>
          )}
        </div>
      </div>

      {/*<ul className="flex items-center justify-end">
        <li>
          <DarkLight2 />
        </li>
      </ul>*/}
    </div>
  );
};

export default Navbar;
