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

          {/* SmartFRS - Current */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Tools and Platform Engineering Intern</h4>
                <h5>SmartFRS Pvt Ltd — Noida, Uttar Pradesh</h5>
              </div>
              <h3>Feb 2026 – Present</h3>
            </div>
            <p>
  • Designed and developed reactive backend services using Spring Boot with Spring WebFlux to handle high-concurrency API requests efficiently.<br/>
  • Built and optimized Reactive RESTful APIs using Mono and Flux for non-blocking client-server communication.<br/>
  • Integrated backend services with messaging protocols like MQTT for real-time device communication.<br/>
  • Worked on customization and extension of Eclipse RCP applications by modifying plugins and platform components.<br/>
  • Collaborated on backend modules including API development, debugging, and performance optimization for scalable enterprise tools.<br/>
  • Handled API integration, data processing, and reactive workflows to support platform-level backend services.
</p>
          </div>

          {/* IBM Internship */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Development Intern</h4>
                <h5>IBM Career Education</h5>
              </div>
              <h3>Aug 2025 – Sep 2025</h3>
            </div>
           <p>
  • Designed and developed a full-stack E-Commerce web application using MongoDB, Express.js, React.js, and Node.js.<br/>
  • Designed and optimized RESTful APIs for smooth client-server communication.<br/>
  • Integrated authentication and authorization using JWT and OAuth.<br/>
  • Connected backend APIs with MongoDB for seamless data storage and retrieval.<br/>
  • Implemented database schemas and CRUD operations in MongoDB/MySQL.
</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;