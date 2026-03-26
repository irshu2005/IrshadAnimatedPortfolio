import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>

        <div className="contact-flex">

          {/* Email & Education */}
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:irshu79054@gmail.com" data-cursor="disable">
                irshu79054@gmail.com
              </a>
            </p>

            <h4>Education</h4>
            <p>
              B.Tech – Computer Science & Engineering <br />
              Dronacharya Group of Institutions (2022 – 2026)
            </p>
          </div>

          {/* Social Links */}
          <div className="contact-box">
            <h4>Social</h4>

            <a
              href="https://github.com/irshu2005"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>

            <a
              href="https://linkedin.com/in/irshu2005"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
          </div>

          {/* Footer */}
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Irshad Ahamad</span>
            </h2>

            <h5>
              <MdCopyright /> 2025
            </h5>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;