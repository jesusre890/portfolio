import React from "react";
import './App.css'
import Navbar from "./views/Navbar/Navbar";
import Header from "./views/Header/Header";
import About from "./views/About/About";
import Proyectos from "./views/Proyectos/Proyectos";
import Skills from "./views/Skills/Skills";
import Contacto from "./views/Contacto/Contacto";
import Footer from "./views/Footer/Footer";
import ScrollUp from "./components/ScrollUp/ScrollUp";


const App = () => {
  return (
    <>
      <main className="px-10 bg-slate-50">
        <Navbar />
        <Header />
        <About />
        <Skills />
        <Proyectos />
        <Contacto />
      </main>
      <Footer />
      <ScrollUp/>
    </>
  );
};

export default App;
