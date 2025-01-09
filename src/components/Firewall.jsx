import React from "react";
import "../styles/FlexFirewallManager.css"; // Include the styles

const FlexFirewallManager = () => {
  const rules = [
    { name: "BOT", type: "In", action: "Block", protocol: "All", ports: "All", ips: 19 },
    { name: "MSSQLSERVER", type: "In", action: "Block", protocol: "All", ports: "All", ips: 1 },
    { name: "DNS", type: "In", action: "Block", protocol: "All", ports: "All", ips: 74 },
    { name: "ASN - 394711 - Limenet - US 🇺🇸", type: "In", action: "Block", protocol: "All", ports: "All", ips: 26 },
    { name: "ASN - 209588 - Flyservers S.A. - PA 🇵🇦", type: "In", action: "Block", protocol: "All", ports: "All", ips: 11 },
    { name: "AS21859_0", type: "In", action: "Block", protocol: "All", ports: "All", ips: 500 },
    { name: "ASN - 21859 - Zenlayer Inc - US 🇺🇸", type: "In", action: "Block", protocol: "All", ports: "All", ips: 710 },
    { name: "ASN - 14061 - DigitalOcean, LLC - US 🇺🇸", type: "In", action: "Block", protocol: "All", ports: "All", ips: 801 },
    { name: "ASN - 211298 - Constantine Cybersecurity Ltd. - GB 🇬🇧", type: "In", action: "Block", protocol: "All", ports: "All", ips: 8 },
    { name: "ASN - 208843 - Alpha Strike Labs GmbH - DE 🇩🇪", type: "In", action: "Block", protocol: "All", ports: "All", ips: 2 },
  ];

  return (
    <div className="firewall-manager">
      <h1>Flex Firewall Manager</h1>
      <nav>
        <span>Flex Firewall Manager</span> &gt; <span>Firewall Rules</span>
      </nav>
      <div className="actions">
        <button>Block IP</button>
        <button>Block Countries</button>
        <button>Create Own Rule</button>
      </div>
      <div className="tabs">
        <button className="active">Firewall Rules</button>
        <button>CloudFlare Rules</button>
      </div>
      <div className="rules-controls">
        <button>Enable</button>
        <button>Disable</button>
        <button>Remove</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>Rule Name</th>
            <th>Type</th>
            <th>Action</th>
            <th>Protocol</th>
            <th>Ports</th>
            <th>IPs</th>
          </tr>
        </thead>
        <tbody>
          {rules.map((rule, index) => (
            <tr key={index}>
              <td>
                <input type="checkbox" />
              </td>
              <td>{rule.name}</td>
              <td>{rule.type}</td>
              <td>{rule.action}</td>
              <td>{rule.protocol}</td>
              <td>{rule.ports}</td>
              <td>{rule.ips}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FlexFirewallManager;
