import { useState } from "react";
import "./App.css";
import AppRouter from "./router/router";
import Header from "./components/Header/Header";
import { CartProvider } from "./context/CartContext";
import FooterBottom from "./components/FooterBottom/FooterBottom";
import Contacts from "./components/Contacts/Contacts";
import LogoBlock from "./components/LogoBlock/LogoBlock";



function App() {
  return (
    <>
      <Header />
      <AppRouter />
      <LogoBlock />
      <Contacts />
      <FooterBottom />
    </>
  );
}

export default App;

