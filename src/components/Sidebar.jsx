import React, { useState } from 'react';
import '../styles/Sidebar.css';

const Sidebar = ({ onPageChange }) => {
    const [isDomainsExpanded, setIsDomainsExpanded] = useState(false);

    const toggleDomains = () => {
        setIsDomainsExpanded(!isDomainsExpanded);
    };

    return (
        <div>
            <aside className="sidebar">
                <ul>
                    <li className="menu-item" onClick={() => onPageChange('dashboard')}>Dashboard</li>
                    <li className="menu-item" onClick={() => onPageChange('firewallRules')}>Firewall Rules</li>
                    <li className="menu-item" onClick={() => onPageChange('newDomain')}>New Domain</li>
                    <li className="menu-item mydomains">
                        <div className="expandable" onClick={() => { onPageChange('myDomains'); toggleDomains(); }}>
                            <span>My Domains</span>
                            <button className="expand-button">
                                {isDomainsExpanded ? '▲' : '▼'}
                            </button>
                        </div>
                        {isDomainsExpanded && (
                            <ul className="submenu">
                                <li className="submenu-item" onClick={() => onPageChange('DelhiSubscriptionPage')}>delhimedicalcouncil.org</li>
                                <li className="submenu-item">dmconline.org</li>
                                <li className="submenu-item">dcptop.com</li>
                                <li className="submenu-item" onClick={() => onPageChange('haryanamedicalcouncil.org')}>haryanamedicalcouncil.org</li>
                                <li className="submenu-item" >delhipharmacycouncil.in</li>
                                <li className="submenu-item">greenjobsindia.in</li>
                                <li className="submenu-item">northpole.finance</li>
                                <li className="submenu-item">vision360.co.in</li>
                                <li className="submenu-item">carbongo.io</li>
                                <li className="submenu-item">brsrnext.io</li>
                            </ul>
                        )}
                    </li>
                    <li className="menu-item" onClick={() => onPageChange('BlacklistedIPs')}>Blacklisted IPs</li>
                    <li className="menu-item" onClick={() => onPageChange('activityLogs')}>Activity Logs</li>
                    <li className="menu-item" onClick={() => onPageChange('settings')}>Settings</li>
                    <li className="menu-item" onClick={() => onPageChange('billing')}>Billing</li>
                </ul>
            </aside>
        </div>
    );
};

export default Sidebar;
