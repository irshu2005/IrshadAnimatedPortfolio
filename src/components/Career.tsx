import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container" id="career">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>

       <div className="career-info">

  {/* Bizlyzer India */}
  <div className="career-info-box">
    <div className="career-info-in">
      <div className="career-role">
        <h4>Software Trainee</h4>
        <h5>Bizlyzer India Pvt. Ltd. (OmniXM) — Pune, Maharashtra</h5>
      </div>
      <h3>Aug 2026 – Present</h3>
    </div>
   <p>
    • Joined Bizlyzer India Pvt. Ltd. (OmniXM) as a Software Trainee.<br/>
    • Currently gaining familiarity with the company's products, workflows, and development environment.<br/>
    • Learning the technology stack, coding standards, and software development processes followed by the team.<br/>
    • Looking forward to contributing to enterprise-grade software solutions and expanding my technical expertise.
  </p>
  </div>

  {/* SmartFRS */}
  <div className="career-info-box">
    <div className="career-info-in">
      <div className="career-role">
        <h4>Backend Developer Intern</h4>
        <h5>SmartFRS Solutions Pvt. Ltd. — Greater Noida, Uttar Pradesh</h5>
      </div>
      <h3>Feb 2026 – Jul 2026</h3>
    </div>
    <p>
      • Developed scalable RESTful APIs using Java, Spring Boot, and Spring WebFlux.<br/>
      • Implemented reactive programming with Mono and Flux for non-blocking, high-performance applications.<br/>
      • Integrated MongoDB and Redis to optimize data storage and application performance.<br/>
      • Collaborated with frontend and QA teams for seamless API integration and bug resolution.<br/>
      • Prepared API documentation, BRDs, and technical specifications for development and testing.<br/>
      • Improved backend performance through debugging, optimization, and code enhancements.
    </p>
  </div>

  {/* IBM */}
  <div className="career-info-box">
    <div className="career-info-in">
      <div className="career-role">
        <h4>Full Stack Developer Intern</h4>
        <h5>IBM Career Education</h5>
      </div>
      <h3>Aug 2025 – Sep 2025</h3>
    </div>
    <p>
      • Built a full-stack E-Commerce application using the MERN stack.<br/>
      • Developed RESTful APIs and integrated them with React.js frontend.<br/>
      • Implemented secure authentication and authorization using JWT.<br/>
      • Designed MongoDB database schemas and implemented CRUD operations.<br/>
      • Applied modern web development practices to build responsive and maintainable applications.
    </p>
  </div>

</div>
      </div>
    </div>
  );
};

export default Career;
