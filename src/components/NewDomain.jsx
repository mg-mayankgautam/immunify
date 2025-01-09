import React, { useState } from "react";
import "../styles/AddDomain.css";

const AddDomain = () => {
    const [formData, setFormData] = useState({
        domainName: "",
        ipAddress: "",
        adminEmail: "",
        sslCertificate: "yes",
        hostingProvider: "",
        serverLocation: "",
        serverPort: "",
        dnsProvider: "",
        dailyBackup: "no",
        malwareScanning: "yes",
        threatLevel: "",
        securityRules: "",
        trafficLimit: "",
        httpVersion: "HTTP/2",
        enableFirewall: "yes",
        firewallLevel: "",
        analyticsEnabled: "no",
        loadBalancing: "yes",
        databaseType: "",
        databaseHost: "",
        databasePort: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
        // Add further actions here (API call, etc.)
    };

    return (
        <div className="add-domain-container">
            <h2 className="form-header">Add New Domain</h2>
            <form className="add-domain-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Domain Name</label>
                    <input
                        type="text"
                        name="domainName"
                        value={formData.domainName}
                        onChange={handleChange}
                        placeholder="Enter domain name (e.g., example.com)"
                        required
                    />
                </div>
                <div className="form-group">
                    <label>IP Address</label>
                    <input
                        type="text"
                        name="ipAddress"
                        value={formData.ipAddress}
                        onChange={handleChange}
                        placeholder="Enter IP address"
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Admin Email</label>
                    <input
                        type="email"
                        name="adminEmail"
                        value={formData.adminEmail}
                        onChange={handleChange}
                        placeholder="Enter admin email"
                        required
                    />
                </div>
                <div className="form-group">
                    <label>SSL Certificate</label>
                    <div className="radio-group">
                        <label>
                            <input
                                type="radio"
                                name="sslCertificate"
                                value="yes"
                                checked={formData.sslCertificate === "yes"}
                                onChange={handleChange}
                            />
                            Yes
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="sslCertificate"
                                value="no"
                                checked={formData.sslCertificate === "no"}
                                onChange={handleChange}
                            />
                            No
                        </label>
                    </div>
                </div>
                <div className="form-group">
                    <label>Hosting Provider</label>
                    <select
                        name="hostingProvider"
                        value={formData.hostingProvider}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select provider</option>
                        <option value="AWS">AWS</option>
                        <option value="Google Cloud">Google Cloud</option>
                        <option value="Azure">Azure</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Server Location</label>
                    <input
                        type="text"
                        name="serverLocation"
                        value={formData.serverLocation}
                        onChange={handleChange}
                        placeholder="Enter server location (e.g., USA, Europe)"
                    />
                </div>
                <div className="form-group">
                    <label>Server Port</label>
                    <input
                        type="number"
                        name="serverPort"
                        value={formData.serverPort}
                        onChange={handleChange}
                        placeholder="Enter server port (e.g., 443)"
                    />
                </div>
                <div className="form-group">
                    <label>DNS Provider</label>
                    <input
                        type="text"
                        name="dnsProvider"
                        value={formData.dnsProvider}
                        onChange={handleChange}
                        placeholder="Enter DNS provider"
                    />
                </div>
                <div className="form-group">
                    <label>Daily Backup</label>
                    <div className="radio-group">
                        <label>
                            <input
                                type="radio"
                                name="dailyBackup"
                                value="yes"
                                checked={formData.dailyBackup === "yes"}
                                onChange={handleChange}
                            />
                            Yes
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="dailyBackup"
                                value="no"
                                checked={formData.dailyBackup === "no"}
                                onChange={handleChange}
                            />
                            No
                        </label>
                    </div>
                </div>
                <div className="form-group">
                    <label>Threat Level</label>
                    <select
                        name="threatLevel"
                        value={formData.threatLevel}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select threat level</option>
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>
                </div>
                <button type="submit" className="submit-button">
                    Add Domain
                </button>
            </form>
        </div>
    );
};

export default AddDomain;
