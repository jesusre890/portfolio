import React, {useEffect, useRef} from "react";
import "./Navidad.css";

const Navidad=() => {
  const mainContainerRef = useRef(null);

  useEffect(() => {
    const mainContainer = mainContainerRef.current;

    if (!mainContainer) {
      console.error("No se encontró el contenedor principal.");
      return;
    }

    const getRandomValue = (max, min = 1) => {
      return Math.floor(Math.random() * max) + min;
    };

    const createSnow = (density) => {
      for (let i = 0; i < density; i++) {
        const snowFlake = document.createElement("span");
        const horizontalPosition = `${getRandomValue(100)}%`;
        const fallDelay = `${getRandomValue(100)}s`;
        const fallDuration = `${getRandomValue(20, 5)}s`;
        const flakeSize = `${getRandomValue(7, 1)}px`;
        const flakeOpacity = Math.random().toFixed(2);

        snowFlake.classList.add("snow");
        snowFlake.style.opacity = flakeOpacity;
        snowFlake.style.width = flakeSize;
        snowFlake.style.height = flakeSize;
        snowFlake.style.animation = `fall ${fallDuration} ${fallDelay} linear infinite`;
        snowFlake.style.right = horizontalPosition;

        mainContainer.appendChild(snowFlake);
      }
    };

    createSnow(300);

    // Limpia la nieve al desmontar el componente
    return () => {
      mainContainer.innerHTML = "";
    };
  }, []);
  return (
    <>
      <div className="main-container" ref={mainContainerRef}>
        <span className="snow"></span>
      </div>
    </>
  );
};

export default Navidad;
