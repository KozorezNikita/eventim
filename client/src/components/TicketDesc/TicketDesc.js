import React, { useState } from "react";
import "./TicketDesc.css";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function TicketDesc({ concert }) {
  const navigate = useNavigate();
  const { addToCart, clearCart } = useCart();
  const [tickets, setTickets] = useState([
    { name: "P1", count: 0, priceFactor: 1 },
  ]);

  /*const [tickets, setTickets] = useState([
    { name: "P3", count: 0, priceFactor: 3.2 },
    { name: "P2", count: 0, priceFactor: 2.3 },
    { name: "P1", count: 0, priceFactor: 1 },
  ]);*/

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

  // Спочатку очищаємо кошик
  clearCart();

  // Потім додаємо нові товари
  addToCart(selected);

  console.log("Кошик оновлено:", selected);

  // Скидаємо лічильники квитків
  setTickets(tickets.map(t => ({ ...t, count: 0 })));
  navigate("/cart");
};

  const totalTickets = tickets.reduce((sum, t) => sum + t.count, 0);

  return (
    <div className="ticket-description">
      {/* Блок із дот і написом */}
      <h2 className="ticket-title"><span className="ticket-dot"></span> BESCHREIBUNG</h2>

      {/* Заголовок концерту */}
      <h3 className="concert-header">Februar in Berlin – Lady Gaga Live!</h3>

      {/* Опис концерту */}
      <p>
        Bereite dich auf eine außergewöhnliche Nacht mit der einzigartigen <strong>Lady Gaga</strong> vor – der internationalen Pop-Ikone, 
        die mit ihrer Stimme, Kreativität und grenzenloser Energie die Musikwelt revolutioniert hat. 
        Ein Konzert von Lady Gaga ist weit mehr als nur Musik – es ist eine spektakuläre Show voller Emotionen, Mode, Tanz und visueller Kunst. 
        Jede Performance wird zu einem unvergesslichen Erlebnis, das Herz, Seele und Sinne gleichermaßen berührt.
      </p>

      <p>
        Mit unzähligen Welthits wie <em>„Bad Romance“</em>, <em>„Poker Face“</em>, <em>„Shallow“</em> und <em>„Rain On Me“</em> begeistert Lady Gaga Fans auf der ganzen Welt. 
        Ihre Bühnenauftritte vereinen beeindruckende Choreografien, kraftvolle Vocals und atemberaubende Kostüme zu einer explosiven Mischung aus Glamour, Energie und Emotion.
      </p>

      <p className="last-p">
        Am 5. Februar verwandelt Lady Gaga die <strong>Uber Arena in Berlin</strong> in eine Bühne voller Magie und Leidenschaft. 
        Erlebe ihre unverwechselbare Präsenz live – ein Abend, der Pop, Kunst und pure Power vereint. 
        Verpasse nicht dieses einmalige Ereignis – <strong>Lady Gaga Live in Berlin!</strong>
      </p>

      {/* Блок з квитками */}
      <h2 className="ticket-title"><span className="ticket-dot"></span> TICKETS</h2>

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
