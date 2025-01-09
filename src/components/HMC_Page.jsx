import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import "../styles/SubscriptionPage.css"; // Updated CSS file with unique classnames
import logo from '../assets/immunifyLOGO.jpeg';

const data = [
    { month: "Aug", activity: 1300 }, // August
    { month: "Sep", activity: 700 },  // September
    { month: "Oct", activity: 900 },  // October
    { month: "Nov", activity: 1000 }, // November
    { month: "Dec", activity: 1400 }, // December
    { month: "Jan", activity: 500 }   // January
  ];
  

const SubscriptionPage = () => {
  return (
    <div className="subscription-page-container">
      {/* Header Section */}
      <div className="subscription-page-header">
        <div className="subscription-header-left">
          <img src={logo} alt="Immunify Logo" className="subscription-logo" />
        </div>
        <div className="subscription-header-right">
          <h1>haryanamedicalcouncil.org</h1>
          <a href="https://haryanamedicalcouncil.org" target="_blank" rel="noopener noreferrer">
            Visit Site
          </a>
        </div>
      </div>

      {/* Subscription Info Section */}
      <div className="subscription-page-info">
        <h2>Subscription Info</h2>
        <ul>
          <li>Status: <span className="subscription-status active" style={{color:'green'}}>Active</span></li>
          <li>Disk Space: 460.8 MB</li>
          <li>Traffic This Month: 13,058.3 MB</li>
        </ul>
      </div>

      {/* Monthly Activity Summary */}
      <div className="subscription-page-activity-summary">
        <h2>Monthly Activity Summary</h2>
        <div className="subscription-activity-graph">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="activity" stroke="#01a860" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPage;
