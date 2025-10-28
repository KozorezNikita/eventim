import React from "react";
import { FiCalendar, FiMapPin } from "react-icons/fi";
import { FaCoins } from "react-icons/fa";
import "./TicketInfo.css";

export default function TicketInfo({ concert }) {
  return (
    concert && (
      <div className="ticketinfo-container">
        {/* Фото */}
        <div className="ticketinfo-image">
          <img src={concert.picture} alt={concert.name} />
        </div>

        {/* Вся інфа про концерт */}
        <div className="ticketinfo-details">
          <div className="ticketinfo-top">
            <h1>{concert.name}</h1>
          </div>

          <div className="ticketinfo-bottom">
            <p><FiCalendar /> {concert.date}</p>
            <p><FiMapPin /> {concert.country}</p>
            <p><FiMapPin /> {concert.location}</p>
          </div>
        </div>

        {/* Права частина */}
        <div className="ticketinfo-action">
          <p className="ticketinfo-price">
            <FaCoins style={{ marginRight: "6px", verticalAlign: "middle" }} />
            {concert.price}
          </p>
          <button className="ticketinfo-buy-btn">Tickets anzeigen</button>
        </div>
      </div>
    )
  );
}
