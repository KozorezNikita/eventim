import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./PopularSlider.css";
import { FiCalendar, FiDollarSign } from "react-icons/fi";
import { FaCoins } from "react-icons/fa";

function PopularSlider({ slides }) {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);
  const navigate = useNavigate();

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length);
    }, 4000);
  };

  useEffect(() => {
    if (slides && slides.length > 0) {
      resetTimer();
    }
    return () => clearInterval(timerRef.current);
  }, [slides]);

  const handlePrev = () => {
    if (!slides || slides.length === 0) return;
    setCurrent(prev => (prev - 1 + slides.length) % slides.length);
    resetTimer();
  };

  const handleNext = () => {
    if (!slides || slides.length === 0) return;
    setCurrent(prev => (prev + 1) % slides.length);
    resetTimer();
  };

  // Навігація на сторінку товару
  const handleBuy = (slide) => {
    // Припустимо, що у slide є унікальний id або slug
    navigate(`/concerts/${slide.id || slide.slug}`);
  };

  return (
    <section className="popular">
      <h2 className="popular-title">
        <span className="dot"></span> AM BELIEBTESTEN
      </h2>

      <div className="slider">
        {slides.map((slide, index) => (
          <div
            className={`slide ${index === current ? "active" : ""}`}
            key={index}
          >
            <div className="popular-card" style={{ "--bg-img": `url(${slide.picture})` }}>
              <div className="popular-info">
                <div className="info-top">
                  <h3>{slide.name}</h3>
                  <p>{slide.country}</p>
                  <p> {slide.location}</p>
                </div>

                <div className="info-bottom">
                  <div className="details">
                    <p className="date"><FiCalendar /> {slide.date}</p>
                    <p className="price"><FaCoins />  €{slide.price}</p>
                  </div>
                  <button className="buy-btn" onClick={() => handleBuy(slide)}>
                    Tickets kaufen
                  </button>
                </div>
              </div>
              <div className="popular-image">
                <img src={slide.picture} alt={slide.title} />
              </div>
            </div>
          </div>
        ))}

        <div className="controls">
          <button className="prev" onClick={handlePrev}>‹</button>
          <button className="next" onClick={handleNext}>›</button>
        </div>
      </div>
    </section>
  );
}

export default PopularSlider;
