import React, { useState } from "react";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import NordVpnBanner from "./NordVpnBanner";

function HashAnalyzer() {
  const affiliateLink = 'https://go.nordvpn.net/aff_c?offer_id=15&aff_id=134111&url_id=902';
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    setLoading(true);
    try {
      const response = await axios.post(`https://hash-converter-backend.onrender.com/analyze`, {
        inputText,
      });
      setOutputText(response.data.outputText.join(", "));
    } catch (error) {
      console.error("Error:", error);
      setOutputText("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
     <div className="text-center my-20">
      <h1 className="text-2xl mb-4 font-bold">Hash Analyzer</h1>
      <div className="flex justify-center gap-8 mt-12">
        <textarea
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Enter text"
          className="w-[40%] h-40 shadow-lg p-2 border border-gray-300 rounded-xl"
        />
        <div className="w-[40%] h-40 shadow-lg p-2 border border-gray-300 rounded-xl flex items-center justify-center">
          {loading ? (
            <CircularProgress />
          ) : (
            <textarea
              value={outputText}
              readOnly
              placeholder="Output will appear here"
              className="w-full h-full border-none outline-none resize-none"
            />
          )}
        </div>
      </div>
      <div className="flex justify-center items-center my-8 gap-4">
        <button
          onClick={handleAnalyze}
          className="flex items-center gap-2 px-6 py-2 bg-green-500 text-white rounded-3xl"
          disabled={loading}
        >
          Analyze
        </button>
      </div>
    </div>

    <NordVpnBanner type="horizontal" affiliateLink={affiliateLink} />

    <div className="pb-4 px-8">
      <div className="flex flex-col gap-4 shadow-2xl rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Complete Guide to Hash Analysis and Identification
        </h1>

        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold text-gray-800 my-4">
            What is Hash Analysis?
          </h2>
          <p className="text-justify text-gray-600">
            Hash analysis is the process of identifying and understanding cryptographic hash functions and their outputs. When security professionals encounter hash values during penetration testing, forensic investigations, or system audits, hash analysis helps determine the algorithm used (MD5, SHA-256, bcrypt, etc.), its security strength, and potential vulnerabilities. This tool automatically analyzes hash patterns including length, character composition, prefixes, and structural elements to identify the hash type. Hash identification is crucial for password recovery, security assessments, system migrations, and understanding legacy authentication systems. Modern hash analyzers can identify over 270+ hash types including password hashes, cryptographic checksums, database-specific formats, and application-specific implementations.{" "}
            <a
              className="underline text-blue-700"
              target="_blank"
              rel="noopener noreferrer"
              href="https://hashcat.net/wiki/doku.php?id=example_hashes"
            >
              Hashcat Hash Examples
            </a>
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold text-gray-800 my-4">
            Common Hash Types and Characteristics
          </h2>
          <p className="text-justify text-gray-600">
            Different algorithms produce distinctive patterns: MD5 (32 hex characters), SHA-1 (40 hex), SHA-256 (64 hex), SHA-512 (128 hex). Unix/Linux passwords use prefixes: $1$ (MD5-Crypt), $2a$/$2b$/$2y$ (bcrypt), $5$ (SHA-256-Crypt), $6$ (SHA-512-Crypt). Application-specific: WordPress ($P$), Oracle 11g (S:), MySQL 4.1+ (*+40chars). Understanding these patterns enables accurate identification and appropriate security responses.{" "}
            <a
              className="underline text-blue-700"
              target="_blank"
              rel="noopener noreferrer"
              href="https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html"
            >
              OWASP Password Storage Guide
            </a>
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold text-gray-800 my-4">
            Security Assessment Applications
          </h2>
          <p className="text-justify text-gray-600">
            Hash analysis is essential for security auditing. Security professionals extract password hashes from databases or system files, identify the hash type, assess algorithm strength, attempt password recovery using appropriate tools, and provide recommendations for security improvements. Weak algorithms like MD5 or SHA-1 require urgent migration to bcrypt or Argon2, while strong algorithms may only need password policy enhancements.{" "}
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
            Digital Forensics and Investigation
          </h2>
          <p className="text-justify text-gray-600">
            In digital forensics, hash analysis serves multiple critical functions. File integrity verification uses cryptographic hashes (MD5, SHA-256) to ensure evidence hasn't been tampered with throughout the investigation chain of custody. Known file hash databases help identify system files, malware, or contraband. Password hash analysis helps investigators access encrypted containers or understand attacker capabilities. All forensic hash analysis must follow legal guidelines and maintain proper documentation for court presentation.{" "}
            <a
              className="underline text-blue-700"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.nist.gov/itl/ssd/software-quality-group/national-software-reference-library-nsrl"
            >
              NIST Reference Library
            </a>
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Frequently Asked Questions
          </h2>
          
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2 text-gray-700">
              How accurate is hash identification?
            </h3>
            <p className="text-justify text-gray-600">
              Hash identification accuracy varies. Unique formats (bcrypt $2a$, SHA-Crypt $6$) are identified with near 100% accuracy. Ambiguous formats (32 hex characters could be MD5, NTLM, or others) require context clues or testing multiple possibilities. This tool provides the most likely matches based on pattern analysis.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2 text-gray-700">
              Can all hashes be cracked?
            </h3>
            <p className="text-justify text-gray-600">
              No. Modern algorithms like bcrypt or Argon2 with strong passwords (16+ characters) are computationally infeasible to crack. However, weak passwords can be cracked regardless of algorithm. Crackability depends on both algorithm strength and password quality.
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
                href="https://hashcat.net/wiki/doku.php?id=example_hashes"
                className="text-blue-700 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hashcat Example Hashes Reference
              </a>
            </li>
            <li>
              <a
                href="https://github.com/psypanda/hashID"
                className="text-blue-700 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                HashID - Hash Identification Tool
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex gap-x-8 gap-y-4 justify-center flex-wrap mt-8">
        <a
          className="underline text-blue-700"
          href="/md5"
        >
          Go to MD5 Hash Converter
        </a>
        <a
          className="underline text-blue-700"
          href="/sha256"
        >
          Go to SHA-256 Hash Converter
        </a>
        <a
          className="underline text-blue-700"
          href="/bcrypt"
        >
          Go to Bcrypt Hash Converter
        </a>
        <a
          className="underline text-blue-700"
          href="/scan"
        >
          Go to Network Scanner
        </a>
      </div>
    </div>
     
    </div>
  );
}

export default HashAnalyzer;
