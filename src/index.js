import React from "react";
import ReactDOM from "react-dom/client"; // Import the correct module
import App from "./App";
import "./styles/Login.css"; // General styles
import "./index.css"; // General styles

// Create a root and render the App
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
