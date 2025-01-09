import React, { useState } from "react";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import './App.css'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="app">
      {isLoggedIn ? (
        <Dashboard />
      ) : (
        <Login onLogin={() => setIsLoggedIn(true)} />
      )}
    </div>
  );
};

export default App;
