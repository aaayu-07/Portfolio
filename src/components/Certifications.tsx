import "./styles/Certifications.css";
import { MdArrowOutward } from "react-icons/md";
import { FaLinkedin, FaUniversity, FaLaptopCode } from "react-icons/fa";
import { SiCoursera, SiUdemy } from "react-icons/si";

const certifications = [
  {
    title: "Modern DevOps: Foundation to Observability",
    issuer: "Coursera",
    date: "December 2025",
    credentialId: null,
    url: "https://drive.google.com/file/d/1q96Si57sos3ratpLCqUnIbPT1ABF4IIx/view?usp=sharing",
    icon: <SiCoursera />
  },
  {
    title: "Human Computer Interaction",
    issuer: "NPTEL",
    date: "Apr 2025",
    credentialId: "NPTEL25CS38S547500474",
    url: "https://archive.nptel.ac.in/content/noc/NOC25/SEM1/Ecertificates/106/noc25-cs38/Course/NPTEL25CS38S54750047404315205.pdf",
    icon: <FaUniversity />
  },
  {
    title: "Building Web Applications in PHP",
    issuer: "Coursera",
    date: "Jan 2025",
    credentialId: "1AGKREAYJO0A",
    url: "https://www.coursera.org/account/accomplishments/verify/1AGKREAYJO0A",
    icon: <SiCoursera />
  },
  {
    title: "Cyber Security and Privacy",
    issuer: "NPTEL",
    date: "Nov 2024",
    credentialId: "NPTEL24CS121S1056900803",
    url: "https://archive.nptel.ac.in/content/noc/NOC24/SEM2/Ecertificates/106/noc24-cs121/Course/NPTEL24CS121S105690080303951146.pdf",
    icon: <FaUniversity />
  },
  {
    title: "Full Stack Web Development Using MERN",
    issuer: "CipherSchools",
    date: "Jul 2024",
    credentialId: "CSW2024-11854",
    url: "https://www.cipherschools.com/certificate/preview?id=66a76d5ed15c5abc1ea65da2",
    icon: <FaLaptopCode />
  },
  {
    title: "Design and Analysis of Algorithms Specialization",
    issuer: "Coursera",
    date: "May 2024",
    credentialId: null,
    url: "https://drive.google.com/file/d/1kmbq1hlYTfoG26NLG4eI-sEPOErvNDyt/view?usp=sharing",
    icon: <SiCoursera />
  },
  {
    title: "Generative AI & Large Language Models (LLMs)",
    issuer: "Coursera",
    date: "April 2024",
    credentialId: null,
    url: "https://drive.google.com/file/d/1fCSxo9uvzzQ_BBgu9Weq0-9xSZaH33l6/view?usp=sharing",
    icon: <SiCoursera />
  },
  {
    title: "Mastering Data Structures & Algorithms using C and C++",
    issuer: "Udemy",
    date: "Feb 2024",
    credentialId: null,
    url: "https://www.udemy.com/certificate/UC-f746c7a0-edd4-46e4-aed5-8722f052223d/",
    icon: <SiUdemy />
  },
  {
    title: "Programming in C++: A Hands-on Introduction",
    issuer: "Coursera",
    date: "Nov 2023",
    credentialId: "5DBLZ9VG9L5E",
    url: "https://www.coursera.org/account/accomplishments/specialization/5DBLZ9VG9L5E",
    icon: <SiCoursera />
  },
  {
    title: "Artificial Intelligence Foundations: Thinking Machines",
    issuer: "LinkedIn Learning",
    date: "Feb 2023",
    credentialId: null,
    url: "https://www.linkedin.com/learning/certificates/40016c9c5eaa108ae9f6d144a3daa2e72376e0d9c4fc1278ba3a351fd26afef1",
    icon: <FaLinkedin />
  },
  {
    title: "Getting Started with AI and Machine Learning",
    issuer: "LinkedIn Learning",
    date: "Feb 2023",
    credentialId: null,
    url: "https://www.linkedin.com/learning/certificates/fb6f1d1f805370396e38d9662678ff33f85d6d6c587483a7231be9b6338e5211",
    icon: <FaLinkedin />
  },
  {
    title: "NLP with Python for Machine Learning Essential Training",
    issuer: "LinkedIn Learning",
    date: "Feb 2023",
    credentialId: null,
    url: "https://www.linkedin.com/learning/certificates/52b8031f092db68494949e2b998f54604d23da6914d9d1398f2494d2e47baa76",
    icon: <FaLinkedin />
  }
];

const Certifications = () => {
  return (
    <div className="cert-section section-container" id="certifications">
      <div className="cert-container">
        <h2>
          Licenses & <span>Certifications</span>
        </h2>
        
        <div className="cert-grid">
          {certifications.map((cert, index) => (
            <div className="cert-card" key={index}>
              <div className="cert-header">
                <div className="cert-org-icon">{cert.icon}</div>
                <div className="cert-date">{cert.date}</div>
              </div>
              <h3>{cert.title}</h3>
              
              <div className="cert-issuer" style={{ marginBottom: cert.credentialId ? "0.2rem" : "1.5rem" }}>
                {cert.issuer}
              </div>
              
              {cert.credentialId && (
                <div className="cert-credential" style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.4)", marginBottom: "1.5rem" }}>
                  ID: {cert.credentialId}
                </div>
              )}
              
              {cert.url && cert.url !== "#" ? (
                <a href={cert.url} target="_blank" rel="noreferrer" className="cert-btn" data-cursor="disable">
                  View Credential <MdArrowOutward />
                </a>
              ) : (
                <span className="cert-btn" style={{opacity: 0.3, cursor: 'default'}}>Credential Validated</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
