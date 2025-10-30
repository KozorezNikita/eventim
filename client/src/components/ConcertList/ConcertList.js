import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ConcertList.css";
import { FiCalendar } from "react-icons/fi";
import { FaCoins } from "react-icons/fa";
/*
export const eventsData = [
  {
    title: "ARTEM PIVOVAROV. MEINE WELT TOUR 2025",
    location: "Warszawa",
    venue: "Tauron arena kraków",
    date: "Feb 5, 2025 - 7:30 pm",
    price: "$100-$359",
    img: "/assets/musePoster.png",
  },
  {
    title: "TILL LINDEMANN. MEINE WELT TOUR 2025",
    location: "Istanbul",
    venue: "Istanbul Congress Center",
    date: "Feb 5, 2025 - 7:30 pm",
    price: "$100-$359",
    img: "/assets/musePoster.png",
  },
  {
    title: "THE RASMUS",
    location: "Warszawa",
    venue: "Tauron arena kraków",
    date: "Feb 5, 2025 - 7:30 pm",
    price: "$100-$359",
    img: "/assets/musePoster.png",
  },
  {
    title: "ARTEM PIVOVAROV. MEINE WELT TOUR 2025",
    location: "Warszawa",
    venue: "Tauron arena kraków",
    date: "Feb 5, 2025 - 7:30 pm",
    price: "$100-$359",
    img: "/assets/musePoster.png",
  },
  {
    title: "ANTITILA",
    location: "Almaty",
    venue: "Stadium Concert",
    date: "Aug 23, 2024 - 8:00 pm",
    price: "$100-$359",
    img: "/assets/musePoster.png",
  },
  {
    title: "MAKS KORZH",
    location: "Almaty",
    venue: "Stadium Concert",
    date: "Aug 25, 2024 - 8:00 pm",
    price: "$100-$359",
    img: "/assets/musePoster.png",
  },
  {
    title: "ARTEM PIVOVAROV. MEINE WELT TOUR 2025",
    location: "Warszawa",
    venue: "Tauron arena kraków",
    date: "Feb 5, 2025 - 7:30 pm",
    price: "$100-$359",
    img: "/assets/musePoster.png",
  },
  {
    title: "TILL LINDEMANN. MEINE WELT TOUR 2025",
    location: "Istanbul",
    venue: "Istanbul Congress Center",
    date: "Feb 5, 2025 - 7:30 pm",
    price: "$100-$359",
    img: "/assets/musePoster.png",
  },
  {
    title: "THE RASMUS",
    location: "Warszawa",
    venue: "Tauron arena kraków",
    date: "Feb 5, 2025 - 7:30 pm",
    price: "$100-$359",
    img: "/assets/musePoster.png",
  },
  {
    title: "ARTEM PIVOVAROV. MEINE WELT TOUR 2025",
    location: "Warszawa",
    venue: "Tauron arena kraków",
    date: "Feb 5, 2025 - 7:30 pm",
    price: "$100-$359",
    img: "/assets/musePoster.png",
  },
  {
    title: "ANTITILA",
    location: "Almaty",
    venue: "Stadium Concert",
    date: "Aug 23, 2024 - 8:00 pm",
    price: "$100-$359",
    img: "/assets/musePoster.png",
  },
  {
    title: "MAKS KORZH",
    location: "Almaty",
    venue: "Stadium Concert",
    date: "Aug 25, 2024 - 8:00 pm",
    price: "$100-$359",
    img: "/assets/musePoster.png",
  },
  {
    title: "ARTEM PIVOVAROV. MEINE WELT TOUR 2025",
    location: "Warszawa",
    venue: "Tauron arena kraków",
    date: "Feb 5, 2025 - 7:30 pm",
    price: "$100-$359",
    img: "/assets/musePoster.png",
  },
  {
    title: "TILL LINDEMANN. MEINE WELT TOUR 2025",
    location: "Istanbul",
    venue: "Istanbul Congress Center",
    date: "Feb 5, 2025 - 7:30 pm",
    price: "$100-$359",
    img: "/assets/musePoster.png",
  },
  {
    title: "THE RASMUS",
    location: "Warszawa",
    venue: "Tauron arena kraków",
    date: "Feb 5, 2025 - 7:30 pm",
    price: "$100-$359",
    img: "/assets/musePoster.png",
  },
  {
    title: "ARTEM PIVOVAROV. MEINE WELT TOUR 2025",
    location: "Warszawa",
    venue: "Tauron arena kraków",
    date: "Feb 5, 2025 - 7:30 pm",
    price: "$100-$359",
    img: "/assets/musePoster.png",
  },
  {
    title: "ANTITILA",
    location: "Almaty",
    venue: "Stadium Concert",
    date: "Aug 23, 2024 - 8:00 pm",
    price: "$100-$359",
    img: "/assets/musePoster.png",
  },
  {
    title: "MAKS KORZH",
    location: "Almaty",
    venue: "Stadium Concert",
    date: "Aug 25, 2024 - 8:00 pm",
    price: "$100-$359",
    img: "/assets/musePoster.png",
  },
];
*/
export default function ConcertList({ eventsData }) {
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  const toggleFavorite = (index) => {
    setFavorites((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const handleBuy = (eventId) => {
    navigate(`/concerts/${eventId}`);
  };

  return (
    <section className="popular-events">
      <h2 className="popular-title">
        <span className="dot"></span> ALLE EVENTS
      </h2>
      <div className="events-grid">
        {eventsData.map((event, index) => (
          <div className="event-card" key={index}>
            <div className="event-image">
              <img src={event.picture} alt={event.name} />
              {/* Якщо потрібно можна відновити кнопку "Favorite"
              <button
                className={`favorite-btn ${favorites.includes(index) ? "active" : ""}`}
                onClick={() => toggleFavorite(index)}
              >
                ♥
              </button>
              */}
            </div>
            <div className="event-info">
              <h3>{event.name}</h3>
              <p>{event.country}</p>
              <p>{event.location}</p>
              <p className="event-date">
                <FiCalendar /> {event.date}
              </p>
              <p className="event-price">
                <FaCoins  />
                €{event.price}
              </p>
              <button
                className="buy-btn-concert"
                onClick={() => handleBuy(event.id)}
              >
                Tickets kaufen
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}