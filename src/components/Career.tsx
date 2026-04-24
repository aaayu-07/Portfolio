import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Education <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          
          <div className="career-info-box" style={{ alignItems: "flex-start", marginBottom: "80px" }}>
            <div className="career-info-in" style={{ width: "50%", gap: "20px" }}>
              <div className="career-role" style={{ flex: 1 }}>
                <h4>B.Tech in Computer Science and Engineering</h4>
                <h5>Lovely Professional University</h5>
                <h6 style={{ fontSize: "16px", color: "#ccc", margin: "5px 0 0 0", fontWeight: "300" }}>CGPA: 7.72</h6>
              </div>
              <h3 style={{ fontSize: "26px", whiteSpace: "nowrap", flexShrink: 0 }}>2022 – 2026</h3>
            </div>
            <p style={{ width: "45%" }}>
              Pursuing a Bachelor’s degree in Computer Science with a focus on Full-Stack Development, Data Structures, and modern web technologies. Actively building scalable applications using the MERN stack and exploring AI/ML integration through real-world projects and research work.
            </p>
          </div>

          <div className="career-info-box" style={{ alignItems: "flex-start", marginBottom: "80px" }}>
            <div className="career-info-in" style={{ width: "50%", gap: "20px" }}>
              <div className="career-role" style={{ flex: 1 }}>
                <h4>Senior Secondary (12th)</h4>
                <h5>R.B.G.R College</h5>
              </div>
              <h3 style={{ fontSize: "26px", whiteSpace: "nowrap", flexShrink: 0 }}>2019 – 2021</h3>
            </div>
            <p style={{ width: "45%" }}>
              Completed higher secondary education with a focus on Science stream, building a strong foundation in analytical thinking, mathematics, and problem-solving skills essential for engineering studies.
            </p>
          </div>

          <div className="career-info-box" style={{ alignItems: "flex-start", marginBottom: "80px" }}>
            <div className="career-info-in" style={{ width: "50%", gap: "20px" }}>
              <div className="career-role" style={{ flex: 1 }}>
                <h4>High School (10th)</h4>
                <h5>Saraswati Vidya Mandir</h5>
              </div>
              <h3 style={{ fontSize: "26px", whiteSpace: "nowrap", flexShrink: 0 }}>2018 – 2019</h3>
            </div>
            <p style={{ width: "45%" }}>
              Completed foundational education with emphasis on academic discipline, core subjects, and overall personal development, shaping early interest in technology and computing.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;
