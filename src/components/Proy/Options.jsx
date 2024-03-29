import "./Options.css";
import { AiFillGithub } from "react-icons/ai";
import { BsWindowFullscreen } from "react-icons/bs";

const Options = () => {
  return (
    <>
      <div className="radio-inputs">
        <label>
          <input className="radio-input" type="radio" name="engine" />
          <a href="https://github.com/jesusre890/Fo" target="_blank">
            <span className="radio-tile">
              <span className="radio-icon">
                <AiFillGithub />
              </span>
              <span className="radio-label">Github</span>
            </span>
          </a>
        </label>
        <label>
          <input checked="" className="radio-input" type="radio" name="engine" />
          <a href="https://jesusre890.github.io/Fo/index.html" target="_blank">
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

export default Options;
