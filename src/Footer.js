import React from 'react';
import Logo from "./Logo.svg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="footer-wrapper">
    <div className="footer-section-one">
      <div className="footer-logo-container">
        <img src={Logo} alt="" />
      </div>
      <div className="footer-icons">
        <BsTwitter />
        <SiLinkedin />
        <BsYoutube />
        <FaFacebookF />
      </div>
    </div>
    <div className="footer-section-two">
      <div className="footer-section-columns">
        <span>Quality</span>
        <span>Help</span>
        <span>Share</span>
        <span>Careers</span>
        <span>Testimonials</span>
        <span>Work</span>
      </div>
      <div className='footer-section-columns'>
        <span>+998(##)###-##-##</span>
        <span>email@gmail.com</span>
        <span>example@gmail.com</span>
        <span>contact@gmail.com</span>
      </div>
      <div className='footer-section-columns'>
        <span>Terms & Condition</span>
        <span>Privacy Policy</span>
      </div>
    </div>
  </div>
  )
}
