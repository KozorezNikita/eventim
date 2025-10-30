import React, { useState } from "react";
import "./TicketDesc.css";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function TicketDesc({ concert, ticketsRef }) {
  const navigate = useNavigate();
  const { addToCart, clearCart } = useCart();
  const [tickets, setTickets] = useState([{ name: "P1", count: 0, priceFactor: 1 }]);

  // ⛔ Перевірка перед будь-яким доступом до concert.date
  if (!concert) return null;

  // Якщо concert існує — тоді вже можемо працювати з датою
  const concertDate = concert?.date ? new Date(concert.date) : null;

  const monthNames = [
    "Januar", "Februar", "März", "April", "Mai", "Juni",
    "Juli", "August", "September", "Oktober", "November", "Dezember"
  ];

  const month = concertDate ? monthNames[concertDate.getMonth()] : "";
  const formattedDate = concertDate
    ? concertDate.toLocaleDateString("de-DE", { day: "numeric", month: "long" })
    : "";

  const increment = (index) => {
    const newTickets = [...tickets];
    newTickets[index].count += 1;
    setTickets(newTickets);
  };

  const decrement = (index) => {
    const newTickets = [...tickets];
    if (newTickets[index].count > 0) {
      newTickets[index].count -= 1;
      setTickets(newTickets);
    }
  };

  const handleAddToCart = () => {
    if (!concert) return;

    const selected = tickets
      .filter(t => t.count > 0)
      .map(t => ({
        concertId: concert.id,
        concertName: concert.name,
        concertPicture: concert.picture,
        concertCity: concert.country,
        concertLocation: concert.location,
        concertDate: concert.date,
        type: t.name,
        count: t.count,
        gumroad: concert.gumroad,
        price: (concert.price / t.priceFactor).toFixed(2),
        totalPrice: (t.count * (concert.price / t.priceFactor)).toFixed(2),
      }));

    if (selected.length === 0) return;

    clearCart();
    addToCart(selected);
    setTickets(tickets.map(t => ({ ...t, count: 0 })));
    navigate("/cart");
  };

  const totalTickets = tickets.reduce((sum, t) => sum + t.count, 0);

  return (
    <div className="ticket-description">
      <h2 className="ticket-title">
        <span className="ticket-dot"></span> BESCHREIBUNG
      </h2>

      <h3 className="concert-header">
        {month} in {concert.country} – {concert.name} Live!
      </h3>

      <p>
        Bereite dich auf eine außergewöhnliche Nacht mit der einzigartigen {concert.name} vor –
        einer internationalen Musikikone, die mit ihrer Stimme, Kreativität und Energie die Bühne beherrscht.
        Ein Konzert von {concert.name} ist weit mehr als nur Musik – es ist eine spektakuläre Show voller Emotionen, Tanz und visueller Kunst.
      </p>

      <p>
        Mit zahlreichen Hits begeistert {concert.name} Fans auf der ganzen Welt.
        Die Bühnenauftritte verbinden beeindruckende Choreografien, kraftvolle Vocals und atemberaubende Kostüme
        zu einem unvergesslichen Erlebnis aus Energie, Glamour und Emotion.
      </p>

      <p className="last-p">
        Am {formattedDate} verwandelt {concert.name} die {concert.location} in eine Bühne voller Magie und Leidenschaft.
        Erlebe die unverwechselbare Präsenz von {concert.name} live – ein Abend, der Musik, Kunst und pure Power vereint.
        Verpasse nicht dieses einmalige Ereignis!
      </p>

      <h2 className="ticket-title">
        <span className="ticket-dot" ref={ticketsRef}></span> TICKETS
      </h2>

      <div className="ticket-options">
        {tickets.map((ticket, index) => (
          <div key={ticket.name} className="ticket-row">
            <p className="ticket-name">{ticket.name}</p>
            <div className="ticket-controls">
              <span className="ticket-price">
                {concert?.price ? (concert.price / ticket.priceFactor).toFixed(2) : "0.00"}
              </span>
              <div className="ticket-quantity">
                <button onClick={() => decrement(index)}>-</button>
                <span>{ticket.count}</span>
                <button onClick={() => increment(index)}>+</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="cart-button" onClick={handleAddToCart}>
        Jetzt kaufen ({totalTickets})
      </button>
    </div>
  );
}
