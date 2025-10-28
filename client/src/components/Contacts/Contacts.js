import React from "react";
import "./Contacts.css";

export default function Contacts() {
  return (
    <footer className="contacts-block">
      <div className="contacts-left">
        <h3>WHO WE ARE?</h3>
        <p>
          We make it easy to buy tickets for the best events in Warsaw! From concerts and music festivals to comedy shows, theater performances, and sports events — we’ve got tickets for every taste and mood.
        </p>
        <p>LLC “Eventim System Poland”, Warsaw, ul. Marszałkowska 7</p>
        <p>REGON 526472190</p>
        <p>NIP 5274954790, KRS 0001041001</p>
      </div>

      <div className="contacts-right">
        <h3>CONTACT</h3>
        <p>eventin@gmail.com</p>
        <h3>ADDRESS</h3>
        <p>Warsaw, ul. Marszałkowska 7</p>
      </div>
    </footer>
  );
}