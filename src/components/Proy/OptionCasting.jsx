import React from 'react'
import "./Options.css";
import { AiFillGithub } from "react-icons/ai";
import { BsWindowFullscreen } from "react-icons/bs";

const OptionCasting = () => {
  return (
    <>
      <div className="radio-inputs">
        <label>
          <input className="radio-input" type="radio" name="engine" />
          <a href="https://github.com/Equipo-PF-10/Casting-app" target="_blank">
            <span className="radio-tile">
              <span className="radio-icon">
                <AiFillGithub />
              </span>
              <span className="radio-label">Github</span>
            </span>
          </a>
        </label>
        <label>
          <input checked="" class="radio-input" type="radio" name="engine" />
          <a
            href="https://deploy-sprint-2-frontend.onrender.com/"
            target="_blank"
          >
            <span class="radio-tile">
              <span class="radio-icon2">
                <BsWindowFullscreen />
              </span>
              <span class="radio-label">Deploy</span>
            </span>
          </a>
        </label>
      </div>
    </>
  );
}

export default OptionCasting
