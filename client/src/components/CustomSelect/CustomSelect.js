import { useState, useRef, useEffect } from "react";
import "./CustomSelect.css";

export default function CustomSelect({ options, placeholder = "Select option" }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const wrapperRef = useRef();

  const toggleOpen = () => setOpen(!open);

  const handleSelect = (opt) => {
    setSelected(opt);
    setOpen(false);
  };

  // Закриття при кліку поза селектом
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="custom-select" ref={wrapperRef}>
      <div className="select-header search-field" onClick={toggleOpen}>
        <span>{selected || placeholder}</span>
        <svg
          className={`arrow ${open ? "open" : ""}`}
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#999"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>

      {open && (
        <div className="select-options">
          {options.map((opt, i) => (
            <div
              key={i}
              className={`option ${selected === opt ? "selected" : ""}`}
              onClick={() => handleSelect(opt)}
            >
              {opt}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
