import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import MedicationSchedule from "./pages/MedicationSchedule";
import Reminders from "./pages/Reminders";
import PharmacyFinder from "./pages/PharmacyFinder";
import DarkModeToggle from "./components/DarkModeToggle";
import "tailwindcss/tailwind.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={
        darkMode ? "dark bg-gray-900 text-white" : "bg-gray-100 text-black"
      }
    >
      <Router>
        <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add-medication" element={<MedicationSchedule />} />
          <Route path="/reminders" element={<Reminders />} />
          <Route path="/pharmacy-finder" element={<PharmacyFinder />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
