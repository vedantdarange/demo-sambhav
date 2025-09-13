// src/components/Layout/Layout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar.jsx";
import "./Layout.css";

export default function Layout() {
  return (
    <>
      <Navbar />
      <main className="layout-main">
        <div className="container">
          {/* Child routes will render here */}
          <Outlet />
        </div>
      </main>
      {/* optional footer */}
    </>
  );
}
