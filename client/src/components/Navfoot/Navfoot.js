import { Link } from "react-router-dom";
import "./Navfoot.css";

export default function NavFoot() {
  return (
    <footer className="navfoot">
      {/* 🔹 Перший рядок — логотип по центру */}
      <div className="navfoot-top">
        <h1 className="logo">
          eventim<span className="plus">+</span>
        </h1>
      </div>

      {/* 🔹 Другий рядок — навігація зліва, геолокація і селект мови справа */}
      <div className="navfoot-bottom">
        {/* Навігаційні лінки */}
        <nav className="navfoot-nav">
          <Link to="/">Top Events</Link>
          <Link to="/about">About</Link>
          <Link to="/artists">Artists</Link>
          <Link to="/upcoming">Upcoming Events</Link>
        </nav>

        {/* Геолокація зліва і селект мови справа */}
        <div className="footer-right">
          <div className="city">
            <span className="location-icon">📍</span> Warszawa
          </div>

          <select className="lang">
            <option>RU</option>
            <option>EN</option>
          </select>
        </div>
      </div>
    </footer>
  );
}
