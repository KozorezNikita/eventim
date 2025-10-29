import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { FiCalendar, FiMapPin } from "react-icons/fi";
import "./Cart.css";

export default function Cart() {
  const { cartItems, clearCart } = useCart();
  const [agreed, setAgreed] = useState(false);

  const handleClearCart = () => {
    if (window.confirm("Are you sure you want to remove all items from the cart?")) {
      clearCart();
    }
  };

  const handleCheckout = () => {
  if (!agreed) {
    alert("Please agree to the terms before proceeding.");
    return;
  }

  // Загальна кількість товарів у кошику
  const totalItems = cartItems.reduce((sum, item) => sum + item.count, 0);

    if (totalItems === 0) return;

    if (totalItems === 1) {
      // Редирект на gumroad одного товару
      const firstItemGumroad = cartItems[0].gumroad;
      if (firstItemGumroad) {
        window.location.href = firstItemGumroad;
      } else {
        alert("Payment link not available.");
      }
    } else {
      // 2 і більше товарів → на домашню сторінку
      window.location.href = "/";
    }
  };


  // Загальна сума
  const totalSum = cartItems.reduce((sum, item) => sum + Number(item.totalPrice), 0);

  return (
    <div className="cart-page">
      <h2 className="cart-popular-title">
        <span className="cart-dot"></span> BESTELLDETAILS
      </h2>

      <div className="cart-content">
        {/* Ліва колонка: контактна інформація */}
        <div className="cart-contact-info">
          <h3 className="cart-section-title">KONTAKINFORMATIONEN</h3>
          <form className="cart-contact-form">
            <input className="cart-input" type="text" placeholder="Vorname" />
            <input className="cart-input" type="text" placeholder="Nachname" />
            <input className="cart-input" type="text" placeholder="Phone" />
            <input className="cart-input" type="email" placeholder="E-mail adresse" />
          </form>
          <p className="cart-note">
            Nach Abschluss der Zahlung wird Ihr Ticket automatisch an die von Ihnen angegebene E-Mail-Adresse gesendet.
          </p>
        </div>

        {/* Права колонка: кошик */}
        <div className="cart-items">
          <div className="cart-header">
            <h4 className="cart-popular-title">
              <span className="cart-dot"></span> AUSGEWÄHLTE TICKETS
            </h4>
            <button className="cart-clear-btn" onClick={handleClearCart}>
              🗑 Abbrechen
            </button>
          </div>

          {cartItems.length === 0 ? (
            <p className="cart-empty-text">Your selected tickets will appear here.</p>
          ) : (
            <>
              <ul className="cart-item-list">
                {cartItems.map((item, index) => (
                  <li key={index} className="cart-item">
                    <img
                      src={item.concertPicture}
                      alt={item.concertName}
                      className="cart-item-image"
                    />
                    <div className="cart-item-details">
                      <h4 className="cart-item-concert-name">{item.concertName}</h4>
                      <p className="cart-item-line">
                        <FiCalendar className="cart-icon" /> {item.concertDate}
                      </p>
                      <p className="cart-item-line">
                        <FiMapPin className="cart-icon" /> {item.concertCountry || "—"}
                      </p>
                      <p className="cart-item-line">
                        <FiMapPin className="cart-icon" /> {item.concertLocation}
                      </p>
                      <p className="cart-item-type-count">
                        <strong>Type:</strong> {item.type} — <strong>Qty:</strong> {item.count}
                      </p>
                    </div>
                    <div className="cart-item-price-container">
                      <span className="cart-item-price">${item.totalPrice}</span>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Сума та кнопка */}
              <div className="cart-summary">
                <div className="cart-total">
                  <span>GESAMTBETRAG:</span>
                  <span className="cart-total-price">${totalSum}</span>
                </div>

                <div className="cart-agree">
                  <input
                    type="checkbox"
                    id="agree"
                    checked={agreed}
                    onChange={() => setAgreed(!agreed)}
                  />
                  <label htmlFor="agree">
                    Ich stimme den Nutzungsbedingungen, dem öffentlichen Angebot und der Datenschutzrichtlinie zu.
                  </label>
                </div>

                <button
                  className="cart-pay-btn"
                  onClick={handleCheckout}
                  disabled={!agreed || cartItems.length === 0}
                >
                  Bestellung aufgeben
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
