import React, { useState } from "react";
import "./App.css";
import "./components/DarkLight2/DarkLight2.css";

import Header from "./views/Header/Header";
import About from "./views/About/About";
import Proyectos from "./views/Proyectos/Proyectos";
import Skills from "./views/Skills/Skills";
import Contacto from "./views/Contacto/Contacto";
import Footer from "./views/Footer/Footer";
import ScrollUp from "./components/ScrollUp/ScrollUp";
import Journey from "./views/Journey/Journey";
import { NewNavbar } from "./views/Navbar/NewNavbar";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="px-5 bg-slate-50 dark:bg-black">
        <div className="flex flex-row justify-between items-center pt-6">
          <NewNavbar />
          <div className="mb-5">
            <label className="switch">
              <input type="checkbox" onClick={() => setDarkMode(!darkMode)} />
              <span className="slider dark:before:bg-slate-300"></span>
            </label>
          </div>
        </div>
        <Header />
        <About />
        <Journey />
        <Proyectos />
        <Skills />
        <Contacto />
      </main>
      <Footer />
      <ScrollUp />
    </div>
  );
};

export default App;
