import { useState, useEffect } from "react";
import axios from "axios";
import { API_BASE_URL } from "../config/config"; // імпорт константи
import PopularSlider from "../components/PopularSlider/PopularSlider";
import Header from "../components/Header/Header";
import FindBlock from "../components/FindBlock/FindBlock";
import ConcertList from "../components/ConcertList/ConcertList";
import InfoBlock from "../components/InfoBlock/InfoBlock";
import NavFoot from "../components/Navfoot/Navfoot";
import Contacts from "../components/Contacts/Contacts";
import FooterBottom from "../components/FooterBottom/FooterBottom";
import LogoBlock from "../components/LogoBlock/LogoBlock";

export default function MainPage() {
  const [concerts, setConcerts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchConcerts = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/concerts`);
        setConcerts(response.data);
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
      <FindBlock concerts={concerts} />
      <PopularSlider slides={concerts.slice(0, 5)} />
      <ConcertList eventsData={concerts} />
      {/*<LogoBlock />*/}
      {/*} <InfoBlock />*/}
      {/*<NavFoot />*/}
      {/*<Contacts />*/}
      {/*<FooterBottom />*/}
    </div>
  );
}