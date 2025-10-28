import React from "react";

function CartLeft() {

  return (
    <div className="cart-contact-info">
          <h3 className="cart-section-title">Contact Information</h3>
          <form className="cart-contact-form">
            <input className="cart-input" type="text" placeholder="Name" />
            <input className="cart-input" type="email" placeholder="Email" />
            <input className="cart-input" type="text" placeholder="Phone" />
            <input className="cart-input" type="text" placeholder="Address" />
          </form>
          <p className="cart-note">
            Nach Abschluss der Zahlung wird Ihr Ticket automatisch an die von Ihnen angegebene E-Mail-Adresse gesendet.
          </p>
    </div>
  );
}

export default About;




