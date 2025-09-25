import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="main-footer" id="footer-contact">
      <div className="footer">
        <div className="footer-top">
          <div className="footer-left">
            <h1>Vincent Caraga</h1>
            <p>
              Welcome to my Personal Portfolio and Connect me with on LinkedIn
            </p>
          </div>
          <div className="footer-top-right">
            <div className="contacts">
              <p>
                <strong>Email:</strong> vincentccaraga@gmail.com
              </p>
              <p>
                <strong>Contact #:</strong> +639392283694
              </p>
            </div>
          </div>
        </div>
        <hr />
        <div className="footer-bottom">
          <p className="footer-bottom-left">Work in Progress!</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
