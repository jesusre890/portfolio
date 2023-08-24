import React from 'react'
import Navbar from './views/Navbar/Navbar';
import Header from './views/Header/Header';
import About from './views/About/About';
import Skills from './components/Skills/Skills';

const App = () => {
  return (
    <div className='px-10 bg-slate-50'>
      <Navbar />
      <Header />
      <About />
      <Skills />
    </div>
  )
}

export default App
