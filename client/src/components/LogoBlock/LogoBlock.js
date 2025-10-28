import React from "react";
import logo1 from "../../assets/logo.svg";
import visa from "../../assets/visa.png";
import dzbank from "../../assets/dzbank.png";
import mastercard from "../../assets/mastercard.png";
import ticketmaster from "../../assets/ticketmaster.png";
import commerzbank from "../../assets/commerzbank.png";
import './LogoBlock.css';

const logos = [logo1, visa, dzbank, mastercard, ticketmaster, commerzbank];

export default function LogoBlock() {
  return (
    <div className="logo-block">
      {logos.map((logo, index) => (
        <div className="logo-item" key={index}>
          <img src={logo} alt={`logo-${index}`} className="logo-img" />
        </div>
      ))}
    </div>
  );
}