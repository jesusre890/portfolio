import "./Options.css";
import { AiFillGithub } from "react-icons/ai";
import { BsWindowFullscreen } from "react-icons/bs";

const ProjectOption = ({ githubUrl, deployUrl }) => (
  <div className="radio-inputs">
    {githubUrl && (
      <label>
        <input className="radio-input" type="radio" name="engine" />
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          <span className="radio-tile">
            <span className="radio-icon">
              <AiFillGithub />
            </span>
            <span className="radio-label">Github</span>
          </span>
        </a>
      </label>
    )}
    {deployUrl && (
      <label>
        <input className="radio-input" type="radio" name="engine" />
        <a href={deployUrl} target="_blank" rel="noopener noreferrer">
          <span className="radio-tile">
            <span className="radio-icon2">
              <BsWindowFullscreen />
            </span>
            <span className="radio-label">Deploy</span>
          </span>
        </a>
      </label>
    )}
  </div>
);

export default ProjectOption;
