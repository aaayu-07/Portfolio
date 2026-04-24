import "./styles/TechStack.css";
import { 
  SiReact, SiTailwindcss, SiTypescript, SiJavascript, SiHtml5, SiCss,
  SiNodedotjs, SiExpress, SiPython, SiOpenjdk, SiMongodb, SiMysql, 
  SiPostgresql, SiGit, SiGithub, SiPostman, SiDocker, SiVscodium
} from "react-icons/si";
import { FaServer } from "react-icons/fa";

const skills = {
  Frontend: [
    { name: "React.js", icon: <SiReact color="#61DAFB" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss color="#38B2AC" /> },
    { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
    { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
    { name: "HTML5/CSS3", icon: <div style={{ display: "flex", gap: "5px" }}><SiHtml5 color="#E34F26" /><SiCss color="#1572B6" /></div> }
  ],
  Backend: [
    { name: "Node.js", icon: <SiNodedotjs color="#339933" /> },
    { name: "Express.js", icon: <SiExpress color="#fff" /> },
    { name: "Python", icon: <SiPython color="#3776AB" /> },
    { name: "Java", icon: <SiOpenjdk color="#5382A1" /> },
    { name: "REST APIs", icon: <FaServer color="#A0A0A0" /> }
  ],
  Database: [
    { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
    { name: "MySQL", icon: <SiMysql color="#4479A1" /> },
    { name: "PostgreSQL", icon: <SiPostgresql color="#336791" /> }
  ],
  Tools: [
    { name: "Git", icon: <SiGit color="#F05032" /> },
    { name: "GitHub", icon: <SiGithub color="#fff" /> },
    { name: "Postman", icon: <SiPostman color="#FF6C37" /> },
    { name: "Docker", icon: <SiDocker color="#2496ED" /> },
    { name: "VS Code", icon: <SiVscodium color="#007ACC" /> }
  ]
};

const TechStack = () => {
  return (
    <div className="techstack-section section-container" id="techstack">
      <div className="techstack-container">
        <h2>
          My <span>Tech Stack</span>
        </h2>
        <div className="techstack-grid">
          {Object.entries(skills).map(([category, items]) => (
            <div className="techstack-category" key={category}>
              <h3>{category}</h3>
              <ul className="techstack-list">
                {items.map((skill) => (
                  <li key={skill.name} className="techstack-chip">
                    <span className="chip-icon">{skill.icon}</span>
                    <span className="chip-name">{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
