import CustomSelect from "../CustomSelect/CustomSelect";
import CustomDatePicker from "../DatePicker/CustomDatePicker";
import "./FindBlock.css";

export default function FindBlock() {
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
              placeholder="Select genre"
            />
          </div>

          {/* 📍 Локація */}
          <div className="search-field">
            <CustomSelect
              options={[
                "All locations",
                "Warszawa",
                "Kraków",
                "Gdańsk",
                "Wrocław",
              ]}
              placeholder="Select location"
            />
          </div>

          {/* 🔎 Кнопка */}
          <button>Find Ticket</button>
        </div>
      </div>
    </section>
  );
}
