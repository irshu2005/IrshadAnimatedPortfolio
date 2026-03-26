import { lazy, PropsWithChildren, Suspense, useEffect, useState } from "react";
import About from "./About";
import Career from "./Career";
import Contact from "./Contact";
import Cursor from "./Cursor";
import Landing from "./Landing";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";
import WhatIDo from "./WhatIDo";
import Work from "./Work";
import setSplitText from "./utils/splitText";

const TechStack = lazy(() => import("./TechStack"));

const MainContainer = ({ children }: PropsWithChildren) => {
  const [isDesktopView, setIsDesktopView] = useState<boolean>(
    window.innerWidth > 1024
  );

  useEffect(() => {
    const resizeHandler = () => {
      setSplitText();
      setIsDesktopView(window.innerWidth > 1024);
    };
    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [isDesktopView]);

  return (
    <div className="container-main">
      <Cursor />
      <Navbar />
      <SocialIcons />
      {isDesktopView && children}
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="container-main">
            <Landing>{!isDesktopView && children}</Landing>
            <About />
            <WhatIDo />
            <Career />
            <Work />
            {isDesktopView && (
              <Suspense fallback={<div>Loading....</div>}>
                <TechStack />
              </Suspense>
            )}
            {/* Education Section */}
            <div className="career-section section-container" id="education">
              <div className="career-container">
                <h2>
                  Education
                </h2>
                <div className="career-info">
                  {/* B.Tech */}
                  <div className="career-info-box">
                    <div className="career-info-in">
                      <div className="career-role">
                        <h4>B.Tech – Computer Science &amp; Engineering</h4>
                        <h5>Dronacharya Group of Institutions</h5>
                      </div>
                      <h3>2022 – 2026</h3>
                    </div>
                    <p>CGPA: 8.1 / 10</p>
                  </div>
                  {/* XII */}
                  <div className="career-info-box">
                    <div className="career-info-in">
                      <div className="career-role">
                        <h4>XII (UP Board)</h4>
                      </div>
                      <h3>2022</h3>
                    </div>
                    <p>81.2%</p>
                  </div>
                  {/* X */}
                  <div className="career-info-box">
                    <div className="career-info-in">
                      <div className="career-role">
                        <h4>X (UP Board)</h4>
                      </div>
                      <h3>2020</h3>
                    </div>
                    <p>86.16%</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications Section */}
            <div className="career-section section-container" id="certifications">
              <div className="career-container">
                <h2>
                  Certifications
                </h2>
                <div className="career-info">
                  {/* Programming in JAVA – NPTEL */}
                  <div className="career-info-box">
                    <div className="career-info-in">
                      <div className="career-role">
                        <a href="https://irshu2005.github.io/Irshad-Portfolio/NPTEL-Irshad-Certificate.jpg" target="_blank" rel="noopener noreferrer">
                          <h4>Programming in JAVA – NPTEL</h4>
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* Amazon Web Services (AWS) */}
                  <div className="career-info-box">
                    <div className="career-info-in">
                      <div className="career-role">
                        <a href="https://irshu2005.github.io/Irshad-Portfolio/aws-irshad-certificate.jpg" target="_blank" rel="noopener noreferrer">
                          <h4>Amazon Web Services (AWS)</h4>
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* Web Development Fundamentals */}
                  <div className="career-info-box">
                    <div className="career-info-in">
                      <div className="career-role">
                        <a href="https://irshu2005.github.io/Irshad-Portfolio/Coursera%20Certificate.pdf" target="_blank" rel="noopener noreferrer">
                          <h4>Web Development Fundamentals</h4>
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* Cyber Security Essentials */}
                  <div className="career-info-box">
                    <div className="career-info-in">
                      <div className="career-role">
                        <a href="https://irshu2005.github.io/Irshad-Portfolio/IrshadAhamad-Cyber%20Security-certificate.pdf" target="_blank" rel="noopener noreferrer">
                          <h4>Cyber Security Essentials</h4>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
