import React from 'react'
import './Skills.css'
import Frontend from './Frontend';
import Backend from './Backend';

const Skills = () => {
  return (
    <section className="text-center py-16" id="skills">
      <h2 className="text-3xl font-medium text-gray-700">Skills</h2>
      <span className="text-l text-gray-600">Tecnologías</span>

      <div className='flex items-center mt-4 flex-col'>
        <Frontend />
        <Backend />
      </div>
    </section>
  );
}

export default Skills
