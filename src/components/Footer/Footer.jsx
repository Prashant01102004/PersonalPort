import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import LinkedIn from "../../img/linkedin.png";
import Github from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>Prashantjakhad2@gmail.com</span>
        <div className="i-icons">
        <a href="https://github.com/Prashant01102004"> <img src={Github} alt="" /> </a>
         <a href="https://www.linkedin.com/in/prashant-jakhad-9b224a238/"> <img src={LinkedIn} alt="" /></a>
        <a href="https://www.instagram.com/jakhad.prashant/">  <img src={Insta} alt="" /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
