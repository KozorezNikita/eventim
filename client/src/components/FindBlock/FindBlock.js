import CustomSelect from "../CustomSelect/CustomSelect";
import CustomDatePicker from "../DatePicker/CustomDatePicker";
import "./FindBlock.css";

export default function FindBlock({ concerts }) {
  // Отримуємо унікальні міста з масиву концертів
  const locations = [
    "All locations",
    ...Array.from(new Set(concerts.map((c) => c.country)))
  ];

  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="search-box">

          {/* 📅 DatePicker */}
          <div className="date-wrapper search-field">
            <CustomDatePicker />
          </div>

          {/* 🎵 Жанр */}
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#282828"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 18V5l12-2v13" />
                  <circle cx="6" cy="18" r="3" />
                  <circle cx="18" cy="16" r="3" />
                </svg>
              }
            />
          </div>

          {/* 📍 Локація */}
          <div className="search-field">
            <CustomSelect
              options={locations}
              placeholder="Ort"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#282828"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              }
            />
          </div>

          {/* 🔎 Кнопка */}
          <button>Ticket finden</button>
        </div>
      </div>
    </section>
  );
}