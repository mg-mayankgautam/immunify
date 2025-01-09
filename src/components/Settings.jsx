import React from 'react';
import '../styles/Settings.css';
import { FaUserShield, FaLock, FaServer, FaDatabase, FaCloud, FaShieldAlt, FaBell, FaKey, FaBug, FaNetworkWired, FaTools, FaSync, FaLanguage } from 'react-icons/fa';

const SettingsPage = () => {
  const settingsData = [
    {
      title: "Account Settings",
      icon: <FaUserShield />,
      options: [
        "Change Password",
        "Manage Two-Factor Authentication",
        "Update Security Questions",
        "Email Notification Preferences",
        "Login Session Timeout",
      ],
    },
    {
      title: "Server Configuration",
      icon: <FaServer />,
      options: [
        "Database Connection Settings",
        "Network Throttling",
        "Enable Auto-Scaling",
        "Scheduled Backups",
        "Cloud Storage Preferences",
      ],
    },
    {
      title: "Security Settings",
      icon: <FaShieldAlt />,
      options: [
        "Firewall Rules",
        "Malware Scanning",
        "Intrusion Alerts",
        "DDoS Protection",
        "Encryption Standards",
      ],
    },
    {
      title: "Application Settings",
      icon: <FaTools />,
      options: [
        "Update Frequency",
        "Data Retention Policy",
        "API Access Control",
        "Error Reporting",
        "Debug Mode",
      ],
    },
    {
      title: "General Preferences",
      icon: <FaLanguage />,
      options: [
        "Language Settings",
        "Notification Sounds",
        "Dark Mode",
        "Timezone Configuration",
        "Clear Cache",
      ],
    },
    {
      title: "Monitoring Settings",
      icon: <FaBug />,
      options: [
        "Set Monitoring Intervals",
        "Custom Alert Thresholds",
        "Resource Utilization Reports",
        "Enable Log Archiving",
        "Threat Management Logs",
      ],
    },
  ];

  return (
    <div className="settings-page">
      <h1>Settings</h1>
      <div className="settings-grid">
        {settingsData.map((category, index) => (
          <div key={index} className="settings-card">
            <h2>
              {category.icon} {category.title}
            </h2>
            <ul>
              {category.options.map((option, idx) => (
                <li key={idx}>{option}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SettingsPage;
