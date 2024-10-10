// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import AppWrapper from "./App"; // Import AppWrapper for routing setup
import "./index.css"; // Keep this line for global styles

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);
