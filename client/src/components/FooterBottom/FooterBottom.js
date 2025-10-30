import React from "react";
import "./FooterBottom.css";
import { Link } from "react-router-dom";
import telegram from "../../assets/telegram.png";
import visaFoot from "../../assets/visaFoot.png";
import masterFoot from "../../assets/masterFoot.png";

export default function FooterBottom() {
  return (
    <div className="footer-bottom">
      {/* Лівий блок */}
      <div className="footer-left">
        <span>©2025 eventim</span>
        <Link to="/datenschutz" className="privacy-link">Datenschutz</Link>
      </div>

      {/* Центр */}
      <div className="footer-center">
        <span>We accept:</span>
        <img src={visaFoot} alt="Visa" width="35" height="50" />
        <img src={masterFoot} alt="Mastercard" width="35" height="50" />
      </div>

      {/* Правий блок */}
      <div className="footer-right">
        <a href="https://t.me/your_channel" target="_blank" rel="noopener noreferrer">
          <img src={telegram} alt="Telegram" width="24" height="24" />
        </a>
      </div>
    </div>
  );
}
