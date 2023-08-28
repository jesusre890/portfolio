import React from "react";
import {AiFillCheckCircle} from "react-icons/ai";
import './Skills.css'

const Frontend = () => {
  return (
    <div className="cont m-3 p-6 bg-white dark:bg-gray-200">
      <h3 className="font-medium text-gray-700 text-lg">Frontend developer</h3>

      <div className="skills_gral flex justify-evenly m-3 p-3 gap-10">
        <div className="skills_group">
          <div className="skills_data flex mb-3">
            <AiFillCheckCircle className="mt-1  mr-2" />
            <div>
              <h3 className="font-medium text-gray-700">React</h3>
              <span className="flex flex-row items-center gap-2 text-gray-500 font-small text-xs">
                
              </span>
            </div>
          </div>

          <div className="skills_data flex  mb-3">
            <AiFillCheckCircle className="mt-1  mr-2" />
            <div>
              <h3 className="font-medium text-gray-700">TypeScript</h3>
              <span className="flex flex-row items-center gap-2 text-gray-500 font-small text-xs">
                
              </span>
            </div>
          </div>

          <div className="skills_data flex">
            <AiFillCheckCircle className="mt-1 mr-2" />
            <div>
              <h3 className="font-medium text-gray-700">JavaScript</h3>
              <span className="flex flex-row items-center gap-2 text-gray-500 font-small text-xs">
                
              </span>
            </div>
          </div>
        </div>

        <div className="skills_group">
          <div className="skills_data flex mb-3">
            <AiFillCheckCircle className="mt-1 mr-2" />
            <div>
              <h3 className="font-medium text-gray-700">Bootstrap</h3>
              <span className="flex flex-row items-center gap-2 text-gray-500 font-small text-xs">
                
              </span>
            </div>
          </div>

          <div className="skills_data flex mb-3">
            <AiFillCheckCircle className="mt-1 mr-2" />
            <div>
              <h3 className="font-medium text-gray-700">Tailwind</h3>
              <span className="flex flex-row items-center gap-2 text-gray-500 font-small text-xs">
                
              </span>
            </div>
          </div>

          <div className="skills_data flex">
            <AiFillCheckCircle className="mt-1 mr-2" />
            <div>
              <h3 className="font-medium text-gray-700">CSS</h3>
              <span className="flex flex-row items-center gap-2 text-gray-500 font-small text-xs">
                
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
