import { Routes, Route } from "react-router-dom";
import MainPage from "../pages/MainPage";
import About from "../pages/About";
import ConcertPage from "../pages/ConcertPage";
import Cart from "../pages/Cart";
import ManagerDashboard from "../pages/ManagerDashboard";

function AppRouter() {
  return (
    <Routes>
      {/* Головна сторінка */}
      <Route path="/" element={<MainPage />} />

      <Route path="/concerts/:id" element={<ConcertPage />} />
      
      <Route path="/about" element={<About />} />
      
      <Route path="/cart" element={<Cart />} />

      <Route path="/managerDashboard" element={<ManagerDashboard />} />

    </Routes>
  );
}

export default AppRouter;