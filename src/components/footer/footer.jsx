import React from "react";
import "./footer.css";
import user from "../../assets/user.png";
import mylogo from "../../assets/mylogo.GIF";

const Footer = () => {
  return (
    <div className="footer" id="footer">

      {/* TOP */}
      <div className="footer-top">

        {/* LEFT */}
        <div className="footer-left">
          <img src={mylogo} alt="logo" className="footer-logo" />

          <div className="footer-text">
            <h3>Salman Hashmi</h3>
            <p>Full Stack Web Developer</p>
            <p className="tagline">Turning ideas into digital reality</p>
            <p className="skills">
              React, Node.js, MongoDB, JavaScript
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="footer-right">

          <div className="footer-input">
            <img src={user} alt="user" />
            <input type="email" placeholder="Enter your email" />
          </div>

          <button className="footer-btn">Subscribe</button>

        </div>
      </div>

      <hr />

      {/* BOTTOM */}
      <div className="footer-bottom">

        <div className="footer-bottom-left">
          <p>
            © 2025 <b>Salman Hashmi</b>. All rights reserved
          </p>
        </div>

        <div className="footer-bottom-right">
          <span>Terms</span>
          <span>Privacy</span>
          <span>Contact</span>
        </div>

      </div>

    </div>
  );
};

export default Footer;