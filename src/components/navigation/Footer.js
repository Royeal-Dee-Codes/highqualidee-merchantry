import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../styles/Main.scss";
import "../../styles/App.scss";

export default function Footer() {
  return (
    <div className="footer">
      <div className="icon-container">
        <FontAwesomeIcon icon="fa-brands fa-facebook" />
        <FontAwesomeIcon icon="fa-brands fa-twitter" />
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
