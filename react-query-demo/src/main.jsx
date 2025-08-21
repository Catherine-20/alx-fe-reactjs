import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";        // matches src/App.jsx exactly
import "./index.css";           // matches src/index.css exactly

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
