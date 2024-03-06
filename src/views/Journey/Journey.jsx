import React,{useState} from "react";
import classNames from "classnames";
import "./Journey.css";
import { MdWorkOutline } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import { MdCalendarMonth } from "react-icons/md";

const Journey = () => {
  const [active, setActive] = useState("estudios");

  return (
    <section
      className="text-center py-16 flex flex-col items-center"
      id="journey"
    >
      <h2 className="text-3xl font-medium text-gray-700 mb-4 dark:text-blue-gray-100">
        Viaje Personal
      </h2>

      <div className="container">
        <div className="tabs flex gap-8 h-20 mb-5">
          <div
            className={`viaje__botones ${
              active === "estudios" ? "viaje__active" : ""
            } gap-2 flex items-center font-medium dark:text-blue-gray-100`}
            onClick={() => setActive("estudios")}
          >
            <GiGraduateCap className="bg-slate-50 dark:bg-slate-950" />
            <span className="spanB bg-slate-50 dark:bg-slate-950">
              Estudios
            </span>
          </div>
          <div
            className={`viaje__botones ${
              active === "experiencia" ? "viaje__active" : ""
            } gap-2 flex items-center font-medium dark:text-blue-gray-100`}
            onClick={() => setActive("experiencia")}
          >
            <MdWorkOutline className="bg-slate-50 dark:bg-slate-950" />
            <span className="spanB bg-slate-50 dark:bg-slate-950">
              Experiencia
            </span>
          </div>
        </div>

        <div className="secciones">
          <div
            className={classNames("viaje__contenido", "estudios", {
              "viaje__contenido-active": active === "estudios",
            })}
          >
            <div className="data mb-8 md:mb-0">
              <div className="contenidoData flex flex-col items-center">
                <h3 className="titulo font-medium dark:text-blue-gray-100">
                  Desarrollador FullStack
                </h3>
                <span className="instituto">Henry Bootcamp</span>
                <div className="calendario flex items-center">
                  <MdCalendarMonth /> 3/2023 - 8/2023
                </div>
              </div>
              <div>
                <span className="circulo"></span>
                <span className="linea"></span>
              </div>
            </div>

            <div className="data mb-12 md:mb-0">
              <div></div>

              <div>
                <span className="circulo"></span>
                <span className="linea"></span>
              </div>

              <div className="flex flex-col items-center">
                <h3 className="titulo font-medium dark:text-blue-gray-100">
                  Desarrollador Frontend React
                </h3>
                <span className="instituto">Coderhouse</span>
                <div className="calendario  flex items-center">
                  <MdCalendarMonth /> 2022 - 2023
                </div>
              </div>
            </div>

            <div className="data mb-8 md:mb-0">
              <div className="flex flex-col items-center">
                <h3 className="titulo font-medium dark:text-blue-gray-100">
                  Desarrollador Web Frontend
                </h3>
                <span className="instituto">Crehana</span>
                <div className="calendario flex items-center">
                  <MdCalendarMonth /> 2022
                </div>
              </div>
              <div>
                <span className="circulo"></span>
                <span className="linea"></span>
              </div>
            </div>

            <div className="data">
              <div></div>

              <div>
                <span className="circulo"></span>
                <span className="linea"></span>
              </div>
              <div className="flex flex-col items-center">
                <h3 className="titulo font-medium dark:text-blue-gray-100">
                  Arquitecto
                </h3>
                <span className="instituto">
                  Universidad Nacional de Rosario
                </span>
                <div className="calendario flex items-center">
                  <MdCalendarMonth /> 2009 - 2018
                </div>
              </div>
            </div>
          </div>

          <div
            className={classNames("viaje__contenido", "experiencia", {
              "viaje__contenido-active": active === "experiencia",
            })}
          >
            <div className="data mb-12 md:mb-0">
              <div></div>

              <div>
                <span className="circulo"></span>
                <span className="linea"></span>
              </div>

              <div className="flex flex-col items-center">
                <h3 className="titulo font-medium dark:text-blue-gray-100">
                  Desarrollador FullStack
                </h3>
                <span className="instituto">Trayector - Remoto</span>
                <div className="calendario  flex items-center">
                  <MdCalendarMonth /> 1/2024 - Presente
                </div>
              </div>
            </div>

            <div className="data mb-12 md:mb-0">
              <div className="flex flex-col items-center">
                <h3 className="titulo font-medium dark:text-blue-gray-100">
                  Desarrollador Frontend
                </h3>
                <span className="instituto">Awaq ONG - Remoto</span>
                <div className="calendario flex items-center">
                  <MdCalendarMonth /> 11/2023 - Presente
                </div>
              </div>
              <div>
                <span className="circulo"></span>
                <span className="linea"></span>
              </div>
            </div>

            <div className="data mb-12 md:mb-0">
              <div></div>

              <div>
                <span className="circulo"></span>
                <span className="linea"></span>
              </div>

              <div className="flex flex-col items-center">
                <h3 className="titulo font-medium dark:text-blue-gray-100">
                  Desarrollador FullStack
                </h3>
                <span className="instituto">Andromeda - Pasantía</span>
                <div className="calendario  flex items-center">
                  <MdCalendarMonth /> 10/2023 - 11/2023
                </div>
              </div>
            </div>

            <div className="data mb-8 md:mb-0">
              <div className="flex flex-col items-center">
                <h3 className="titulo font-medium dark:text-blue-gray-100">
                  Arquitecto
                </h3>
                <span className="instituto">Rinaldi Construcciones</span>
                <div className="calendario flex items-center">
                  <MdCalendarMonth /> 2021 -2023
                </div>
              </div>
              <div>
                <span className="circulo"></span>
                <span className="linea"></span>
              </div>
            </div>

            <div className="data">
              <div></div>

              <div>
                <span className="circulo"></span>
                <span className="linea"></span>
              </div>
              <div className="flex flex-col items-center">
                <h3 className="titulo font-medium dark:text-blue-gray-100">
                  Arquitecto
                </h3>
                <span className="instituto">On Construcciones</span>
                <div className="calendario flex items-center">
                  <MdCalendarMonth /> 2016 - 2021
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
