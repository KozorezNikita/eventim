import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { API_BASE_URL } from "../config/config";
import { FiCalendar, FiMapPin } from "react-icons/fi";
import { FaCoins } from "react-icons/fa";
import TicketInfo from "../components/TicketInfo/TicketInfo";
import TicketDesc from "../components/TicketDesc/TicketDesc";

export default function ConcertPage() {
  const { id } = useParams();
  const [concert, setConcert] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/concerts/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Concert not found");
        return res.json();
      })
      .then((data) => setConcert(data))
      .catch((err) => setError(err.message));
  }, [id]);

  const ticketsRef = useRef(null); // реф на блок TICKETS

  const scrollToTickets = () => {
    if (ticketsRef.current) {
      ticketsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  if (error) return <p>Error: {error}</p>;

  
  

  return (
    <div className="page">
     <TicketInfo concert={concert} onShowTickets={scrollToTickets} />
      <TicketDesc concert={concert} ticketsRef={ticketsRef} />
    </div>
  );
}
