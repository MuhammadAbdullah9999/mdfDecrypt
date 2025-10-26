import React from "react";
import HashForm from "./hashForm/HashForm";

function MySQL() {
  return (
    <div>
      <HashForm
        hashType="MySQL"
        hashTitle="MySQL Hash Converter"
      ></HashForm>

      <div className="pb-4">
        <div className="flex flex-col gap-4 shadow-2xl rounded-lg p-8">
          <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Complete Guide to MySQL Password Hashing
          </h1>

          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold text-gray-800 my-4">
              Understanding MySQL Password Hashing
            </h2>
            <p className="text-justify text-gray-600">
              MySQL has used various password hashing algorithms throughout its history to secure user authentication. The two most common are OLD_PASSWORD() (pre-4.1) which produced a 16-character hash, and PASSWORD() (MySQL 4.1+) which generates a 41-character hash starting with an asterisk (*). MySQL 5.7 introduced stronger password validation with the validate_password plugin, and MySQL 8.0+ uses caching_sha2_password as the default authentication method, which is based on SHA-256. Understanding these different hashing methods is crucial for database administrators, security professionals, and developers working with MySQL databases, especially when dealing with legacy systems or performing security audits.{" "}
              <a
                className="underline text-blue-700"
                target="_blank"
                rel="noopener noreferrer"
                href="https://dev.mysql.com/doc/refman/8.0/en/password-hashing.html"
              >
                MySQL Official Password Hashing Documentation
              </a>
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold text-gray-800 my-4">
              MySQL 4.1+ PASSWORD() Function: How It Works
            </h2>
            <p className="text-justify text-gray-600">
              The MySQL PASSWORD() function (introduced in version 4.1) uses a double SHA-1 hash to secure passwords. The algorithm works as follows: first, it computes SHA-1 of the password, then computes SHA-1 again on the result. The final output is represented as a 40-character hexadecimal string prefixed with an asterisk, totaling 41 characters. For example, PASSWORD('mypassword') produces something like '*6C8989366EAF75BB670AD8EA7A7FC1176A95CEF4'. This double-hashing approach was designed to prevent direct reverse-engineering of the hash. However, it's important to note that this method lacks salting and uses the fast SHA-1 algorithm, making it vulnerable to rainbow table and brute-force attacks by modern standards. MySQL 5.6+ began moving away from this for more secure methods.{" "}
              <a
                className="underline text-blue-700"
                target="_blank"
                rel="noopener noreferrer"
                href="https://dev.mysql.com/doc/refman/5.7/en/encryption-functions.html"
              >
                MySQL Encryption Functions Reference
              </a>
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold text-gray-800 my-4">
              Evolution: From OLD_PASSWORD to caching_sha2_password
            </h2>
            <p className="text-justify text-gray-600">
              MySQL's password security has evolved significantly over the years. OLD_PASSWORD (pre-4.1) used a weak algorithm producing 16-character hashes and should never be used today. MySQL 4.1-5.6 used mysql_native_password with double SHA-1 hashing. MySQL 5.7 introduced more robust password validation and mysql_native_password remained default. MySQL 8.0 made a major shift to caching_sha2_password as the default authentication plugin, which uses SHA-256 with salt and multiple rounds, providing significantly better security. The caching aspect improves performance by storing authentication results in memory. For new installations, always use caching_sha2_password or consider external authentication methods. Legacy databases may still use older methods, requiring careful migration planning to avoid breaking existing applications.{" "}
              <a
                className="underline text-blue-700"
                target="_blank"
                rel="noopener noreferrer"
                href="https://dev.mysql.com/doc/refman/8.0/en/upgrading-from-previous-series.html"
              >
                MySQL 8.0 Upgrade Guide
              </a>
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold text-gray-800 my-4">
              Security Vulnerabilities of mysql_native_password
            </h2>
            <p className="text-justify text-gray-600">
              The mysql_native_password authentication plugin, while widely used, has several security limitations. First, it uses unsalted double SHA-1 hashing, making it susceptible to rainbow table attacks. Second, SHA-1 itself has known cryptographic weaknesses including collision vulnerabilities. Third, the hash is deterministic—the same password always produces the same hash, allowing attackers to identify users with identical passwords. Fourth, the algorithm is relatively fast, enabling rapid brute-force attempts on leaked password hashes. Fifth, without proper network encryption, the authentication process can be vulnerable to man-in-the-middle attacks. These vulnerabilities are why MySQL 8.0 moved to caching_sha2_password. Organizations still using mysql_native_password should plan migration to stronger authentication methods and ensure SSL/TLS is enabled for all database connections.{" "}
              <a
                className="underline text-blue-700"
                target="_blank"
                rel="noopener noreferrer"
                href="https://owasp.org/www-community/vulnerabilities/Use_of_hard-coded_password"
              >
                OWASP Database Password Security
              </a>
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold text-gray-800 my-4">
              Implementing Secure MySQL Authentication
            </h2>
            <p className="text-justify text-gray-600">
              To implement secure MySQL authentication in 2025, follow these best practices: 1) Use MySQL 8.0+ with caching_sha2_password as the default authentication plugin. 2) Enable require_secure_transport to force SSL/TLS for all connections. 3) Use the validate_password component with strong policy settings (length ≥12, mixed case, numbers, special characters). 4) Implement proper user privilege management—grant only necessary permissions. 5) Use separate accounts for different applications/purposes. 6) Enable audit logging to monitor authentication attempts. 7) Rotate database passwords regularly using automated tools. 8) Never store database credentials in application code—use environment variables or secret management systems like HashiCorp Vault. 9) Consider implementing additional authentication layers like client certificates. 10) Monitor for suspicious authentication patterns using tools like MySQL Enterprise Audit.{" "}
              <a
                className="underline text-blue-700"
                target="_blank"
                rel="noopener noreferrer"
                href="https://dev.mysql.com/doc/refman/8.0/en/validate-password.html"
              >
                MySQL Password Validation Plugin
              </a>
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold text-gray-800 my-4">
              Migrating from mysql_native_password to caching_sha2_password
            </h2>
            <p className="text-justify text-gray-600">
              Migrating authentication methods requires careful planning to avoid service disruptions. The process involves: 1) Test compatibility—older MySQL clients may not support caching_sha2_password. 2) Update all MySQL client libraries in your applications to versions that support SHA-256. 3) Configure SSL/TLS certificates for encrypted connections (required for SHA-256 over insecure networks). 4) For each user account, run: ALTER USER 'username'@'host' IDENTIFIED WITH caching_sha2_password BY 'password'; 5) Test authentication thoroughly in development/staging environments. 6) Update connection strings to enable SSL: useSSL=true&requireSSL=true. 7) Monitor authentication logs during migration. 8) Keep mysql_native_password available temporarily for gradual migration. 9) Document the new authentication requirements for your team. Common issues include driver incompatibility and missing SSL configuration—plan for these in advance.{" "}
              <a
                className="underline text-blue-700"
                target="_blank"
                rel="noopener noreferrer"
                href="https://dev.mysql.com/doc/refman/8.0/en/caching-sha2-pluggable-authentication.html"
              >
                Caching SHA-2 Authentication Plugin Guide
              </a>
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold text-gray-800 my-4">
              Using External Authentication Methods
            </h2>
            <p className="text-justify text-gray-600">
              For enterprise environments, consider external authentication methods beyond MySQL's native capabilities. MySQL Enterprise Edition supports LDAP and PAM (Pluggable Authentication Modules) authentication, allowing integration with Active Directory, Kerberos, and other enterprise identity systems. Benefits include: centralized user management, single sign-on capabilities, integration with existing security infrastructure, and more sophisticated password policies. For cloud deployments, consider AWS RDS IAM authentication or Azure Active Directory integration. These methods eliminate the need to store database credentials, using temporary tokens instead. Implementation requires MySQL Enterprise Edition or equivalent cloud provider features. External authentication also enables multi-factor authentication (MFA), biometric authentication, and compliance with enterprise security policies. However, ensure high availability of authentication services to prevent database access issues.{" "}
              <a
                className="underline text-blue-700"
                target="_blank"
                rel="noopener noreferrer"
                href="https://dev.mysql.com/doc/refman/8.0/en/pluggable-authentication.html"
              >
                MySQL Pluggable Authentication
              </a>
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold text-gray-800 my-4">
              Breaking MySQL Password Hashes: Penetration Testing
            </h2>
            <p className="text-justify text-gray-600">
              From a security testing perspective, understanding how to crack MySQL hashes helps identify weak passwords. Tools like Hashcat and John the Ripper support MySQL hash formats. For mysql_native_password hashes (mode 300 in Hashcat), modern GPUs can test billions of hashes per second, making weak passwords trivially crackable. The attack process: 1) Extract password hashes from mysql.user table (requires database access), 2) Identify hash type (old vs new format), 3) Use dictionary attacks with common password lists, 4) Apply rule-based mutations, 5) Perform mask attacks for known password patterns. Defense strategies include: enforcing strong password policies, implementing account lockout after failed attempts, monitoring for unusual authentication patterns, and using caching_sha2_password which is significantly more resistant to cracking. Regular password audits using these tools can identify weak passwords before attackers do.{" "}
              <a
                className="underline text-blue-700"
                target="_blank"
                rel="noopener noreferrer"
                href="https://hashcat.net/wiki/doku.php?id=example_hashes"
              >
                Hashcat Example Hashes Guide
              </a>
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold text-gray-800 my-4">
              Best Practices for MySQL Database Security
            </h2>
            <p className="text-justify text-gray-600">
              Beyond password hashing, comprehensive MySQL security requires multiple layers: 1) Network Security: Use firewalls to restrict database access to specific IPs, disable remote root login, use SSH tunneling or VPNs for remote access. 2) Encryption: Enable SSL/TLS for client connections, encrypt data at rest using MySQL's transparent data encryption. 3) Privilege Management: Follow principle of least privilege, create separate users for different applications, regularly audit user permissions. 4) Monitoring: Enable audit logging, monitor for SQL injection attempts, track privilege escalations. 5) Updates: Keep MySQL updated with latest security patches, subscribe to security announcements. 6) Backup Security: Encrypt backups, store offsite, test restoration procedures. 7) Configuration: Disable unnecessary features, set appropriate timeouts, configure secure file privileges. Regular security assessments and penetration testing help identify vulnerabilities before attackers do.{" "}
              <a
                className="underline text-blue-700"
                target="_blank"
                rel="noopener noreferrer"
                href="https://dev.mysql.com/doc/refman/8.0/en/security.html"
              >
                MySQL Security Guidelines
              </a>
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold text-gray-800 my-4">
              MySQL in Application Security Architecture
            </h2>
            <p className="text-justify text-gray-600">
              MySQL password security is just one aspect of overall application security. Modern applications should: 1) Never store database credentials in code or version control, 2) Use connection pooling with properly configured timeouts, 3) Implement prepared statements to prevent SQL injection, 4) Use application-level authentication separate from database authentication, 5) Store user passwords in the application using bcrypt or Argon2, not database hashing functions, 6) Implement rate limiting on authentication attempts, 7) Use ORM frameworks with built-in security features, 8) Regularly scan for SQL injection vulnerabilities, 9) Implement database activity monitoring, 10) Use read replicas with separate credentials for read-only operations. The database should be treated as a critical resource with multiple security layers—authentication, authorization, encryption, monitoring, and incident response all play important roles.{" "}
              <a
                className="underline text-blue-700"
                target="_blank"
                rel="noopener noreferrer"
                href="https://cheatsheetseries.owasp.org/cheatsheets/Database_Security_Cheat_Sheet.html"
              >
                OWASP Database Security Cheat Sheet
              </a>
            </p>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Frequently Asked Questions
            </h2>
            
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2 text-gray-700">
                How do I check what authentication method my MySQL server uses?
              </h3>
              <p className="text-justify text-gray-600">
                Run the query: SELECT plugin FROM mysql.user WHERE user='your_username'; This will show the authentication plugin (e.g., mysql_native_password, caching_sha2_password) used for that user account. You can also check the default: SHOW VARIABLES LIKE 'default_authentication_plugin';
              </p>
            </div>

            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2 text-gray-700">
                Can I crack a MySQL PASSWORD() hash?
              </h3>
              <p className="text-justify text-gray-600">
                Yes, mysql_native_password hashes can be cracked using tools like Hashcat or John the Ripper, especially for weak passwords. The double SHA-1 algorithm is not salted and relatively fast, making it vulnerable to brute-force and rainbow table attacks. This is why MySQL 8.0 moved to stronger authentication methods.
              </p>
            </div>

            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2 text-gray-700">
                Should I use MySQL PASSWORD() function for my application passwords?
              </h3>
              <p className="text-justify text-gray-600">
                No, absolutely not. MySQL's PASSWORD() function is designed for database authentication, not application password storage. For application passwords, use bcrypt, Argon2, or PBKDF2 with proper salting. These algorithms are specifically designed for secure password storage with adjustable work factors.
              </p>
            </div>

            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2 text-gray-700">
                Is MySQL 8.0 caching_sha2_password secure enough?
              </h3>
              <p className="text-justify text-gray-600">
                Yes, caching_sha2_password is significantly more secure than mysql_native_password. It uses SHA-256 with salt and multiple iterations. However, proper implementation requires SSL/TLS encryption for connections. For maximum security, combine it with other measures like strong password policies, SSL/TLS, and principle of least privilege.
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
                  href="https://dev.mysql.com/doc/refman/8.0/en/password-hashing.html"
                  className="text-blue-700 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  MySQL Official Password Hashing Documentation
                </a>
              </li>
              <li>
                <a
                  href="https://dev.mysql.com/doc/refman/8.0/en/security.html"
                  className="text-blue-700 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  MySQL Security Guidelines (Official)
                </a>
              </li>
              <li>
                <a
                  href="https://cheatsheetseries.owasp.org/cheatsheets/Database_Security_Cheat_Sheet.html"
                  className="text-blue-700 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  OWASP Database Security Cheat Sheet
                </a>
              </li>
              <li>
                <a
                  href="https://hashcat.net/wiki/doku.php?id=example_hashes"
                  className="text-blue-700 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hashcat MySQL Hash Cracking Guide
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
            href="/oracle"
          >
            Go to Oracle Hash Converter
          </a>
          <a
            className="underline text-blue-700"
            href="/bcrypt"
          >
            Go to Bcrypt Hash Converter
          </a>
          <a
            className="underline text-blue-700"
            href="/md5-crypt"
          >
            Go to MD5-Crypt Hash Converter
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

export default MySQL;
