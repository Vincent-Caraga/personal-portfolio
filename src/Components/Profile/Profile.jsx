import React from "react";
import "./Profile.css";
import profile from "../../assets/profile.jpg";

const Profile = () => {
  return (
    <div className="profile" id="home">
      <img src={profile} alt="" />
      <h1>
        <span>I'm Vincent C. Caraga,</span> aspiring full-stack developer
      </h1>
      <p>
        I am passionate about software development, specifically in web
        Development.
        <br />
        I took a Bachelor of Science in Information System at the Technological
        University of the Philippines - Manila. <br />I am learning modern web
        development using JavaScript frameworks/libraries like PostgreSQL,
        Express.js, React.js, Node.js.
      </p>
      <div className="profile-action">
        <div className="profile-connect">
          <a
            href="https://www.linkedin.com/in/vincentcaraga/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Connect with me on LinkedIn
          </a>
        </div>
        <div className="nav-connect">
          <a
            href="https://github.com/Vincent-Caraga"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Profile
          </a>
        </div>
        <div className="profile-resume">Download my Resume</div>
      </div>
    </div>
  );
};

export default Profile;
