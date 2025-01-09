import React, { useState } from "react";
import "../styles/Blacklist.css";

// Simulate generating random blacklisted IPs data for 200 entries
const generateRandomBlacklistData = (domains) => {
  const threatLevels = ["High", "Medium", "Low"];
  const reasons = [
    "Multiple failed login attempts",
    "SQL INJECTION",
    "Unusual Behavior",
    "Brute Force Attack",
    "Automated Scripting Detected"
  ];

  const countryProviders = {
    India: ["Airtel", "Jio", "BSNL", "Vodafone Idea"],
    Bangladesh: ["Grameenphone", "Robi", "Banglalink", "Teletalk"],
    Pakistan: ["PTCL", "Ufone", "Jazz", "Telenor Pakistan"],
    Russia: ["Rostelecom", "MTS", "Beeline", "MegaFon"],
    USA: ["AT&T", "Verizon", "T-Mobile", "Spectrum"],
    UK: ["BT", "Sky", "Vodafone UK", "TalkTalk"],
    Germany: ["Deutsche Telekom", "Vodafone Germany", "O2", "1&1 Drillisch"],
    Canada: ["Rogers", "Bell", "Telus", "Freedom Mobile"],
    Australia: ["Telstra", "Optus", "TPG Telecom", "iiNet"],
    Japan: ["NTT Docomo", "SoftBank", "KDDI", "Rakuten Mobile"],
    France: ["Orange", "SFR", "Bouygues Telecom", "Free Mobile"],
    Italy: ["TIM", "Vodafone Italy", "Wind Tre", "Fastweb"],
  };

  const weightedCountries = [
    ...Array(10).fill("India"),
    ...Array(10).fill("Bangladesh"),
    ...Array(10).fill("Pakistan"),
    ...Array(10).fill("Russia"),
    ...Array(2).fill("USA"),
    ...Array(2).fill("UK"),
    ...Array(2).fill("Germany"),
    ...Array(2).fill("Canada"),
    ...Array(2).fill("Australia"),
    ...Array(2).fill("Japan"),
    ...Array(2).fill("France"),
    ...Array(2).fill("Italy"),
  ];

  const randomIP = () => {
    const segments = Array(4)
      .fill(0)
      .map(() => Math.floor(Math.random() * 256));
    return segments.join(".");
  };

  const randomDate = (start, end) => {
    const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const startDate = new Date("2024-08-08");
  const endDate = new Date();

  const allData = Array.from({ length: 200 }, () => {
    const country =
      weightedCountries[Math.floor(Math.random() * weightedCountries.length)];
    const serviceProvider =
      countryProviders[country][
        Math.floor(Math.random() * countryProviders[country].length)
      ];

    return {
      ip: randomIP(),
      country: country,
      serviceProvider: serviceProvider,
      reason: reasons[Math.floor(Math.random() * reasons.length)],
      blockDate: randomDate(startDate, endDate),
      threatLevel: threatLevels[Math.floor(Math.random() * threatLevels.length)],
      domain: domains[Math.floor(Math.random() * domains.length)],
    };
  });

  const haryanaData = Array.from({ length: 100 }, () => {
    const country =
      weightedCountries[Math.floor(Math.random() * weightedCountries.length)];
    const serviceProvider =
      countryProviders[country][
        Math.floor(Math.random() * countryProviders[country].length)
      ];

    return {
      ip: randomIP(),
      country: country,
      serviceProvider: serviceProvider,
      reason: reasons[Math.floor(Math.random() * reasons.length)],
      blockDate: randomDate(startDate, endDate),
      threatLevel: threatLevels[Math.floor(Math.random() * threatLevels.length)],
      domain: "haryanamedicalcouncil.in",
    };
  });

  return [...haryanaData, ...allData].sort(
    (a, b) => new Date(b.blockDate.split("-").reverse().join("-")) - new Date(a.blockDate.split("-").reverse().join("-"))
  );
};

const Blacklist = () => {
  const domains = [
    "delhimedicalcouncil.org",
    "dmconline.org",
    "dcptop.com",
    "haryanamedicalcouncil.in",
    "delhipharmacycouncil.com",
    "greenjobsindia.in",
    "northpole.finance",
    "vision360.co.in",
    "carbongo.io",
    "brsrnext.io",
  ];

  const allBlacklistedIPs = generateRandomBlacklistData(domains);

  const [selectedDomain, setSelectedDomain] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handleUnban = (ip) => {
    alert(`Unbanned IP: ${ip}`);
  };

  const filteredIPs =
    selectedDomain === "All"
      ? allBlacklistedIPs
      : allBlacklistedIPs.filter((ipData) => ipData.domain === selectedDomain);

  const totalPages = Math.ceil(filteredIPs.length / itemsPerPage);

  // Calculate the start and end range for pagination
  const pageRangeLimit = 15;
  let startPage = Math.max(currentPage - Math.floor(pageRangeLimit / 2), 1);
  let endPage = startPage + pageRangeLimit - 1;

  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(endPage - pageRangeLimit + 1, 1);
  }

  const paginatedIPs = filteredIPs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="blacklist-container">
      <h2>Blacklisted IP Addresses</h2>

      <div className="domain-selector">
        <label htmlFor="domain">Select Domain:</label>
        <select
          id="domain"
          value={selectedDomain}
          onChange={(e) => {
            setSelectedDomain(e.target.value);
            setCurrentPage(1);
          }}
        >
          <option value="All">All Domains</option>
          {domains.map((domain, index) => (
            <option key={index} value={domain}>
              {domain}
            </option>
          ))}
        </select>
      </div>

      <table className="blacklist-table">
        <thead>
          <tr>
            <th>IP Address</th>
            <th>Country</th>
            <th>Service Provider</th>
            <th>Reason</th>
            <th>Block Date</th>
            <th>Threat Level</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {paginatedIPs.map((ipData, index) => (
            <tr key={index}>
              <td>{ipData.ip}</td>
              <td>{ipData.country}</td>
              <td>{ipData.serviceProvider}</td>
              <td>{ipData.reason}</td>
              <td>{ipData.blockDate}</td>
              <td className={`threat-level ${ipData.threatLevel.toLowerCase()}`}>
                {ipData.threatLevel}
              </td>
              <td>
                <button onClick={() => handleUnban(ipData.ip)}>Unban</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>



      <div className="pagination">
        {Array.from({ length: endPage - startPage + 1 }, (_, index) => (
          <button
            key={startPage + index}
            className={currentPage === startPage + index ? "active" : ""}
            onClick={() => handlePageChange(startPage + index)}
          >
            {startPage + index}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Blacklist;
