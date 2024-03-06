import React from 'react'
import './Skills.css'
import Frontend from './Frontend';
import Backend from './Backend';

const Skills = () => {
  return (
    <section className="text-center py-16" id="skills">
      <h2 className="text-3xl font-medium text-gray-700 mb-4 dark:text-blue-gray-100">
        Skills
      </h2>
      <span className="text-l text-gray-500 dark:text-blue-gray-300">
        Tecnologías
      </span>

      <div className="sk flex items-center mt-4 flex-col md:flex-row md:justify-center">
        <Frontend />
        <Backend />
      </div>
    </section>
  );
}

export default Skills
