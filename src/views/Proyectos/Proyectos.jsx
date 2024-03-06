//import React from 'react'
import './Proyectos.css'
//import Proy from '../../components/Proy/Proy';
import NewProyects from '../../components/Proy/NewProyects';

const Proyectos = () => {
    return (
      <section className="text-center py-16" id="proyectos">
        <h2 className="text-3xl font-medium text-gray-700 mb-4 dark:text-blue-gray-100">
          Proyectos
        </h2>
        <span className="text-l text-gray-500 dark:text-blue-gray-300">
          Realizados
        </span>
        {/*<div className="flex items-center mt-8 flex-col">
          <Proy />
        </div>*/}
        <div className="flex items-center mt-8 flex-col">
          <NewProyects/>
        </div>
      </section>
    );
}

export default Proyectos
