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
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Trainee</h4>
                <h5>Bizlyzer India Pvt. Ltd. (OmniXM) — On-site</h5>
              </div>
              <h3>Aug 2026 – Present</h3>
            </div>
            <p>
              • Developed and optimized backend services for CXM, the company&apos;s core product, using ASP.NET Core, C#, Entity Framework Core, Dapper, and MySQL/SQL Server.
              <br />
              • Fixed N+1 query patterns and in-memory data loads by moving filtering, search, and pagination logic to the database layer, cutting unnecessary round-trips.
              <br />
              • Debugged issues across a microservices architecture by tracing requests through the API gateway, backend services, and database using logging and query analysis.
              <br />
              • Built backend services with FastAPI (Python) for AI/data-labeling workflows, including request handling, prompt processing, and API integrations.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Backend Developer Intern</h4>
                <h5>SmartFRS Solutions Pvt. Ltd. — On-site</h5>
              </div>
              <h3>Feb 2026 – Jul 2026</h3>
            </div>
            <p>
              • Developed RESTful APIs using Java, Spring Boot, and Spring WebFlux, applying reactive programming (Mono/Flux) for high-concurrency services.
              <br />
              • Integrated MongoDB and Redis for efficient data storage, caching, and improved application performance.
              <br />
              • Created API documentation, BRDs, and technical specifications, collaborating with frontend and QA teams for smooth feature delivery.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer Intern</h4>
                <h5>IBM — Remote</h5>
              </div>
              <h3>Aug 2025 – Sep 2025</h3>
            </div>
            <p>
              • Built a full-stack E-Commerce web application using the MERN stack.
              <br />
              • Developed RESTful APIs and integrated them with the React.js frontend.
              <br />
              • Implemented secure authentication and authorization using JWT and bcrypt.
              <br />
              • Designed MongoDB database schemas and implemented CRUD operations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
