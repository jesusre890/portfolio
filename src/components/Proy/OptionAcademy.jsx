import "./Options.css";
import { BsWindowFullscreen } from "react-icons/bs";

const OptionAcademy = () => {
  return (
    <>
      <div className="radio-inputs">
        <label>
          <input
            checked=""
            className="radio-input"
            type="radio"
            name="engine"
          />
          <a href="https://agoracademy.org/" target="_blank" rel="noreferrer">
            <span className="radio-tile">
              <span className="radio-icon2">
                <BsWindowFullscreen />
              </span>
              <span className="radio-label">Deploy</span>
            </span>
          </a>
        </label>
      </div>
    </>
  );
};

export default OptionAcademy;