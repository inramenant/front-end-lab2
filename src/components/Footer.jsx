import React from "react";
import "../styles/Footer.css";
import { FaFacebookF, FaInstagram, FaVk, FaYoutube, FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <FaFacebookF />
        <FaInstagram />
        <FaVk />
        <FaYoutube />
        <FaTelegram />
      </div>
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contacts</h3>
          <p><a href="mailto:reception@iitu.edu.kz">📧 reception@iitu.edu.kz</a></p>
          <p><a href="tel:87273200000">📞 8 (727) 320-00-00</a></p>
          <p><a href="tel:87273200001">📞 8 (727) 320-00-01</a></p>
          <p><a href="https://2gis.kz/almaty/firm/9429940000793107?m=76.909876%2C43.235296%2F16.75">📍 Almaty, Kazakhstan, Manasa 34/1</a></p>
          <p><a href="https://iitu.edu.kz/ru/articles/contacts/">🔗 All Contacts</a></p>
        </div>
        <div className="footer-section">
          <h3>About University</h3>
          <p>📌 Admissions</p>
          <p>📌 Mission and Strategy</p>
          <p>📌 3D Tour</p>
          <p>📌 Careers at IITU</p>
        </div>
        <div className="footer-section">
          <h3>For Students</h3>
          <p>📌 Trust Box</p>
          <p>📌 Student Life</p>
        </div>
        <div className="footer-section">
          <h3>Partnership</h3>
          <p>📌 Partners</p>
          <p>📌 Academic Mobility</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright &copy; 2023, International IT University</p>
      </div>
    </footer>
  );
};

export default Footer;
