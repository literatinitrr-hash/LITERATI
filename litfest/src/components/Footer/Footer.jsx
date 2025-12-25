import React from "react";
import "./Footer.css";
import {
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaEnvelope
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">

        {/* Contact Information */}
        <div className="footer-contact">
          <p>
            <FaPhone className="footer-icon" />
            <strong>Avish Kumar Shrivastava</strong> (Overall Coordinator) – 7987023169
          </p>

          <p>
            <FaPhone className="footer-icon" />
            <strong>Kreeti Soni</strong> (Overall Coordinator) – 9893549541
          </p>

          <p>
            <FaPhone className="footer-icon" />
            <strong>Prakhar Shrivastava</strong> (Overall Coordinator) – 7987257552
          </p>

          <p>
            <FaEnvelope className="footer-icon" />
            <a
              href="mailto:literati@nitrr.ac.in"
              className="footer-email"
            >
              literati@nitrr.ac.in
            </a>
          </p>
        </div>

        {/* Social Media Links */}
        <div className="footer-socials">
          <a
            href="https://www.instagram.com/literary.nitrr?igsh=MXhkMmkxd3BtbjJ3dA=="
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.linkedin.com/company/literati-nit-raipur/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>

      </div>

      <p className="footer-copy">
        © LitFest 2026. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
