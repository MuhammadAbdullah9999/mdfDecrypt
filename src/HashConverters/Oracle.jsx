import React from "react";
import HashForm from "./hashForm/HashForm";

function Oracle() {
  return (
    <div>
      <HashForm
        hashType="Oracle"
        hashTitle="Oracle Hash Converter"
      ></HashForm>

      <div className="pb-4">
        <div className="flex flex-col gap-4 shadow-2xl rounded-lg p-8">
          <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Complete Guide to Oracle Database Password Hashing
          </h1>

          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold text-gray-800 my-4">
              Understanding Oracle Password Hashing
            </h2>
            <p className="text-justify text-gray-600">
              Oracle Database has evolved through multiple password hashing algorithms over its decades of development. The original Oracle password hash (10g and earlier) used a simple DES-based algorithm that produced an uppercase 16-character hexadecimal hash. Oracle 11g introduced SHA-1 based hashing (identified by "S:" prefix), providing significantly better security. Oracle 12c added support for SHA-512 and PBKDF2 algorithms. These password hashes are critical for database security, protecting administrative and user account credentials. Understanding Oracle password hashing is essential for database administrators, security auditors, and penetration testers working with Oracle environments. The evolution of Oracle's password security reflects the broader industry shift toward stronger cryptographic practices and more robust authentication mechanisms.{" "}
              <a
                className="underline text-blue-700"
                target="_blank"
                rel="noopener noreferrer"
                href="https://docs.oracle.com/en/database/oracle/oracle-database/19/dbseg/configuring-authentication.html"
              >
                Oracle Database Security Guide
              </a>
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold text-gray-800 my-4">
              Oracle 10g Password Algorithm (Legacy)
            </h2>
            <p className="text-justify text-gray-600">
              The original Oracle password hash used in versions up to 10g was based on a modified DES algorithm. The process involved concatenating the username and password (both converted to uppercase), then using this combined string as input to DES encryption. The algorithm used the username as part of the salt, meaning the same password would produce different hashes for different users. However, this approach had severe security flaws: passwords were case-insensitive (converted to uppercase), the algorithm was extremely fast (enabling rapid brute-force attacks), and the DES cipher itself has known vulnerabilities. Modern GPU-based crackers can test billions of Oracle 10g hashes per second. If you're still running Oracle 10g or have legacy 10g-format hashes in Oracle 11g+ (dual password files), immediate migration is critical. These hashes appear as 16 hexadecimal characters with no prefix.{" "}
              <a
                className="underline text-blue-700"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.red-database-security.com/wp/oracle_password_algorithm.pdf"
              >
                Oracle Password Algorithm Analysis
              </a>
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold text-gray-800 my-4">
              Oracle 11g SHA-1 Based Hashing
            </h2>
            <p className="text-justify text-gray-600">
              Oracle 11g introduced a significantly improved password hashing scheme using SHA-1. The algorithm uses a random 20-byte salt and performs SHA-1 hashing iteratively (though fewer iterations than modern standards). The format includes an "S:" prefix followed by the hex-encoded hash. This was a major security improvement over 10g: passwords became case-sensitive, salts were truly random (not username-based), and the SHA-1 algorithm provided better collision resistance than DES. However, by 2025 standards, Oracle 11g hashing is considered weak. SHA-1 has known vulnerabilities, the iteration count is too low, and modern GPUs can still crack these hashes efficiently (millions per second for weak passwords). Organizations should upgrade to Oracle 12c+ and use stronger authentication methods like RADIUS, Kerberos, or multi-factor authentication.{" "}
              <a
                className="underline text-blue-700"
                target="_blank"
                rel="noopener noreferrer"
                href="https://docs.oracle.com/cd/E11882_01/network.112/e16543/authentication.htm"
              >
                Oracle 11g Authentication Documentation
              </a>
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold text-gray-800 my-4">
              Oracle 12c Enhanced Security Features
            </h2>
            <p className="text-justify text-gray-600">
              Oracle Database 12c introduced substantial password security enhancements. The default algorithm was upgraded to SHA-512 with PBKDF2 (Password-Based Key Derivation Function 2), using multiple iterations to slow down brute-force attacks. Oracle 12c also introduced password complexity verification functions, case-sensitive password enforcement by default, and the ability to configure minimum password strength requirements. The new hashing format includes a "T:" prefix. Additional features include password expiration policies, account lockout after failed login attempts, and password history to prevent reuse. Oracle 12c also supports external authentication through LDAP, Active Directory, and Kerberos, enabling enterprise-wide identity management. For maximum security, combine strong password hashing with network encryption (SSL/TLS), audit logging, and least privilege access controls.{" "}
              <a
                className="underline text-blue-700"
                target="_blank"
                rel="noopener noreferrer"
                href="https://docs.oracle.com/en/database/oracle/oracle-database/12.2/dbseg/configuring-authentication.html"
              >
                Oracle 12c Security Configuration
              </a>
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold text-gray-800 my-4">
              Cracking Oracle Password Hashes
            </h2>
            <p className="text-justify text-gray-600">
              Understanding how Oracle password hashes are cracked helps strengthen defenses. Tools like Hashcat, John the Ripper, and specialized Oracle crackers can attack these hashes. For Oracle 10g hashes (mode 3100 in Hashcat), modern GPUs achieve billions of hashes per second, making virtually any password under 12 characters crackable within hours. Oracle 11g hashes (mode 112) are slower but still vulnerable—millions of hashes per second are achievable. Oracle 12c+ hashes with PBKDF2 are significantly more resistant but not immune to attacks on weak passwords. The attack methodology involves: 1) Obtaining hashes from DBA_USERS or USER$ tables (requires DBA privileges), 2) Identifying hash type by prefix or length, 3) Running dictionary attacks with business-specific wordlists, 4) Applying rule-based mutations, 5) Performing targeted attacks based on password policies. Defense includes enforcing 16+ character passwords, using multi-factor authentication, monitoring for unusual authentication patterns, and regularly auditing password strength.{" "}
              <a
                className="underline text-blue-700"
                target="_blank"
                rel="noopener noreferrer"
                href="https://hashcat.net/forum/thread-6147.html"
              >
                Oracle Hash Cracking Techniques
              </a>
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold text-gray-800 my-4">
              Oracle Password Security Best Practices
            </h2>
            <p className="text-justify text-gray-600">
              Securing Oracle database authentication requires comprehensive measures beyond just password hashing. Best practices include: 1) Use Oracle 19c or later with default security settings, 2) Implement strong password policies (16+ characters, complexity, expiration), 3) Enable account lockout after 3-5 failed attempts, 4) Use profile-based password management for different user types, 5) Implement password verification functions to reject weak passwords, 6) Enable case-sensitive passwords (default in 11g+), 7) Rotate passwords regularly using automated tools, 8) Disable default accounts (SCOTT, HR, etc.) or change their passwords, 9) Use SYSDBA sparingly—grant only necessary privileges, 10) Enable audit logging for authentication events, 11) Implement network encryption using Oracle Native Network Encryption or SSL/TLS, 12) Consider external authentication (LDAP, Active Directory, RADIUS) for enterprise environments, 13) Use Oracle Database Vault for additional access controls.{" "}
              <a
                className="underline text-blue-700"
                target="_blank"
                rel="noopener noreferrer"
                href="https://docs.oracle.com/en/database/oracle/oracle-database/19/dbseg/managing-security-for-oracle-database-users.html"
              >
                Oracle User Security Management
              </a>
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold text-gray-800 my-4">
              Extracting and Managing Password Hashes
            </h2>
            <p className="text-justify text-gray-600">
              Oracle stores password hashes in system tables accessible only to privileged users. To view password hashes, DBAs can query: SELECT name, spare4 FROM sys.user$ WHERE type#=1; or SELECT username, password FROM dba_users; (11g+). The exact table structure varies by Oracle version. In Oracle 11g, both old (10g) and new (11g) format hashes may coexist during migration periods. Oracle 12c+ stores hashes in encrypted form in the password file for SYSDBA/SYSOPER accounts. Managing these hashes securely involves: restricting access to system tables (only DBA_USERS view for necessary users), encrypting backups containing password hashes, monitoring queries against password tables, using Data Redaction to hide password hashes in certain contexts, and regularly auditing who has SELECT ANY TABLE privilege. Never expose password hashes in application logs, error messages, or debugging output. Consider using Oracle Data Masking to obfuscate hashes in non-production environments.{" "}
              <a
                className="underline text-blue-700"
                target="_blank"
                rel="noopener noreferrer"
                href="https://docs.oracle.com/en/database/oracle/oracle-database/19/refrn/DBA_USERS.html"
              >
                Oracle DBA_USERS View Reference
              </a>
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold text-gray-800 my-4">
              External Authentication and Enterprise Integration
            </h2>
            <p className="text-justify text-gray-600">
              For enterprise Oracle deployments, external authentication provides superior security and manageability. Oracle supports multiple external authentication methods: 1) Operating System Authentication—users authenticated by the OS can connect to Oracle without passwords, 2) LDAP Directory Authentication—integrate with Microsoft Active Directory or Oracle Internet Directory, 3) Kerberos Authentication—enables single sign-on in Kerberos environments, 4) RADIUS Authentication—connect to RADIUS servers for centralized authentication, 5) PKI Certificate-based Authentication—use X.509 certificates for strong authentication, 6) Smart Card Authentication—integrate with PIV/CAC card systems, 7) Biometric Authentication—through third-party PAM modules. Benefits include: eliminated need to store database passwords, centralized credential management, support for multi-factor authentication, compliance with enterprise security policies, simplified user provisioning/deprovisioning, and audit trail integration with enterprise SIEM systems. Implementation requires careful planning, testing, and high-availability design for authentication services.{" "}
              <a
                className="underline text-blue-700"
                target="_blank"
                rel="noopener noreferrer"
                href="https://docs.oracle.com/en/database/oracle/oracle-database/19/dbseg/integrating-authentication-devices-using-radius.html"
              >
                Oracle External Authentication Guide
              </a>
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold text-gray-800 my-4">
              Oracle Password Hash Migration Strategies
            </h2>
            <p className="text-justify text-gray-600">
              Migrating from older Oracle password hash formats requires careful planning. For 10g to 11g+ migration: 1) Upgrade Oracle to 11g or later, 2) Set SEC_CASE_SENSITIVE_LOGON=TRUE to enable case-sensitive passwords, 3) Configure password verification functions, 4) User passwords will automatically upgrade to new format on next successful login, 5) Force password reset for inactive accounts, 6) Monitor migration progress by checking password hash formats in DBA_USERS, 7) After grace period, disable old hash format support. For 11g to 12c+ migration, similar steps apply with added PBKDF2 support. Consider these strategies: gradual migration (automatic rehash on login), scheduled maintenance window (force all password resets), or hybrid approach (critical accounts first, then general users). Always test in development environments first. Document the migration process, communicate with users about password complexity requirements, and provide password reset helpdesk support during transition periods. Complete migration typically takes 3-12 months.{" "}
              <a
                className="underline text-blue-700"
                target="_blank"
                rel="noopener noreferrer"
                href="https://docs.oracle.com/en/database/oracle/oracle-database/19/upgrd/recommended-and-best-practices-complete-upgrading-oracle-database.html"
              >
                Oracle Database Upgrade Best Practices
              </a>
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold text-gray-800 my-4">
              Oracle Security in Cloud Environments
            </h2>
            <p className="text-justify text-gray-600">
              Oracle Database in cloud environments (Oracle Cloud Infrastructure, AWS RDS for Oracle, Azure) requires additional security considerations. Cloud-specific features include: 1) Oracle Cloud Infrastructure IAM integration for database authentication, 2) Cloud-native encryption key management (OCI Vault, AWS KMS), 3) Virtual Private Cloud (VPC) network isolation, 4) Cloud Access Security Broker (CASB) integration, 5) Automated backup encryption and management, 6) Integration with cloud-native monitoring and SIEM tools. Best practices for cloud Oracle databases: enable database encryption (TDE) for data at rest, use SSL/TLS for all connections, implement least privilege IAM policies, enable database audit logging with cloud storage integration, use cloud-native secret managers for credential storage, implement automated compliance scanning, configure automated patching schedules, use private endpoints to avoid public internet exposure, and implement DDoS protection. Regular security assessments specific to cloud Oracle deployments help identify misconfigurations.{" "}
              <a
                className="underline text-blue-700"
                target="_blank"
                rel="noopener noreferrer"
                href="https://docs.oracle.com/en-us/iaas/Content/Database/Concepts/databaseoverview.htm"
              >
                Oracle Cloud Infrastructure Database
              </a>
            </p>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Frequently Asked Questions
            </h2>
            
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2 text-gray-700">
                How do I check what password version my Oracle database uses?
              </h3>
              <p className="text-justify text-gray-600">
                Query: SELECT username, password_versions FROM dba_users; This shows which password formats are enabled for each user (10G, 11G, 12C). You can also check the database version and security parameters: SELECT * FROM v$version; and SHOW PARAMETER sec_case_sensitive_logon;
              </p>
            </div>

            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2 text-gray-700">
                Are Oracle 10g password hashes secure?
              </h3>
              <p className="text-justify text-gray-600">
                No, absolutely not. Oracle 10g hashes are extremely weak by modern standards. They're based on DES, limited to uppercase passwords, and can be cracked at billions per second with modern GPUs. If you're still using 10g format hashes, immediate migration to 11g+ format (or preferably 12c+) is critical.
              </p>
            </div>

            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2 text-gray-700">
                How can I enforce strong passwords in Oracle?
              </h3>
              <p className="text-justify text-gray-600">
                Use Oracle password verification functions and profiles. Create or modify a profile with: CREATE PROFILE secure_profile LIMIT PASSWORD_LIFE_TIME 90 FAILED_LOGIN_ATTEMPTS 5 PASSWORD_VERIFY_FUNCTION my_verify_function; Then assign to users: ALTER USER username PROFILE secure_profile; Oracle provides sample verification functions in $ORACLE_HOME/rdbms/admin/utlpwdmg.sql.
              </p>
            </div>

            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2 text-gray-700">
                Should I use database passwords or external authentication?
              </h3>
              <p className="text-justify text-gray-600">
                For enterprise environments, external authentication (LDAP, Kerberos, RADIUS) is preferred. It provides centralized management, supports MFA, eliminates password storage in the database, and integrates with enterprise identity systems. For smaller deployments, strong database passwords with Oracle 12c+ hashing are acceptable.
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
                  href="https://docs.oracle.com/en/database/oracle/oracle-database/19/dbseg/"
                  className="text-blue-700 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Oracle Database Security Guide (Official)
                </a>
              </li>
              <li>
                <a
                  href="https://www.red-database-security.com/"
                  className="text-blue-700 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Red Database Security - Oracle Security Research
                </a>
              </li>
              <li>
                <a
                  href="https://hashcat.net/wiki/doku.php?id=example_hashes"
                  className="text-blue-700 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hashcat Oracle Hash Modes
                </a>
              </li>
              <li>
                <a
                  href="https://docs.oracle.com/en/database/oracle/oracle-database/19/refrn/DBA_USERS.html"
                  className="text-blue-700 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Oracle DBA_USERS Reference
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex gap-x-8 gap-y-4 justify-center flex-wrap mt-8">
          <a
            className="underline text-blue-700"
            href="/mysql"
          >
            Go to MySQL Hash Converter
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
          <a
            className="underline text-blue-700"
            href="/analyze"
          >
            Go to Hash Analyzer
          </a>
        </div>
      </div>
    </div>
  );
}

export default Oracle;
