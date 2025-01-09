import React, { useState, useEffect } from 'react';
import '../styles/ActivityLog.css';
import generateRandomCode from '../functions/generateRandomCode';

const ActivityLog = () => {
  const [liveScan, setLiveScan] = useState([]);
  const [kpis, setKpis] = useState({
    attacksBlocked: 1200,
    suspiciousIps: 340,
    blacklistedIps: 78,
    serverHealth: 'Good',
  });

  // Simulate live code scanner
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveScan((prev) => [
        ...prev,
        `Scanning line ${prev.length + 1}: ${
          Math.random() > 0.8 ? 'Vulnerability Found!' : 'No Issues Detected'
        }`,
      ].slice(-10)); // Keep only the last 10 lines
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveScan((prev) => [
        ...prev,
        `Scanning: ${generateRandomCode()}`,
      ].slice(-10));
    }, 200); // Faster updates (200ms)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="activity-log">
      <header>
        <h1>Activity Logs</h1>
      </header>

      {/* KPI Cards */}
      <div className="kpi-cards">
        <div className="kpi-card">
          <h3>Attacks Blocked</h3>
          <p>{kpis.attacksBlocked}</p>
        </div>
        <div className="kpi-card">
          <h3>Suspicious IPs</h3>
          <p>{kpis.suspiciousIps}</p>
        </div>
        <div className="kpi-card">
          <h3>Blacklisted IPs</h3>
          <p>{kpis.blacklistedIps}</p>
        </div>
        <div className="kpi-card">
          <h3>Server Health</h3>
          <p>{kpis.serverHealth}</p>
        </div>
      </div>

      {/* Live Scanner */}
      <div className="live-scanner">
        <h2>Live Malware Scan</h2>
        <div className="scanner-output">
          {liveScan.map((line, index) => (
            <pre key={index} className="code-line">
              {line}
            </pre>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivityLog;
