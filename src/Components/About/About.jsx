import React from "react";
import "./About.css";
import profile from "../../assets/profile.jpg";

const About = () => {
  return (
    <div className="about" id="about-me">
      <div className="about-title">
        <h1>About Me</h1>
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img id="about-profile" src={profile} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am focused on web development and currently learning full-stack
              development from Udemy.
            </p>
            <p>I am also learning first React.js a JavaScript frontend library.</p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML5 and CSS3</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript ES6</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>React.js</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>SQL</p>
              <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>Capstone Project</h1>
          <p>
            "Sales and Supply Inventory Management for Alfonso Bike Shop in
            Malabon City using QR Code"
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
