import React from 'react'
import logo from '../assets/immunifyLOGO.jpeg'
import ehslogo from '../assets/ehssasLogo.png'
import '../styles/Header.css';


const Header = () => {
    return (
        <header className="header">
            {/* Logo Section */}
            <div className="header-left">
                <img
                    src={logo}
                    alt="Immunify Logo"
                    className="logo"
                />
            </div>

            {/* Title Section */}
            <div className="header-center">
                <h1>Server Management Panel</h1>
            </div>

            {/* Account Section */}
            <div className="header-right">
                <div className="account">
                    <img
                        src={ehslogo}
                        alt="Client Logo"
                        className="account-logo"
                    />
                    <span>Ehssas Digitech</span>
                    <div className="dropdown">
                        <button className="dropdown-button">▼</button>
                        <div className="dropdown-menu">
                            <a href="/profile">Profile</a>
                            <a href="/settings">Settings</a>
                            <a href="/logout">Logout</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
