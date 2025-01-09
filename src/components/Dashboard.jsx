import React, { useState } from 'react';
import '../styles/Dashboard.css';
import Header from './Header';
import Sidebar from './Sidebar';
import DashboardReal from './DashboardReal';
import FirewallRules from './Firewall';
import NewDomain from './NewDomain';
// import MyDomains from './MyDomains';
import BlacklistedIPs from './BlacklistedIPs';
import ActivityLog from './ActivityLog';
import Settings from './Settings';
import Billing from './Billing';

function App() {
    // State for controlling which component is rendered
    const [currentPage, setCurrentPage] = useState('dashboard'); // Default to 'dashboard'

    // Toggle the current page to the selected section
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    // Determine which component to render based on currentPage
    const renderComponent = () => {
        switch (currentPage) {
            case 'newDomain':
                return <NewDomain />;
            case 'BlacklistedIPs':
                return <BlacklistedIPs />;
            case 'billing':
                return <Billing />;
            case 'settings':
                return <Settings />;
            case 'firewallRules':
                return <FirewallRules />;
            case 'activityLogs':
                return <ActivityLog />;
            default:
                return <DashboardReal />; // Default to DashboardReal
        }
    };


    return (
        <div className="App">
            {/* Header */}
            <Header />

            {/* Main Content */}
            <div className="content">
                <Sidebar onPageChange={handlePageChange} />

                {/* Main Body */}
                <main className="main-body">
                    {renderComponent()}
                </main>
            </div>
        </div>
    );
}

export default App;






