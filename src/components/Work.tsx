import { useState } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBackIosNew, MdArrowForwardIos, MdArrowOutward } from "react-icons/md";

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      name: "Automed AI",
      category: "AI-Powered Disease Risk Prediction Platform",
      tools: "React • Flask • MongoDB • Scikit-Learn • JWT",
      image: "/images/automed-ai.png",
      link: "https://github.com/aaayu-07/automed-ai",
    },
    {
      name: "StockSense",
      category: "Real-Time Stock Analytics Dashboard",
      tools: "React • FastAPI • Tailwind CSS • Chart.js • JWT",
      image: "/images/stocksense.png",
      link: "https://stock-sense-pearl-xi.vercel.app/",
    },
    {
      name: "Career Connect",
      category: "Full-Stack Job Portal with Role-Based Access",
      tools: "React • Node.js • Express • MongoDB • JWT • Cloudinary",
      image: "/images/career-connect.png",
      link: "https://career-connect-delta.vercel.app/login",
    },
    {
      name: "Blogging Website",
      category: "Dynamic Blogging Platform with CRUD Operations",
      tools: "React • Node.js • Express • MongoDB • JWT",
      image: "/images/blogging-website.png",
      link: "https://ayush-blogging-website.netlify.app/",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };
  
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        
        <div className="work-divider"></div>
        
        <div className="carousel-wrapper">
          
          <div className="carousel-viewport">
            <div 
              className="carousel-track" 
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {projects.map((project, index) => (
                <div className="work-box" key={index}>
                  
                  <div className="work-info">
                    <div className="work-title-wrapper">
                      <h3>0{index + 1}</h3>
                      <div className="work-title-content">
                        <h4 className="work-project-title">
                          <a href={project.link} target="_blank" rel="noreferrer" data-cursor="disable">
                            {project.name} 
                            <span className="project-link-icon"><MdArrowOutward /></span>
                          </a>
                        </h4>
                        <p>{project.category}</p>
                      </div>
                    </div>
                    <div className="work-tools-section">
                      <h4>TOOLS & FEATURES</h4>
                      <p className="work-tools-list">{project.tools}</p>
                    </div>
                  </div>
                  
                  <div className="work-image-container">
                    <WorkImage image={project.image} alt={project.name} />
                  </div>
                  
                </div>
              ))}
            </div>
          </div>
          
          <button className="carousel-btn prev-btn" onClick={handlePrev} data-cursor="disable">
            <MdArrowBackIosNew />
          </button>
          
          <button className="carousel-btn next-btn" onClick={handleNext} data-cursor="disable">
            <MdArrowForwardIos />
          </button>
          
        </div>
        
        <div className="work-divider" style={{ marginTop: "10px", marginBottom: "0" }}></div>
        
        <div className="carousel-dots">
          {projects.map((_, idx) => (
             <div 
               key={idx} 
               className={`carousel-dot ${idx === currentIndex ? "active" : ""}`}
               onClick={() => setCurrentIndex(idx)}
               data-cursor="disable"
             ></div>
          ))}
        </div>
          
      </div>
    </div>
  );
};

export default Work;
