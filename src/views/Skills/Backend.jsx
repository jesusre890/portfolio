import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import "./Skills.css";

const skillColumns = [
  ["Node Js", "PostgreSQL", "Sequelize"],
  ["Express", "Docker", "MongoDB"],
];

const Backend = () => {
  return (
    <div className="cont m-3 p-6 bg-white dark:bg-gray-200">
      <h3 className="font-medium text-gray-700 text-lg">Backend + Base de datos</h3>
      <div className="skills_gral flex justify-evenly m-3 p-3 gap-10">
        {skillColumns.map((column, ci) => (
          <div key={ci} className="skills_group">
            {column.map((skill, si) => (
              <div
                key={si}
                className={`skills_data flex ${si < column.length - 1 ? "mb-3" : ""}`}
              >
                <AiFillCheckCircle className="mt-1 mr-2" aria-hidden="true" />
                <h3 className="font-medium text-gray-700">{skill}</h3>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Backend;
