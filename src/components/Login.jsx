import React, { useState } from "react";
import "../styles/Login.css";

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
  </div>
  );
};

export default Login;
