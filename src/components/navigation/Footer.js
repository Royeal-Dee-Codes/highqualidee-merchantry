import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../styles/app.scss";

export default function Footer() {
  return (
    <div className="footer">
      <div className="icon-container">
        <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon="fa-brands fa-facebook" />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon="fa-brands fa-twitter" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon="fa-brands fa-instagram" />
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon="fa-brands fa-youtube" />
        </a>
        <a href="https://www.github.com" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon="fa-brands fa-github" />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon="fa-brands fa-linkedin" />
        </a>
      </div>
      <div className="footer-container">
        <p>HighQualiDee Merchantry</p>
        <p>143 Fancy Street, PoshTown USA</p>
        <p>Ph: 143-143-1443</p>
      </div>
      <div className="copy-right">
        <p>HighQualiDee Royeal Dee Codes&copy; 2024</p>
      </div>
    </div>
  );
}
