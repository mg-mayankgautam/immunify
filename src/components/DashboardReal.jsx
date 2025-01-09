import React from 'react';
import '../styles/DashboardReal.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="top-section">
        <div className='top-section-header'>
          <h1>Server Details - Ehssas Digitech</h1>
          <p>License Number: EHSDT-2025-00123</p>
        </div>
        <div className="server-details">
          <div>
            <div className='server-details-col'>
              <p><strong>Server Name:</strong></p>
              <p>Primary Server</p>
            </div>
            <div className='server-details-col'>
              <p><strong>Location:</strong></p>
              <p>Bengaluru, India</p>
            </div>
            <div className='server-details-col'>
              <p><strong>OS:</strong></p>
              <p>Linux Ubuntu 22.04, Windows IIS 10.1</p>
            </div>
            <div className='server-details-col'>
              <p><strong>CPU Cores:</strong></p>
              <p>8</p>
            </div>
            <div className='server-details-col'>
              <p><strong>RAM:</strong></p>
              <p>16 GB (2.1 GB Free) </p>
            </div>
            <div className='server-details-col'>
              <p><strong>Disk Space:</strong></p>
              <p>1 TB SSD</p>
            </div>
            <div className='server-details-col'>
              <p><strong>Network Bandwidth:</strong></p>
              <p>1Gbps</p>
            </div>
            <div className='server-details-col'>
              <p><strong>Uptime:</strong></p>
              <p>97.99%</p>
            </div>
            <div className='server-details-col'>
              <p><strong>Last Maintenance:</strong></p>
              <p>2025-01-05</p>
            </div>
            <div className='server-details-col'>
              <p><strong>Security Updates:</strong></p>
              <p>Last  updated on 03-01-2025</p>
            </div>
          </div>
          <div>
            <div className='server-details-col'>
              <p><strong>Firewall Status:</strong></p>
              <p>Active</p>
            </div>
            <div className='server-details-col'>
              <p><strong>Threats Blocked:</strong></p>
              <p>1,245</p>
            </div>
            <div className='server-details-col'>
              <p><strong>Backup Status:</strong></p>
              <p>Active</p>
            </div>
            <div className='server-details-col'>
              <p><strong>Average Server Load:</strong></p>
              <p>35%</p>
            </div>
            <div className='server-details-col'>
              <p><strong>IP Address:</strong></p>
              <p>103.139.59.196</p>
            </div>
            <div className='server-details-col'>
              <p><strong>MAC Address:</strong></p>
              <p>00-14-22-01-23-45</p>
            </div>
            <div className='server-details-col'>
              <p><strong>SSL Status:</strong></p>
              <p>Valid</p>
            </div>
            <div className='server-details-col'>
              <p><strong>Encryption Level:</strong></p>
              <p>AES-256</p>
            </div>
            <div className='server-details-col'>
              <p><strong>Admin Contact:</strong></p>
              <p>admin@ehssasdigitech.com</p>
            </div>
            <div className='server-details-col'>
              <p><strong>Support Contact:</strong></p>
              <p>support@ehssasdigitech.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="domains-section">
        <h2>My Domains</h2>
        <table className="domains-table">
          <thead>
            <tr>
              <th>Serial No.</th>
              <th>Application/Website</th>
              <th>Domain</th>
              <th>Server Load (GB)</th>
              <th>Backup Status</th>
              <th>Technology</th>
              <th>RAM Usage</th>
              <th>Threat Level</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Delhi Medical Council</td>
              <td>delhimedicalcouncil.org</td>
              <td>20GB</td>
              <td>Active</td>
              <td>ASP .Net MVC</td>
              <td>2GB</td>
              <td>Low</td>
            </tr>
            <tr>
              <td>2</td>
              <td>DMC Online</td>
              <td>dmconline.org</td>
              <td>15GB</td>
              <td>Active</td>
              <td>ASP .Net Core</td>
              <td>1.5GB</td>
              <td>Low</td>
            </tr>
            <tr>
              <td>3</td>
              <td>DCP Top</td>
              <td>dcptop.com</td>
              <td>18GB</td>
              <td>Active</td>
              <td>MERN</td>
              <td>2.5GB</td>
              <td>Medium</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Haryana Medical Council</td>
              <td>haryanamedicalcouncil.in</td>
              <td>1.2GB</td>
              <td>Active</td>
              <td>ASP .Net MVC</td>
              <td>1GB</td>
              <td>Low</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Delhi Pharmacy Council</td>
              <td>delhipharmacycouncil.com</td>
              <td>25GB</td>
              <td>Active</td>
              <td>MERN</td>
              <td>3GB</td>
              <td>Medium</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Green Jobs India</td>
              <td>greenjobsindia.in</td>
              <td>8GB</td>
              <td>Inactive</td>
              <td>NextJS</td>
              <td>0.8GB</td>
              <td>Low</td>
            </tr>
            <tr>
              <td>7</td>
              <td>North Pole Finance</td>
              <td>northpole.finance</td>
              <td>12GB</td>
              <td>Inactive</td>
              <td>Wordpress</td>
              <td>1.2GB</td>
              <td>Medium</td>
            </tr>
            <tr>
              <td>8</td>
              <td>Vision 360</td>
              <td>vision360.co.in</td>
              <td>30GB</td>
              <td>Inactive</td>
              <td>MERN</td>
              <td>4GB</td>
              <td>High</td>
            </tr>
            <tr>
              <td>9</td>
              <td>Carbon Go</td>
              <td>carbongo.io</td>
              <td>22GB</td>
              <td>Inactive</td>
              <td>React, .Net Core</td>
              <td>3GB</td>
              <td>High</td>
            </tr>
            <tr>
              <td>10</td>
              <td>BRSR Next</td>
              <td>brsrnext.io</td>
              <td>28GB</td>
              <td>Inactive</td>
              <td>MERN</td>
              <td>3.5GB</td>
              <td>Medium</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
