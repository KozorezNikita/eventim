import React from "react";
import "./Contacts.css";

export default function Contacts() {
  return (
    <footer className="contacts-block">
      <div className="contacts-left">
        <h3>Wer wir sind?</h3>
        <p>Offizieller Eventim-Partner in Deutschland. Kaufen Sie Tickets für Konzerte und Veranstaltungen in Berlin, Hamburg, München, Köln und Frankfurt.</p>
        <p>HRB: 0001041001</p>
        <p>Betriebs-ID: 526472190</p>
      </div>

      <div className="contacts-right">
        <h3>Kontakt</h3>
        <p>eventin@gmail.com</p>
        <h3>ADDRESS</h3>
        <p>Warsaw, ul. Marszałkowska 7</p>
      </div>
    </footer>
  );
}