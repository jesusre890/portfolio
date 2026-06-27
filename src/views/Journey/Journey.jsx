import React, { useState } from "react";
import classNames from "classnames";
import "./Journey.css";
import { MdWorkOutline, MdCalendarMonth } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import { CiMapPin } from "react-icons/ci";

const estudiosData = [
  { title: "Cloud Computing (AWS)", institute: "Coderhouse", date: "2024" },
  { title: "Desarrollador FullStack", institute: "Henry Bootcamp", date: "3/2023 - 8/2023" },
  { title: "Desarrollador Frontend React", institute: "Coderhouse", date: "2022 - 2023" },
  { title: "Desarrollador Web Frontend", institute: "Crehana", date: "2022" },
  { title: "Arquitecto", institute: "Universidad Nacional de Rosario", date: "2009 - 2018" },
];

const experienciaData = [
  { title: "Desarrollador Frontend SSR", institute: "deRentas - Remoto", date: "6/2026 - Actualidad", location: "Buenos Aires, Argentina" },
  { title: "Desarrollador Frontend React SSR", institute: "Agora Partnerships - Remoto", date: "4/2024 - 6/2026", location: "Buenos Aires, Argentina" },
  { title: "Desarrollador Frontend React SSR", institute: "Pelícano lab - Remoto", date: "6/2024 - 8/2025", location: "Buenos Aires, Argentina" },
  { title: "Desarrollador Frontend", institute: "Hilda - Remoto", date: "2/2024 - 5/2024", location: "Buenos Aires, Argentina" },
  { title: "Desarrollador FullStack", institute: "Trayector - Remoto", date: "1/2024 - 3/2024", location: "Buenos Aires, Argentina" },
  { title: "Desarrollador Frontend React", institute: "Awaq ONG - Remoto", date: "11/2023 - 2/2024", location: "Buenos Aires, Argentina" },
  { title: "Desarrollador FullStack", institute: "Andromeda - Remoto", date: "10/2023 - 11/2023", location: "Buenos Aires, Argentina" },
  { title: "Arquitecto", institute: "Rinaldi Construcciones", date: "2021 - 2023", location: "Rosario, Argentina" },
  { title: "Arquitecto", institute: "On Construcciones", date: "2016 - 2021", location: "Rosario, Argentina" },
];

const TimelineItem = ({ item, side, isLast }) => {
  const content = (
    <div className="flex flex-col items-center">
      <h3 className="titulo font-medium dark:text-blue-gray-100">{item.title}</h3>
      <span className="instituto">{item.institute}</span>
      <div className={classNames("calendario flex items-center", { "flex-col": item.location })}>
        <div className="flex items-center gap-3">
          <MdCalendarMonth className="text-xl" aria-hidden="true" />
          {item.date}
        </div>
        {item.location && (
          <div className="flex items-center gap-3">
            <CiMapPin className="text-xl" aria-hidden="true" />
            {item.location}
          </div>
        )}
      </div>
    </div>
  );

  const timeline = (
    <div>
      <span className="circulo"></span>
      <span className="linea"></span>
    </div>
  );

  return (
    <div className={classNames("data", { "mb-36 md:mb-0": !isLast })}>
      {side === "left" ? (
        <>
          {content}
          {timeline}
        </>
      ) : (
        <>
          <div></div>
          {timeline}
          {content}
        </>
      )}
    </div>
  );
};

const Journey = () => {
  const [active, setActive] = useState("experiencia");

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
          <button
            type="button"
            className={`viaje__botones ${active === "estudios" ? "viaje__active" : ""} gap-2 flex items-center font-medium dark:text-blue-gray-100`}
            onClick={() => setActive("estudios")}
            aria-pressed={active === "estudios"}
          >
            <GiGraduateCap className="bg-slate-50 dark:bg-slate-950" aria-hidden="true" />
            <span className="spanB bg-slate-50 dark:bg-slate-950">Estudios</span>
          </button>
          <button
            type="button"
            className={`viaje__botones ${active === "experiencia" ? "viaje__active" : ""} gap-2 flex items-center font-medium dark:text-blue-gray-100`}
            onClick={() => setActive("experiencia")}
            aria-pressed={active === "experiencia"}
          >
            <MdWorkOutline className="bg-slate-50 dark:bg-slate-950" aria-hidden="true" />
            <span className="spanB bg-slate-50 dark:bg-slate-950">Experiencia</span>
          </button>
        </div>

        <div className="secciones">
          <div
            className={classNames("viaje__contenido", "estudios", {
              "viaje__contenido-active": active === "estudios",
            })}
          >
            {estudiosData.map((item, i) => (
              <TimelineItem
                key={i}
                item={item}
                side={i % 2 === 0 ? "right" : "left"}
                isLast={i === estudiosData.length - 1}
              />
            ))}
          </div>

          <div
            className={classNames("viaje__contenido", "experiencia", {
              "viaje__contenido-active": active === "experiencia",
            })}
          >
            {experienciaData.map((item, i) => (
              <TimelineItem
                key={i}
                item={item}
                side={i % 2 === 0 ? "left" : "right"}
                isLast={i === experienciaData.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
