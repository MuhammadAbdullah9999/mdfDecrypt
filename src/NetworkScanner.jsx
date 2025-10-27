import React, { useState } from "react";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import NordVpnBanner from "./NordVpnBanner";

function NetworkScanner() {
  const affiliateLink = 'https://go.nordvpn.net/aff_c?offer_id=15&aff_id=134111&url_id=902';
  const [inputText, setInputText] = useState("");
  const [scanResults, setScanResults] = useState(null);
  const [hostname, setHostname] = useState("");
  const [loading, setLoading] = useState(false);

  const handleScan = async () => {
    setLoading(true);
    try {
      const cleanedInput = inputText.replace(/^https?:\/\//, "");
      setHostname(cleanedInput);
      const response = await axios.post(`http://localhost:5000/scan`, {
        target: cleanedInput,
      });
      const { ip, scanData } = response.data;
      setScanResults({ ip, scanData });
    } catch (error) {
      console.error("Error:", error);
      setHostname("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`relative ${loading ? "pointer-events-none" : ""}`}>
      <NordVpnBanner type="horizontal" affiliateLink={affiliateLink} />
      
      <div className="text-center my-20">
        <h1 className="text-2xl mb-4 font-bold">Network Scanner</h1>
        <div className="flex justify-center gap-8 mt-12">
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Enter text"
            className="w-[40%] h-40 shadow-lg p-2 border border-gray-300 rounded-xl"
          />
        </div>
        <div className="flex justify-center items-center my-8 gap-4">
          <button
            onClick={handleScan}
            className={`flex items-center gap-2 px-6 py-2 bg-green-500 text-white rounded-3xl ${loading ? "cursor-not-allowed opacity-50" : "hover:bg-green-600 active:bg-green-700"}`}
            disabled={loading}
          >
            {loading ? (
              <>
                <CircularProgress size={20} color="inherit" />
                Scanning...
              </>
            ) : (
              "Scan Network"
            )}
          </button>
        </div>
      </div>
      {scanResults && (
        <div>
          <h2 className="text-xl mb-4">Scan Results for {hostname}</h2>
          <table className="w-full border-collapse mb-4">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2 text-left">IP</th>
                <th className="border p-2 text-left">Hostname</th>
                <th className="border p-2 text-left">State</th>
              </tr>
            </thead>
            <tbody>
              {scanResults.scanData.map((host, index) => (
                <tr key={index} className="even:bg-gray-100">
                  <td className="border p-2">{host.ip}</td>
                  <td className="border p-2">{hostname}</td>
                  <td className="border p-2">{host.state}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2 text-left">Port</th>
                <th className="border p-2 text-left">Status</th>
                <th className="border p-2 text-left">Service</th>
              </tr>
            </thead>
            <tbody>
              {scanResults.scanData.map((host) =>
                host.open_ports.map((port, portIndex) => (
                  <tr key={portIndex} className="even:bg-gray-100">
                    <td className="border p-2">{port.port}</td>
                    <td className="border p-2">{port.state}</td>
                    <td className="border p-2">{port.name}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}

      <div className="pb-4 px-8 mt-8">
        <div className="flex flex-col gap-4 shadow-2xl rounded-lg p-8">
          <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Complete Guide to Network Scanning and Security Assessment
          </h1>

          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold text-gray-800 my-4">
              What is Network Scanning?
            </h2>
            <p className="text-justify text-gray-600">
              Network scanning is a critical cybersecurity technique used to discover devices, services, and potential vulnerabilities within a network. This tool helps identify open ports, running services, and network topology—essential information for security professionals, system administrators, and IT teams. Network scanners send specially crafted packets to target hosts and analyze responses to determine what services are running, which ports are open, and what operating systems are in use. This information is crucial for security audits, vulnerability assessments, network inventory management, and penetration testing. Professional network scanning tools like Nmap, Masscan, and Nessus are industry standards used by security teams worldwide. Always obtain proper authorization before scanning networks—unauthorized scanning may be illegal.{" "}
              <a
                className="underline text-blue-700"
                target="_blank"
                rel="noopener noreferrer"
                href="https://nmap.org/book/man.html"
              >
                Nmap Official Documentation
              </a>
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold text-gray-800 my-4">
              Types of Network Scans
            </h2>
            <p className="text-justify text-gray-600">
              Different scan types serve different purposes: **Port Scanning** identifies which network ports are open, closed, or filtered—essential for understanding service exposure. **Service Detection** determines what applications are running on open ports (HTTP, SSH, FTP, etc.). **OS Fingerprinting** identifies the operating system and version running on target hosts. **Vulnerability Scanning** identifies known security vulnerabilities in services and software. **Network Mapping** discovers all devices on a network and their interconnections. Each scan type provides valuable information for security assessment and network management.{" "}
              <a
                className="underline text-blue-700"
                target="_blank"
                rel="noopener noreferrer"
                href="https://owasp.org/www-project-web-security-testing-guide/"
              >
                OWASP Security Testing Guide
              </a>
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold text-gray-800 my-4">
              Network Security Best Practices
            </h2>
            <p className="text-justify text-gray-600">
              Securing networks requires multiple layers of defense: **Firewalls** block unauthorized access and filter traffic. **Intrusion Detection Systems (IDS)** monitor for suspicious activity. **Regular Security Audits** identify vulnerabilities before attackers do. **Principle of Least Privilege** ensures services only expose necessary ports. **Network Segmentation** isolates critical systems. **Encryption** protects data in transit using VPNs or TLS. **Strong Authentication** prevents unauthorized access. **Patch Management** keeps systems updated against known vulnerabilities. Regular network scanning helps identify misconfigurations and security gaps.{" "}
              <a
                className="underline text-blue-700"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.cisa.gov/cybersecurity-best-practices"
              >
                CISA Cybersecurity Best Practices
              </a>
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold text-gray-800 my-4">
              Legal and Ethical Considerations
            </h2>
            <p className="text-justify text-gray-600">
              Network scanning must be conducted legally and ethically. **Authorization** is mandatory—always obtain written permission before scanning networks you don't own. **Scope Boundaries** must be clearly defined and respected. **Legal Compliance** varies by jurisdiction—understand local laws regarding network security testing. **Responsible Disclosure** of discovered vulnerabilities protects organizations. **Professional Standards** like OSCP, CEH, and CISSP provide ethical frameworks. Unauthorized scanning can violate Computer Fraud and Abuse Act (CFAA) and similar laws worldwide, resulting in criminal penalties. Always work within authorized penetration testing frameworks.{" "}
              <a
                className="underline text-blue-700"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.eccouncil.org/programs/certified-ethical-hacker-ceh/"
              >
                Certified Ethical Hacker (CEH)
              </a>
            </p>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Frequently Asked Questions
            </h2>
            
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2 text-gray-700">
                Is network scanning legal?
              </h3>
              <p className="text-justify text-gray-600">
                Scanning networks you own or have explicit authorization to test is legal. Unauthorized scanning of networks or systems without permission is illegal in most jurisdictions and may violate laws like the Computer Fraud and Abuse Act. Always obtain proper authorization before conducting any network scans.
              </p>
            </div>

            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2 text-gray-700">
                What tools do professionals use for network scanning?
              </h3>
              <p className="text-justify text-gray-600">
                Professional security teams commonly use: Nmap (versatile port scanner), Masscan (fast large-scale scanning), Nessus (vulnerability scanner), OpenVAS (open-source vulnerability scanner), Wireshark (packet analysis), and Metasploit (penetration testing framework). Each tool serves specific purposes in comprehensive security assessments.
              </p>
            </div>

            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2 text-gray-700">
                How often should I scan my network?
              </h3>
              <p className="text-justify text-gray-600">
                Regular scanning frequency depends on your security requirements. Critical systems should be scanned weekly or after significant changes. General network infrastructure should be scanned monthly. Vulnerability assessments should be conducted quarterly. Penetration tests should be performed annually or after major system changes. Continuous monitoring provides the best security posture.
              </p>
            </div>
          </div>

          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Additional Resources
            </h2>
            <ul className="list-disc ml-6 text-gray-600 space-y-2">
              <li>
                <a
                  href="https://nmap.org/"
                  className="text-blue-700 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Nmap - Network Scanner
                </a>
              </li>
              <li>
                <a
                  href="https://www.tenable.com/products/nessus"
                  className="text-blue-700 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Nessus Vulnerability Scanner
                </a>
              </li>
              <li>
                <a
                  href="https://owasp.org/www-project-web-security-testing-guide/"
                  className="text-blue-700 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  OWASP Security Testing Guide
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex gap-x-8 gap-y-4 justify-center flex-wrap mt-8">
          <a
            className="underline text-blue-700"
            href="/analyze"
          >
            Go to Hash Analyzer
          </a>
          <a
            className="underline text-blue-700"
            href="/md5"
          >
            Go to MD5 Hash Converter
          </a>
          <a
            className="underline text-blue-700"
            href="/bcrypt"
          >
            Go to Bcrypt Hash Converter
          </a>
          <a
            className="underline text-blue-700"
            href="/sha512"
          >
            Go to SHA-512 Hash Converter
          </a>
        </div>
      </div>
     
    </div>
  );
}

export default NetworkScanner;
