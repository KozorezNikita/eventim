import { useState } from "react";
import CustomSelect from "../CustomSelect/CustomSelect";
import CustomDatePicker from "../DatePicker/CustomDatePicker";
import "./FindBlock.css";

export default function FindBlock({ concerts, onFilter }) {
  const [activeFilter, setActiveFilter] = useState(null); // 'date' | 'location' | 'genre'
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedGenre, setSelectedGenre] = useState(null);

  const locations = ["All locations", ...Array.from(new Set(concerts.map(c => c.country)))];
  const genres = ["All genres", ...Array.from(new Set(concerts.map(c => c.artist)))];
  const concertDates = concerts.map(c => c.date);

  const handleSearchClick = () => {
    let filtered = concerts;

    if (activeFilter === "date" && selectedDate) {
      filtered = concerts.filter(c => {
        const concertDate = new Date(c.date);
        return (
          concertDate.getFullYear() === selectedDate.getFullYear() &&
          concertDate.getMonth() === selectedDate.getMonth() &&
          concertDate.getDate() === selectedDate.getDate()
        );
      });
    } else if (activeFilter === "location" && selectedLocation && selectedLocation !== "All locations") {
      filtered = concerts.filter(c => c.country === selectedLocation);
    } else if (activeFilter === "genre" && selectedGenre && selectedGenre !== "All genres") {
      filtered = [...concerts].sort((a, b) => a.name.localeCompare(b.name));
    }

    onFilter(filtered.length ? filtered : concerts, true);
  };

  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="search-box">

          {/* DatePicker */}
          <div className="date-wrapper search-field">
            <CustomDatePicker
              highlightDates={concertDates}
              onDateChange={(date) => {
                setSelectedDate(date);
                setSelectedLocation(null);
                setSelectedGenre(null);
                setActiveFilter("date");
              }}
            />
          </div>

          {/* Жанр / Виконавець */}
          <div className="search-field">
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
              placeholder="Musikgenre"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" 
                     width="18" height="18" viewBox="0 0 24 24" fill="none" 
                     stroke="#282828" strokeWidth="2" strokeLinecap="round" 
                     strokeLinejoin="round">
                  <path d="M9 18V5l12-2v13" />
                  <circle cx="6" cy="18" r="3" />
                  <circle cx="18" cy="16" r="3" />
                </svg>
              }
              onChange={(genre) => {
                setSelectedGenre(genre);
                setSelectedDate(null);
                setSelectedLocation(null);
                setActiveFilter("genre");
              }}
            />
          </div>

          {/* Локації */}
          <div className="search-field">
            <CustomSelect
              options={locations}
              placeholder="Ort"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" 
                     width="18" height="18" viewBox="0 0 24 24" fill="none" 
                     stroke="#282828" strokeWidth="2" strokeLinecap="round" 
                     strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              }
              onChange={(location) => {
                setSelectedLocation(location);
                setSelectedDate(null);
                setSelectedGenre(null);
                setActiveFilter("location");
              }}
            />
          </div>

          {/* Кнопка */}
          <button onClick={handleSearchClick}>Ticket finden</button>
        </div>
      </div>
    </section>
  );
}
