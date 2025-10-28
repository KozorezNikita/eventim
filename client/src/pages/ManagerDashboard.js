import { useState, useEffect } from "react";
import { API_BASE_URL } from "../config/config";
import "./ManagerDashboard.css";

export default function ManagerDashboard() {
  const [artistData, setArtistData] = useState({
    name: "",
    country: "",
    location: "",
    date: "",
    price: "",
    picture: ""
  });

  const [concerts, setConcerts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Fetch concerts on mount
  useEffect(() => {
    const fetchConcerts = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/concerts`);
        const data = await res.json();
        setConcerts(data);
      } catch (err) {
        console.error("Error fetching concerts:", err);
      }
    };
    fetchConcerts();
  }, []);

  const handleChange = (field, value) => {
    setArtistData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = async () => {
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch(`${API_BASE_URL}/api/concerts`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(artistData)
      });

      if (!response.ok) throw new Error(`Error: ${response.status}`);
      const data = await response.json();

      // Add new concert to list
      setConcerts(prev => [...prev, data]);

      // Reset form
      setArtistData({
        name: "",
        country: "",
        location: "",
        date: "",
        price: "",
        picture: ""
      });

      setMessage("Concert saved successfully!");
    } catch (err) {
      console.error(err);
      setMessage("Failed to save concert.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this concert?")) return;

    try {
      const res = await fetch(`${API_BASE_URL}/api/concerts/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete concert");

      setConcerts(prev => prev.filter(c => c.id !== id));
      setMessage("Concert deleted successfully!");
    } catch (err) {
      console.error(err);
      setMessage("Failed to delete concert.");
    }
  };

  return (
    <div className="manager-dashboard">
      <h2>MANAGER’S DASHBOARD</h2>

      <div className="dashboard-form">
        {/* Фото артиста */}
        <div className="photo-section">
          <img
            src={artistData.picture || "https://thenounproject.com/icon/1093117/"}
            alt={artistData.name || "Artist"}
          />
          <input
            type="text"
            placeholder="Photo URL"
            value={artistData.picture}
            onChange={(e) => handleChange("picture", e.target.value)}
          />
        </div>

        {/* Основні дані артиста */}
        <div className="artist-info">
          <input
            type="text"
            placeholder="Artist Name"
            value={artistData.name}
            onChange={(e) => handleChange("name", e.target.value)}
          />
          <input
            type="text"
            placeholder="Country"
            value={artistData.country}
            onChange={(e) => handleChange("country", e.target.value)}
          />
          <input
            type="text"
            placeholder="Location / Venue"
            value={artistData.location}
            onChange={(e) => handleChange("location", e.target.value)}
          />
          <input
            type="date"
            placeholder="Date"
            value={artistData.date}
            onChange={(e) => handleChange("date", e.target.value)}
          />
          <input
            type="number"
            placeholder="Price (€)"
            value={artistData.price}
            onChange={(e) => handleChange("price", e.target.value)}
          />
        </div>

        {/* Кнопка збереження */}
        <div className="actions">
          <button className="save-btn" onClick={handleSave} disabled={loading}>
            {loading ? "Saving..." : "Save"}
          </button>
        </div>
        {message && <p className="message">{message}</p>}
      </div>

      {/* Список концертів */}
      <div className="concert-list">
        {concerts.map((concert) => (
          <div key={concert.id} className="concert-item">
            <img src={concert.picture} alt={concert.name} />
            <div className="concert-info">
              <p><strong>{concert.name}</strong></p>
              <p>{concert.location}, {concert.country}</p>
              <p>{concert.date} — €{concert.price}</p>
            </div>
            <button className="delete-btn" onClick={() => handleDelete(concert.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
