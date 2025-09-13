// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout.jsx";
import LandingPage from "./components/Landingpage/Landingpage.jsx";
import Events from "./components/Events/Events.jsx";
import Leaderboard from "./components/Leaderboard/Leaderboard.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Faq from "./components/Faq/Faq.jsx";
import EventDetails from "./components/EventDetails/Details.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Single parent route that renders Layout and children */}
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="about" element={<About />} />
          <Route path="events" element={<Events />} />
          <Route path="leaderboard" element={<Leaderboard />} />
          <Route path="contact" element={<Contact />} />
          <Route path="faq" element={<Faq />} />

          {/* Dynamic event details route (must match Links/navigation) */}
          <Route path="event-details/:id" element={<EventDetails />} />

          {/* catch-all 404 (optional) */}
          <Route path="*" element={<div style={{padding:40}}>404 — page not found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
