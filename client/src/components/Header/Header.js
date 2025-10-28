import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg"; // 🔹 шлях до твого SVG
import "./Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cityOpen, setCityOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("BERLIN");
  const dropdownRef = useRef(null);

  const cities = ["BERLIN", "HAMBURG", "MUNICH", "COLOGNE", "FRANKFURT"];

  const handleCitySelect = (city) => {
    setSelectedCity(city);
    setCityOpen(false);
  };

  // 🔹 Закриття списку при кліку поза ним
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setCityOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="header">
      <div className="header-left">
        <Link to="/">
          <img src={logo} alt="eventim logo" className="logo-img" />
        </Link>
        

        <div className="city-wrapper" ref={dropdownRef}>
          <div className="city" onClick={() => setCityOpen(!cityOpen)}>
            <svg
              className="location-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="none"
              stroke="black"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
              <circle cx="12" cy="9" r="2.5" />
            </svg>
            <span className="city-name">{selectedCity}</span>
          </div>

          {cityOpen && (
            <ul className="city-dropdown">
              {cities.map((city) => (
                <li
                  key={city}
                  onClick={() => handleCitySelect(city)}
                  className={city === selectedCity ? "active" : ""}
                >
                  {city}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <Link to="/">Top Events</Link>
        <Link to="/about">About</Link>
        <Link to="/artists">Artists</Link>
        <Link to="/managerDashboard">Manager Dashboard</Link>
      </nav>

      <div className="header-right">
        <div className="search-wrapper">
          <input type="text" placeholder="Search" className="search" />
          <svg
            className="search-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="16"
            height="16"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11 4a7 7 0 1 0 0 14a7 7 0 0 0 0-14zm8 14l-3.5-3.5"
            />
          </svg>
        </div>

        <select className="lang">
          <option>GR</option>
        </select>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}
