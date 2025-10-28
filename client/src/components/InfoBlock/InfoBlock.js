import React from "react";
import "./InfoBlock.css";

export default function InfoBlock() {
  return (
    <section className="info-block">
      <p>
        Buying concert tickets in Warsaw is quick and easy! You can choose from a
        wide variety of music genres — reggae, electronic, punk, alternative,
        rock, metal, indie, rap, hip-hop, or maybe you prefer jazz, blues,
        classical, ethnic, folk, country, or pop?
      </p>

        <br/>

      <p>
        On our website, you’ll find the most popular shows and concerts in Warsaw. 
        We offer a huge selection not only of music genres but also of concert venues — 
        from large arenas like&nbsp;PGE Narodowy, Tauron Arena, and COS Torwar to smaller, cozy clubs and halls such as Progresja, Palladium, Stodoła, Hydrozagadka, Niebo, and many others.
      </p>

      <br/>
      
      <p>
        We work to make sure you have a great time. On each event page, you’ll find:
      </p>
      
        <br/>

      <section className="concert-info-list">
        <ul>
            <li>A short description of the performer or band;</li>
            <li>The date and time of the concert;</li>
            <li>Available seats at the venue;</li>
            <li>Ticket prices;</li>
            <li>Information about the organizer;</li>
            <li>Payment and purchase options so you can choose the most convenient one.</li>
        </ul>
       </section>
    </section>
  );
}