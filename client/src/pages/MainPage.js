import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { API_BASE_URL } from "../config/config";
import PopularSlider from "../components/PopularSlider/PopularSlider";
import Header from "../components/Header/Header";
import FindBlock from "../components/FindBlock/FindBlock";
import ConcertList from "../components/ConcertList/ConcertList";

export default function MainPage() {
  const [concerts, setConcerts] = useState([]);
  const [filteredConcerts, setFilteredConcerts] = useState([]);
  const [error, setError] = useState(null);

  const concertListRef = useRef(null); // ← новий реф

  useEffect(() => {
    const fetchConcerts = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/concerts`);
        setConcerts(response.data);
        setFilteredConcerts(response.data);
      } catch (err) {
        console.error("Error fetching concerts:", err);
        setError(err);
      }
    };

    fetchConcerts();
  }, []);

  if (error) return <p>Error loading concerts</p>;

  return (
    <div className="page">
      <FindBlock
        concerts={concerts}
        onFilter={(filtered, scrollToConcerts = false) => {
          setFilteredConcerts(filtered);
          if (scrollToConcerts && concertListRef.current) {
            concertListRef.current.scrollIntoView({ behavior: "smooth" });
          }
        }}
      />
      <PopularSlider slides={concerts.slice(0, 5)} />
      <div ref={concertListRef}>
        <ConcertList eventsData={filteredConcerts} />
      </div>
    </div>
  );
}
