import React from "react";
import "./FooterBottom.css";
import { Link } from "react-router-dom";

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
        <img src="https://images.seeklogo.com/logo-png/14/2/visa-logo-png_seeklogo-149686.png" alt="Visa" width="40" height="auto" />
        <img src="https://image.shutterstock.com/image-photo/image-260nw-2357100277.jpg" alt="Mastercard" width="40" height="auto" />
      </div>

      {/* Правий блок */}
      <div className="footer-right">
        <a href="https://t.me/your_channel" target="_blank" rel="noopener noreferrer">
          <img src="https://image.shutterstock.com/image-photo/image-260nw-1081329404.jpg" alt="Telegram" width="40" height="auto" />
        </a>
      </div>
    </div>
  );
}
