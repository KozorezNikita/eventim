import { useState, useRef, useEffect } from "react";
import "./CustomDatePicker.css";

const months = [
  "Січень","Лютий","Березень","Квітень","Травень","Червень",
  "Липень","Серпень","Вересень","Жовтень","Листопад","Грудень"
];

export default function CustomDatePicker() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [open, setOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const wrapperRef = useRef();

  const toggleCalendar = () => setOpen(!open);

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else setCurrentMonth(currentMonth - 1);
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else setCurrentMonth(currentMonth + 1);
  };

  const handleDateClick = (day) => {
    setSelectedDate(new Date(currentYear, currentMonth, day));
    setOpen(false);
  };

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDay = new Date(currentYear, currentMonth, 1).getDay();

  const dates = [];
  for (let i = 0; i < firstDay; i++) dates.push(null);
  for (let i = 1; i <= daysInMonth; i++) dates.push(i);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="datepicker-wrapper" ref={wrapperRef}>
      <div className="custom-input" onClick={toggleCalendar}>
        {/* Ліва іконка календаря */}
        <span className="calendar-icon-left">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#282828" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
        </span>

        <span className="date-text">
          {selectedDate
            ? `${selectedDate.getDate()}.${selectedDate.getMonth()+1}.${selectedDate.getFullYear()}`
            : "Datum"}
        </span>

        {/* Права стрілка */}
        <span className={`arrow-icon ${open ? 'open' : ''}`}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#282828" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </span>
      </div>

      {open && (
        <div className="custom-calendar">
          <div className="datepicker-header">
            <button className="nav-arrow" onClick={handlePrevMonth}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D31F37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>

            <span className="current-month">{months[currentMonth]} {currentYear}</span>

            <button className="nav-arrow" onClick={handleNextMonth}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D31F37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 6 15 12 9 18"></polyline>
              </svg>
            </button>
          </div>

          <div className="weekday-row">
            {["Нд","Пн","Вт","Ср","Чт","Пт","Сб"].map(d => <div key={d} className="weekday">{d}</div>)}
          </div>

          <div className="dates-grid">
            {dates.map((d, idx) => (
              <div
                key={idx}
                className={`date-cell ${
                  selectedDate &&
                  d === selectedDate.getDate() &&
                  currentMonth === selectedDate.getMonth() &&
                  currentYear === selectedDate.getFullYear() ? 'selected' : ''
                }`}
                onClick={() => d && handleDateClick(d)}
              >
                {d}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
