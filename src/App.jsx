import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./views/Navbar/Navbar";
import Header from "./views/Header/Header";
import About from "./views/About/About";
import Proyectos from "./views/Proyectos/Proyectos";
import Skills from "./views/Skills/Skills";
import Contacto from "./views/Contacto/Contacto";
import Footer from "./views/Footer/Footer";
import ScrollUp from "./components/ScrollUp/ScrollUp";
import DarkLight2 from "./components/DarkLight2/DarkLight2";
import {FiMoon} from 'react-icons/fi'
import { CiDark } from "react-icons/ci";
import DarkLight from "./components/DarkLight/DarkLight";

const App = () => {
  const [darkMode,setDarkMode]=useState(false);
  
  //useEffect(() => {
  //  if(window.matchMedia('(prefers-color-scheme:dark)').matches) {
  //    setDarkMode('dark')
  //  } else {
  //    setDarkMode('light')
  //  }
  //}, [])

  //useEffect(() => {
  //  if(darkMode==='dark') {
  //    document.documentElement.classList.sdd('dark')
  //  } else {
  //    document.documentElement.classList.remove('dark')
  //  }
  //})

  //const handleDark=() => {
    
  //}

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="px-8 bg-slate-50 dark:bg-slate-950">
        <div className="flex flex-row justify-between">
          <Navbar />
          {/*<CiDark
            onClick={() => setDarkMode(!darkMode)}
            className=" mt-9 w-6 h-6 text-slate-700 dark:text-slate-300"
          />*/}
          <div className="py-10 mb-5">
            <label className="switch">
              <input type="checkbox" onClick={() => setDarkMode(!darkMode)}/>
              <span className="slider dark:before:bg-slate-300"></span>
            </label>
          </div>
          {/*<DarkLight2 onClick={() => setDarkMode(!darkMode)} />*/}
        </div>
        <Header />
        <About />
        <Skills />
        <Proyectos />
        <Contacto />
      </main>
      <Footer />
      <ScrollUp />
    </div>
  );
};

export default App;
