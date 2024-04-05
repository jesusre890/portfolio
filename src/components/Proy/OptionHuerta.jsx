import "./Options.css";
import { AiFillGithub } from "react-icons/ai";
import { BsWindowFullscreen } from "react-icons/bs";

const OptionLinux = () => {
  return (
    <>
      <div className="radio-inputs">
        <label>
          <input className="radio-input" type="radio" name="engine" />
          <a
            href="https://github.com/tamaraantonella/hdt-front"
            target="_blank"
            rel="noreferrer"
          >
            <span className="radio-tile">
              <span className="radio-icon">
                <AiFillGithub />
              </span>
              <span className="radio-label">Github</span>
            </span>
          </a>
        </label>
        <label>
          <input
            checked=""
            className="radio-input"
            type="radio"
            name="engine"
          />
          <a
            href="https://huertadeltomate.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
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

export default OptionLinux;
