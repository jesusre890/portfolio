import React from 'react'
import './Proyectos.css'
import Proy from '../../components/Proy/Proy';

const Proyectos = () => {
    return (
      <section className="text-center py-16" id="proyectos">
        <h2 className="text-3xl font-medium text-gray-700 mb-4 dark:text-slate-300">
          Proyectos
        </h2>
        <span className="text-l text-gray-500 dark:text-slate-400">
          Realizados
        </span>
        <div className="flex items-center mt-8 flex-col">
          <Proy />
        </div>
      </section>
    );
}

export default Proyectos
