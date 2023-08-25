import React from 'react'
import Navbar from './views/Navbar/Navbar';
import Header from './views/Header/Header';
import About from './views/About/About';
import Proyectos from './views/Proyectos/Proyectos';
import Skills from './views/Skills/Skills';
import Contacto from './views/Contacto/Contacto';
import Footer from './views/Footer/Footer';

const App = () => {
  return (
    <div className='px-10 bg-slate-50'>
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Proyectos />
      <Contacto />
      <Footer/>
    </div>
  )
}

export default App
