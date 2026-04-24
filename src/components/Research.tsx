import "./styles/Research.css";
import { MdArrowOutward } from "react-icons/md";
import { FaBookOpen } from "react-icons/fa";

const Research = () => {
  return (
    <div className="research-section section-container" id="research">
      <div className="research-container">
        <h2>
          Featured <span>Research</span>
        </h2>
        
        <div className="research-card">
          <div className="research-badge-row">
            <div className="research-badge">
              <FaBookOpen />
              Published in IEEE
            </div>
            <div className="research-timeline">2025</div>
          </div>
          
          <h3>A Systematic Review of AI and Machine Learning in Lifestyle Disease Risk Stratification</h3>
          
          <p>
            This research explores how Artificial Intelligence and Machine Learning models are leveraged 
            to predict and stratify the risk of lifestyle-induced diseases. It highlights the transition 
            from traditional healthcare strategies into modern predictive analytics for better clinical outcomes.
          </p>

          <div className="research-tech">
            <span className="research-tech-badge">Artificial Intelligence</span>
            <span className="research-tech-badge">Machine Learning</span>
            <span className="research-tech-badge">Healthcare Analytics</span>
          </div>

          <a 
            href="https://ieeexplore.ieee.org/document/11380605" 
            target="_blank" 
            rel="noreferrer" 
            className="research-btn"
            data-cursor="disable"
          >
            View Paper <MdArrowOutward />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Research;
