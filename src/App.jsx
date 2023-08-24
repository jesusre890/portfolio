import React from 'react'
import Navbar from './views/Navbar/Navbar';
import Header from './views/Header/Header';
import About from './views/About/About';

const App = () => {
  return (
    <div className='px-10'>
      <Navbar />
      <Header />
      <About />
    </div>
  )
}

export default App
