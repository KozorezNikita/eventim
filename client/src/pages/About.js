import React from "react";
import CustomSelect from "../components/CustomSelect/CustomSelect";
import CustomDatePicker from "../components/DatePicker/CustomDatePicker";
import PopularSlider from "../components/PopularSlider/PopularSlider";
import { useCart } from "../context/CartContext";


function About() {
  const { cartItems } = useCart(); // отримуємо товари з контексту

  return (
    <div className="about-page">
      <p>This is my project</p>

      <CustomDatePicker />

      <CustomSelect 
        options={[
          "All genres",
          "Rock",
          "Pop",
          "Jazz",
          "Hip-Hop",
          "Electronic",
          "Classical",
        ]}
        placeholder="Select genre" 
      />

      {/* Блок з товарами з кошика */}
      <div className="about-cart">
        <h2>Товари з кошика:</h2>
        {cartItems.length === 0 ? (
          <p>Кошик порожній</p>
        ) : (
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                {item.type} — {item.count} шт — ${item.totalPrice}
              </li>
            ))}
          </ul>
        )}
      </div>

     
    </div>
  );
}

export default About;
