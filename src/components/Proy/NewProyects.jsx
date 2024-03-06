import "./Proy.css";
import { ImHtmlFive } from "react-icons/im";
import { SiSass } from "react-icons/si";
import { ImCss3 } from "react-icons/im";
import { FaBootstrap } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { GrNode } from "react-icons/gr";
import { SiRedux } from "react-icons/si";
import { SiSequelize } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { BsDatabaseFillCheck } from "react-icons/bs";
import Options from "./Options";
import OptionCripto from "./OptionCripto";
import OptionCoca from "./OptionCoca";
import OptionPokemon from "./OptionPokemon";
import OptionCasting from "./OptionCasting";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {EffectCoverflow,Pagination,Navigation} from "swiper/modules";
import './NewProyect.css'

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
        <SwiperSlide>
          {/*casting app*/}
          <div className="cardP mb-6 dark:bg-gray-100">
            <div className="card-imageCasting"></div>
            <p className="card-title font-medium text-gray-700">
              Casting App - Proyecto grupal
            </p>
            {/*<p className="card-body font-normal text-gray-700">
          Conversor de criptomonedas a partir del valor deseado. Opción de
          registro.
        </p>*/}
            <div className="flex justify-evenly items-center m-4 gap-4">
              <div>
                <div className="flex justify-center gap-2 items-center">
                  <FaReact className=" text-2xl text-gray-600" />
                  <SiRedux className=" text-xl text-gray-600" />
                  <ImCss3 className=" text-xl text-gray-600" />
                  <DiJavascript1 className=" text-3xl text-gray-600" />
                  <FaBootstrap className=" text-3xl text-gray-600" />
                </div>
                <div className="flex justify-center gap-3 items-center">
                  <GrNode className=" text-xl text-gray-600" />
                  <SiExpress className=" text-3xl text-gray-600" />
                  <SiSequelize className=" text-xl text-gray-600" />
                  <SiPostgresql className=" text-xl text-gray-600" />
                  <BsDatabaseFillCheck className=" text-xl text-gray-600" />
                </div>
              </div>
              <div>
                <OptionCasting />
              </div>
            </div>
            <p className="footer">
              <span className="by-name">Agosto 2023</span>
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/*pokemon*/}
          <div className="cardP mb-6 dark:bg-gray-100">
            <div className="card-imagePokemon"></div>
            <p className="card-title font-medium text-gray-700">
              SPA Pokemon Api
            </p>
            {/*<p className="card-body font-normal text-gray-700">
          Conversor de criptomonedas a partir del valor deseado. Opción de
          registro.
        </p>*/}
            <div className="flex justify-evenly items-center m-4 gap-4">
              <div>
                <div className="flex justify-center gap-3 items-center">
                  <FaReact className=" text-2xl text-gray-600" />
                  <SiRedux className=" text-xl text-gray-600" />
                  <ImCss3 className=" text-xl text-gray-600" />
                  <DiJavascript1 className=" text-3xl text-gray-600" />
                </div>
                <div className="flex justify-center gap-3 items-center">
                  <GrNode className=" text-xl text-gray-600" />
                  <SiExpress className=" text-3xl text-gray-600" />
                  <SiSequelize className=" text-xl text-gray-600" />
                  <SiPostgresql className=" text-xl text-gray-600" />
                </div>
              </div>
              <div>
                <OptionPokemon />
              </div>
            </div>
            <p className="footer">
              <span className="by-name">Junio 2023</span>
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/*cocacola*/}
          <div className="cardP mb-6 dark:bg-gray-100">
            <div className="card-imageCoca"></div>
            <p className="card-title font-medium text-gray-700">
              Coca-cola Ecommerce
            </p>
            {/*<p className="card-body font-normal text-gray-700">
          Conversor de criptomonedas a partir del valor deseado. Opción de
          registro.
        </p>*/}
            <div className="flex justify-evenly items-center m-4 gap-4">
              <div className="flex justify-center gap-3 items-center">
                <FaReact className=" text-xl text-gray-600" />
                <DiJavascript1 className=" text-3xl text-gray-600" />
                <SiTailwindcss className=" text-xl text-gray-600" />
                <ImCss3 className=" text-xl text-gray-600" />
              </div>
              <div>
                <OptionCoca />
              </div>
            </div>
            <p className="footer">
              <span className="by-name">Enero 2023</span>
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/*fo.cripto*/}
          <div className="cardP  mb-6 dark:bg-gray-100">
            <div className="card-imageCripto"></div>
            <p className="card-title font-medium text-gray-700">Fo - Cripto</p>
            {/*<p className="card-body font-normal text-gray-700">
          Conversor de criptomonedas a partir del valor deseado. Opción de
          registro.
        </p>*/}
            <div className="flex justify-evenly items-center m-4 gap-4">
              <div className="flex justify-center gap-3 items-center">
                <DiJavascript1 className=" text-3xl text-gray-600" />
                <ImHtmlFive className=" text-xl text-gray-600" />
                <ImCss3 className=" text-xl text-gray-600" />
              </div>
              <div>
                <OptionCripto />
              </div>
            </div>
            <p className="footer">
              <span className="by-name">Agosto 2022</span>
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/*fo*/}
          <div className="cardP mb-6 dark:bg-gray-100">
            <div className="card-image"></div>
            <p className="card-title font-medium text-gray-700">
              Fo - Photography
            </p>
            {/*<p className="card-body font-normal text-gray-700">
          Landing de fotografías responsive orientado al arte urbano y
          arquitectónico.
        </p>*/}
            <div className="flex justify-evenly items-center m-4 gap-4">
              <div className="flex justify-center gap-3 items-center">
                <ImHtmlFive className=" text-xl text-gray-600" />
                <SiSass className=" text-xl  text-gray-600" />
                <ImCss3 className=" text-xl text-gray-600" />
                <FaBootstrap className=" text-2xl text-gray-600" />
              </div>
              <div>
                <Options />
              </div>
            </div>
            <p className="footer">
              <span className="by-name">Junio 2022</span>
            </p>
          </div>
        </SwiperSlide>

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
