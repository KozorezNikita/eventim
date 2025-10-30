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
    picture: "",
    gumroad: ""
  });

  const [authenticated, setAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const PASSWORD = "gumroadpass";

  const [concerts, setConcerts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [editingId, setEditingId] = useState(null); // <--- ID концерту, який редагується

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
    setArtistData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = async () => {
    setLoading(true);
    setMessage("");

    try {
      const method = editingId ? "PUT" : "POST";
      const url = editingId
        ? `${API_BASE_URL}/api/concerts/${editingId}`
        : `${API_BASE_URL}/api/concerts`;

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(artistData),
      });

      if (!response.ok) throw new Error(`Error: ${response.status}`);
      const data = await response.json();

      if (editingId) {
        // 🔄 Оновлюємо концерт у списку
        setConcerts((prev) =>
          prev.map((c) => (c.id === editingId ? data : c))
        );
        setMessage("Concert updated successfully!");
      } else {
        // ➕ Додаємо новий концерт
        setConcerts((prev) => [...prev, data]);
        setMessage("Concert saved successfully!");
      }

      // 🔁 Скидаємо форму
      setArtistData({
        name: "",
        country: "",
        location: "",
        date: "",
        price: "",
        picture: "",
        gumroad: "",
      });
      setEditingId(null);
    } catch (err) {
      console.error(err);
      setMessage("Failed to save concert.");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (concert) => {
    setArtistData({
      name: concert.name,
      country: concert.country,
      location: concert.location,
      date: concert.date,
      price: concert.price,
      picture: concert.picture,
      gumroad: concert.gumroad,
    });
    setEditingId(concert.id);
    window.scrollTo({ top: 0, behavior: "smooth" }); // прокрутка до форми
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this concert?")) return;

    try {
      const res = await fetch(`${API_BASE_URL}/api/concerts/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to delete concert");

      setConcerts((prev) => prev.filter((c) => c.id !== id));
      setMessage("Concert deleted successfully!");
    } catch (err) {
      console.error(err);
      setMessage("Failed to delete concert.");
    }
  };

  if (!authenticated) {
    return (
      <div className="password-protect">
        <h2>Enter password to access Manager Dashboard</h2>
        <input
          type="text"
          value={passwordInput}
          onChange={(e) => setPasswordInput(e.target.value)}
          placeholder="Password"
        />
        <button
          onClick={() => {
            if (passwordInput === PASSWORD) {
              setAuthenticated(true);
            } else {
              alert("Incorrect password");
            }
          }}
        >
          Enter
        </button>
      </div>
    );
  }

  return (
    <div className="manager-dashboard">
      <h2>MANAGER’S DASHBOARD</h2>

      <div className="dashboard-form">
        {/* Фото артиста */}
        <div className="photo-section">
          <img
            src={
              artistData.picture ||
              "https://cdn-icons-png.flaticon.com/512/847/847969.png"
            }
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
          <input
            type="text"
            placeholder="Gumroad URL"
            value={artistData.gumroad}
            onChange={(e) => handleChange("gumroad", e.target.value)}
          />
        </div>

        {/* Кнопки дій */}
        <div className="actions">
          <button className="save-btn" onClick={handleSave} disabled={loading}>
            {loading
              ? "Saving..."
              : editingId
              ? "Update Concert"
              : "Save Concert"}
          </button>

          {editingId && (
            <button
              className="cancel-btn"
              onClick={() => {
                setArtistData({
                  name: "",
                  country: "",
                  location: "",
                  date: "",
                  price: "",
                  picture: "",
                  gumroad: "",
                });
                setEditingId(null);
              }}
            >
              Cancel Edit
            </button>
          )}
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
              <a href={concert.gumroad} target="_blank" rel="noreferrer">
                {concert.gumroad}
              </a>
            </div>
            <div className="concert-actions">
              <button className="edit-btn" onClick={() => handleEdit(concert)}>Edit</button>
              <button className="delete-btn" onClick={() => handleDelete(concert.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
