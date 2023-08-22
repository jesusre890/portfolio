import React, { useState } from "react";
import { FaMoon } from "react-icons/fa";
import { GrMenu } from "react-icons/gr";
import { AiOutlineMenu } from "react-icons/ai";
import {GrFormClose} from "react-icons/gr";
import DarkLight from "../../components/DarkLight/DarkLight.jsx";
import DarkLight2 from "../../components/DarkLight2/DarkLight2.jsx";
import Menu from "./Menu.jsx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const hamburg = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <section className="h-[100px]">
        <div className="py-10 mb-12 flex justify-between">
          <div>
            <nav className="flex w-1/3 justify-start">
              <div className="hidden w-full justify-between md:flex">
                <Menu />
              </div>
              <div className="md:hidden">
                <button onClick={hamburg}>{isOpen ? <GrFormClose/> : <AiOutlineMenu />}</button>
              </div>
            </nav>
            {isOpen && (
              <div className="flex flex-col items-center basis-full">
                <Menu />
              </div>
            )}
          </div>
          <ul className="flex items-center justify-end">
            <li>
              <DarkLight2 />
              {/*<DarkLight/>*/}
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Navbar;
