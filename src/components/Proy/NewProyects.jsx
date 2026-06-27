import "./Proy.css";
import { ImHtmlFive } from "react-icons/im";
import { SiSass, SiTailwindcss, SiExpress, SiRedux, SiSequelize, SiPostgresql, SiReactquery, SiAntdesign } from "react-icons/si";
import { ImCss3 } from "react-icons/im";
import { FaBootstrap, FaReact } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { GrNode } from "react-icons/gr";
import { BsDatabaseFillCheck } from "react-icons/bs";
import { BiLogoTypescript } from "react-icons/bi";
import { VscAzure } from "react-icons/vsc";
import { TbBrandRedux } from "react-icons/tb";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "./NewProyect.css";
import ProjectOption from "./ProjectOption";

const projects = [
  {
    title: "Chatbot Sustentia",
    role: "Desarrollador Frontend SSR",
    imageClass: "card-chatbotSustentia",
    date: "Enero 2026",
    githubUrl: null,
    deployUrl: "https://sustentia.agora2030.org/home/",
    techRows: [
      [
        { type: "text", label: "Next" },
        { type: "icon", Component: SiTailwindcss, className: "text-xl text-gray-600" },
        { type: "icon", Component: BiLogoTypescript, className: "text-3xl text-gray-600" },
      ],
    ],
  },
  {
    title: "Agora Academy",
    role: "Desarrollador Frontend SSR",
    imageClass: "card-academy",
    date: "Enero 2026",
    githubUrl: null,
    deployUrl: "https://agoracademy.org/",
    techRows: [
      [
        { type: "text", label: "Next" },
        { type: "icon", Component: SiTailwindcss, className: "text-xl text-gray-600" },
        { type: "icon", Component: TbBrandRedux, className: "text-2xl text-gray-600" },
        { type: "icon", Component: BiLogoTypescript, className: "text-3xl text-gray-600" },
      ],
    ],
  },
  {
    title: "Colmena",
    role: "Desarrollador Frontend SSR",
    imageClass: "card-colmena",
    date: "Diciembre 2025",
    githubUrl: null,
    deployUrl: "https://colmena.agora2030.org/",
    techRows: [
      [
        { type: "icon", Component: FaReact, className: "text-2xl text-gray-600" },
        { type: "icon", Component: SiTailwindcss, className: "text-xl text-gray-600" },
        { type: "icon", Component: TbBrandRedux, className: "text-2xl text-gray-600" },
        { type: "icon", Component: BiLogoTypescript, className: "text-3xl text-gray-600" },
      ],
      [
        { type: "icon", Component: SiReactquery, className: "text-2xl text-gray-600" },
        { type: "icon", Component: SiAntdesign, className: "text-xl text-gray-600" },
      ],
    ],
  },
  {
    title: "Tienda - Huerta del tomate",
    role: "Colaboración",
    imageClass: "card-huerta",
    date: "Abril 2024",
    githubUrl: "https://github.com/tamaraantonella/hdt-front",
    deployUrl: "https://huertadeltomate.vercel.app/",
    techRows: [
      [
        { type: "icon", Component: FaReact, className: "text-2xl text-gray-600" },
        { type: "icon", Component: SiTailwindcss, className: "text-xl text-gray-600" },
        { type: "icon", Component: ImCss3, className: "text-xl text-gray-600" },
        { type: "icon", Component: BiLogoTypescript, className: "text-3xl text-gray-600" },
      ],
    ],
  },
  {
    title: "Linux sample Portfolio",
    role: null,
    imageClass: "card-samplePortfolio",
    date: "Marzo 2024",
    githubUrl: "https://github.com/jesusre890/samplePortfolio",
    deployUrl: "https://ezequiel-fortuna.vercel.app/",
    techRows: [
      [
        { type: "icon", Component: FaReact, className: "text-2xl text-gray-600" },
        { type: "icon", Component: SiTailwindcss, className: "text-xl text-gray-600" },
        { type: "icon", Component: ImCss3, className: "text-xl text-gray-600" },
        { type: "icon", Component: BiLogoTypescript, className: "text-3xl text-gray-600" },
      ],
    ],
  },
  {
    title: "Awaq ONG - Pasantía",
    role: null,
    imageClass: "card-imageAwaq",
    date: "Febrero 2024",
    githubUrl: null,
    deployUrl: "https://www.somosawaq.org/",
    techRows: [
      [
        { type: "icon", Component: FaReact, className: "text-2xl text-gray-600" },
        { type: "icon", Component: SiTailwindcss, className: "text-xl text-gray-600" },
        { type: "icon", Component: ImCss3, className: "text-xl text-gray-600" },
        { type: "icon", Component: BiLogoTypescript, className: "text-3xl text-gray-600" },
      ],
      [
        { type: "icon", Component: GrNode, className: "text-xl text-gray-600" },
        { type: "icon", Component: SiExpress, className: "text-3xl text-gray-600" },
        { type: "icon", Component: VscAzure, className: "text-xl text-gray-600" },
        { type: "icon", Component: BsDatabaseFillCheck, className: "text-xl text-gray-600" },
      ],
    ],
  },
  {
    title: "Casting App - Proyecto grupal",
    role: null,
    imageClass: "card-imageCasting",
    date: "Agosto 2023",
    githubUrl: "https://github.com/Equipo-PF-10/Casting-app",
    deployUrl: "https://deploy-sprint-2-frontend.onrender.com/",
    techRows: [
      [
        { type: "icon", Component: FaReact, className: "text-2xl text-gray-600" },
        { type: "icon", Component: SiRedux, className: "text-xl text-gray-600" },
        { type: "icon", Component: ImCss3, className: "text-xl text-gray-600" },
        { type: "icon", Component: DiJavascript1, className: "text-3xl text-gray-600" },
        { type: "icon", Component: FaBootstrap, className: "text-3xl text-gray-600" },
      ],
      [
        { type: "icon", Component: GrNode, className: "text-xl text-gray-600" },
        { type: "icon", Component: SiExpress, className: "text-3xl text-gray-600" },
        { type: "icon", Component: SiSequelize, className: "text-xl text-gray-600" },
        { type: "icon", Component: SiPostgresql, className: "text-xl text-gray-600" },
        { type: "icon", Component: BsDatabaseFillCheck, className: "text-xl text-gray-600" },
      ],
    ],
  },
  {
    title: "SPA Pokemon Api",
    role: null,
    imageClass: "card-imagePokemon",
    date: "Junio 2023",
    githubUrl: "https://github.com/jesusre890/pi-pokemon",
    deployUrl: null,
    techRows: [
      [
        { type: "icon", Component: FaReact, className: "text-2xl text-gray-600" },
        { type: "icon", Component: SiRedux, className: "text-xl text-gray-600" },
        { type: "icon", Component: ImCss3, className: "text-xl text-gray-600" },
        { type: "icon", Component: DiJavascript1, className: "text-3xl text-gray-600" },
      ],
      [
        { type: "icon", Component: GrNode, className: "text-xl text-gray-600" },
        { type: "icon", Component: SiExpress, className: "text-3xl text-gray-600" },
        { type: "icon", Component: SiSequelize, className: "text-xl text-gray-600" },
        { type: "icon", Component: SiPostgresql, className: "text-xl text-gray-600" },
      ],
    ],
  },
  {
    title: "Coca-cola Ecommerce",
    role: null,
    imageClass: "card-imageCoca",
    date: "Enero 2023",
    githubUrl: "https://github.com/jesusre890/coca-cola-react",
    deployUrl: null,
    techRows: [
      [
        { type: "icon", Component: FaReact, className: "text-xl text-gray-600" },
        { type: "icon", Component: DiJavascript1, className: "text-3xl text-gray-600" },
        { type: "icon", Component: SiTailwindcss, className: "text-xl text-gray-600" },
        { type: "icon", Component: ImCss3, className: "text-xl text-gray-600" },
      ],
    ],
  },
  {
    title: "Fo - Cripto",
    role: null,
    imageClass: "card-imageCripto",
    date: "Agosto 2022",
    githubUrl: "https://github.com/jesusre890/fo.cripto",
    deployUrl: "https://jesusre890.github.io/fo.cripto/",
    techRows: [
      [
        { type: "icon", Component: DiJavascript1, className: "text-3xl text-gray-600" },
        { type: "icon", Component: ImHtmlFive, className: "text-xl text-gray-600" },
        { type: "icon", Component: ImCss3, className: "text-xl text-gray-600" },
      ],
    ],
  },
  {
    title: "Fo - Photography",
    role: null,
    imageClass: "card-image",
    date: "Junio 2022",
    githubUrl: "https://github.com/jesusre890/Fo",
    deployUrl: "https://jesusre890.github.io/Fo/index.html",
    techRows: [
      [
        { type: "icon", Component: ImHtmlFive, className: "text-xl text-gray-600" },
        { type: "icon", Component: SiSass, className: "text-xl text-gray-600" },
        { type: "icon", Component: ImCss3, className: "text-xl text-gray-600" },
        { type: "icon", Component: FaBootstrap, className: "text-2xl text-gray-600" },
      ],
    ],
  },
];

const NewProyects = () => {
  return (
    <div className="container8 w-96 lg:w-5/6 md:w-5/6">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        {projects.map((project, i) => (
          <SwiperSlide key={i}>
            <div className="cardP mb-6 dark:bg-gray-100">
              <div className={`card-img-base ${project.imageClass}`}></div>
              <p className="card-title font-medium text-gray-700 mt-1">{project.title}</p>
              {project.role && (
                <p className="card-title font-light text-gray-700 text-base my-0">
                  {project.role}
                </p>
              )}
              <div className="flex justify-evenly items-center m-4 gap-4">
                <div className="flex flex-col gap-1">
                  {project.techRows.map((row, ri) => (
                    <div key={ri} className="flex justify-center gap-2 items-center">
                      {row.map((tech, ti) =>
                        tech.type === "text" ? (
                          <span key={ti}>{tech.label}</span>
                        ) : (
                          <tech.Component key={ti} className={tech.className} />
                        )
                      )}
                    </div>
                  ))}
                </div>
                <div>
                  <ProjectOption githubUrl={project.githubUrl} deployUrl={project.deployUrl} />
                </div>
              </div>
              <p className="footer">
                <span className="by-name">{project.date}</span>
              </p>
            </div>
          </SwiperSlide>
        ))}

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
};

export default NewProyects;
