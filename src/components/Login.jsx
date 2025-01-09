import React, { useState } from "react";
import "../styles/Login.css";
import logo from '../assets/immunifyLOGO.jpeg'

const Login = ({ onLogin }) => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const storedId = "admin";
    const storedPassword = "pass123";

    if (id === storedId && password === storedPassword) {
      onLogin();
    } else {
      alert("Invalid ID or Password!");
    }
  };

  return (
    <div className="login-container">

      <div style={{
        backgroundColor: "#fff",
        border: "0.5px solid rgba(0, 0, 0, 0.2)",
        borderRadius: "6px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "40px 32px",
      }}>
        {/* <img
          src={logo}
          alt="Immunify Logo"
          className="loginlogo"
        /> */}

        <h1 className="login-title">Secure Panel</h1>
        <h1 className="login-title">Secure Panel</h1>
        <form
          className="login-form"
          onSubmit={(e) => {
            e.preventDefault(); // Prevent the default form submission behavior
            handleLogin();
          }}
        >
          <input
            type="text"
            placeholder="Enter ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="login-input"
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
          />
          <button type="submit" className="login-button">
            Login
          </button>
        </form>

        <ul class="login-links">
          <li><a href="#"><span class="icon">❓</span> What username and password to use?</a></li>
          <li><a href="#"><span class="icon">🔒</span> Forgot your password?</a></li>
          <li><a href="#"><span class="icon">🌐</span> Cookies policy in Plesk</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Login;
