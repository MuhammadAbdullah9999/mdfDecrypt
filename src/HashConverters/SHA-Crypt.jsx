import React from "react";
import HashForm from "./hashForm/HashForm";

function SHACrypt() {
  return (
    <div>
      <HashForm
        hashType="SHA-Crypt"
        hashTitle="SHA-Crypt Hash Converter"
      ></HashForm>

      <div className="pb-4">
        <div className="flex flex-col gap-4 shadow-2xl rounded-lg p-8">
          <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Complete Guide to SHA-Crypt Password Hashing
          </h1>

          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold text-gray-800 my-4">
              Understanding SHA-Crypt Algorithms
            </h2>
            <p className="text-justify text-gray-600">
              SHA-Crypt refers to two related password hashing algorithms: SHA-256-Crypt and SHA-512-Crypt, which are modern successors to the legacy MD5-Crypt algorithm. Developed by Ulrich Drepper for glibc (GNU C Library), SHA-Crypt provides significantly improved security over MD5-Crypt by using the SHA-2 family of cryptographic hash functions. SHA-256-Crypt uses SHA-256 and produces hashes identified by the "$5$" prefix, while SHA-512-Crypt uses SHA-512 and produces hashes with the "$6$" prefix. Both algorithms support configurable round counts (iteration counts), allowing administrators to increase computational cost as hardware becomes more powerful. SHA-Crypt is the default password hashing method for most modern Linux distributions including Ubuntu 18.04+, Debian 9+, RHEL 8+, and others. It balances strong security with reasonable performance for system authentication.{" "}
              <a
                className="underline text-blue-700"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.akkadia.org/drepper/SHA-crypt.txt"
              >
                SHA-Crypt Specification by Ulrich Drepper
              </a>
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold text-gray-800 my-4">
              How SHA-256-Crypt and SHA-512-Crypt Work
            </h2>
            <p className="text-justify text-gray-600">
              SHA-Crypt algorithms use a sophisticated iterative process to strengthen password security. The process begins with generating a random salt (up to 16 characters from the base64 alphabet). The algorithm then performs multiple rounds of SHA hashing—default is 5,000 rounds, but this is configurable from 1,000 to 999,999,999. Each round involves complex mixing of the password, salt, and intermediate hash values in a specific pattern designed to prevent optimization attacks. The algorithm structure follows: 1) Generate initial hashes (Digest A and B) mixing password and salt, 2) Create sequences (P-sequence and S-sequence) for efficient computation, 3) Perform the specified number of rounds, each mixing these sequences differently, 4) Extract and permute the final hash according to specification, 5) Encode using base64. The iteration count can be explicitly specified in the hash format: $6$rounds=500000$salt$hash. For 2025, security experts recommend 500,000+ rounds for SHA-512-Crypt to maintain resistance against GPU-based attacks.{" "}
              <a
                className="underline text-blue-700"
                target="_blank"
                rel="noopener noreferrer"
                href="https://man7.org/linux/man-pages/man3/crypt.3.html"
              >
                Linux Crypt Manual Page
              </a>
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold text-gray-800 my-4">
              SHA-512-Crypt vs SHA-256-Crypt
            </h2>
            <p className="text-justify text-gray-600">
              Both SHA-256-Crypt and SHA-512-Crypt provide strong security, but SHA-512-Crypt is generally preferred for password hashing. SHA-512-Crypt produces a 512-bit hash compared to SHA-256-Crypt's 256-bit hash, providing a larger security margin. On 64-bit systems (which are universal in 2025), SHA-512-Crypt can actually be faster than SHA-256-Crypt because it operates natively with 64-bit words, reducing the number of operations required. The hash format for SHA-256-Crypt starts with "$5$" while SHA-512-Crypt starts with "$6$". Both support the same range of round counts and salt lengths. For system passwords on modern Linux, SHA-512-Crypt with 500,000+ rounds is the recommended standard. SHA-256-Crypt might be preferred in specific scenarios requiring broader compatibility with legacy systems or when explicitly optimizing for 32-bit architectures, though this is increasingly rare. The choice between them primarily affects the theoretical security margin and performance characteristics on different hardware architectures.{" "}
              <a
                className="underline text-blue-700"
                target="_blank"
                rel="noopener noreferrer"
                href="https://passlib.readthedocs.io/en/stable/lib/passlib.hash.sha512_crypt.html"
              >
                Passlib SHA-512-Crypt Documentation
              </a>
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold text-gray-800 my-4">
              Configuring SHA-Crypt in Linux Systems
            </h2>
            <p className="text-justify text-gray-600">
              Configuring SHA-Crypt on Linux systems involves modifying PAM (Pluggable Authentication Modules) configuration. To set SHA-512-Crypt as the default with custom rounds: 1) Edit /etc/pam.d/common-password (Debian/Ubuntu) or /etc/pam.d/system-auth (RHEL/CentOS), 2) Find the line containing pam_unix.so, 3) Add or modify parameters: password [success=1 default=ignore] pam_unix.so obscure sha512 rounds=500000, 4) Save and test with a non-privileged account first. You can verify current settings with: sudo authconfig --test | grep hashing (RHEL/CentOS) or check /etc/login.defs for ENCRYPT_METHOD. To generate a test hash: mkpasswd --method=sha-512 --rounds=500000 mypassword. Existing passwords will remain in their current format until users change passwords—the new algorithm applies only to new/changed passwords. For immediate migration, consider forced password resets for all users during a maintenance window. Always test configuration changes in development environments before production deployment.{" "}
              <a
                className="underline text-blue-700"
                target="_blank"
                rel="noopener noreferrer"
                href="https://wiki.archlinux.org/title/SHA_password_hashes"
              >
                Arch Linux SHA Password Hashes Guide
              </a>
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold text-gray-800 my-4">
              Security Analysis and Cracking Resistance
            </h2>
            <p className="text-justify text-gray-600">
              SHA-Crypt with appropriate round counts provides strong resistance against password cracking attacks. With the default 5,000 rounds, SHA-512-Crypt is significantly slower than MD5-Crypt but can still be attacked efficiently with modern GPUs—high-end cards achieve millions of hashes per second. However, with 500,000 rounds, the cracking speed drops dramatically to thousands per second, making brute-force attacks much more expensive. The algorithm's design resists various optimization techniques that work against simpler hashing schemes. GPU implementations exist but are less efficient than for MD5 due to the algorithm's complexity and memory access patterns. ASIC attacks are theoretically possible but economically impractical for most attackers. The key factors affecting security are: round count (higher is better, recommend 500,000+), password strength (16+ characters with complexity), and salt randomness (automatically handled). Compared to bcrypt, SHA-Crypt with high rounds provides similar security levels. Compared to Argon2, SHA-Crypt lacks memory-hardness but compensates with very high iteration counts. For Linux system passwords, SHA-512-Crypt with 500,000 rounds represents a good balance of security and performance.{" "}
              <a
                className="underline text-blue-700"
                target="_blank"
                rel="noopener noreferrer"
                href="https://hashcat.net/wiki/doku.php?id=example_hashes"
              >
                Hashcat Performance Benchmarks
              </a>
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold text-gray-800 my-4">
              Migrating from MD5-Crypt to SHA-Crypt
            </h2>
            <p className="text-justify text-gray-600">
              Migrating from MD5-Crypt to SHA-Crypt is a critical security upgrade for Linux systems. The migration process is relatively straightforward due to the crypt library's support for multiple algorithms: 1) Verify current configuration in /etc/login.defs and PAM files, 2) Update PAM configuration to use sha512 with appropriate rounds (as described earlier), 3) Test with new user account creation to verify SHA-512-Crypt is used, 4) Monitor /etc/shadow for hash format changes (old users have $1$, new/changed will have $6$), 5) Existing user passwords will automatically upgrade on next password change, 6) For faster migration, implement automated password reset during next login using the chage command, 7) After 6-12 months, consider forced password reset for remaining MD5-Crypt users, 8) Document the migration process and timeline. The crypt library handles backward compatibility—old MD5-Crypt hashes continue working during migration. Monitor system performance during and after migration, as higher round counts increase CPU usage during authentication (typically negligible for human logins, may impact automated systems with frequent authentication).{" "}
              <a
                className="underline text-blue-700"
                target="_blank"
                rel="noopener noreferrer"
                href="https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html/security_hardening/configuring-sha-512-password-hashing_securing-rhel"
              >
                Red Hat SHA-512 Configuration Guide
              </a>
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold text-gray-800 my-4">
              Performance Considerations
            </h2>
            <p className="text-justify text-gray-600">
              SHA-Crypt performance varies significantly based on round count and hardware. With default 5,000 rounds, SHA-512-Crypt takes approximately 5-10ms per hash on modern CPUs. With 500,000 rounds, this increases to 500-1000ms per hash. For interactive user logins, this delay is barely noticeable. However, for systems with automated authentication (APIs, service accounts, high-frequency logins), this can become a bottleneck. Performance optimization strategies include: 1) Use session tokens to minimize authentication frequency, 2) Implement caching for service accounts with short TTLs, 3) Use hardware with AES-NI and SHA extensions for acceleration, 4) Consider load balancing authentication services, 5) For very high-traffic scenarios, evaluate hybrid approaches (lower rounds for automated systems, higher for interactive users), 6) Profile your specific workload to determine acceptable round counts. Benchmark testing: measure authentication throughput under expected load, monitor CPU usage during peak times, test failover scenarios, and validate that increased rounds don't cause unacceptable delays. Remember that the performance "cost" primarily affects attackers—legitimate users experience the delay only during login.{" "}
              <a
                className="underline text-blue-700"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.intel.com/content/www/us/en/developer/articles/technical/intel-sha-extensions.html"
              >
                Intel SHA Extensions for Hardware Acceleration
              </a>
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold text-gray-800 my-4">
              SHA-Crypt in Application Development
            </h2>
            <p className="text-justify text-gray-600">
              When developing applications that need to use SHA-Crypt, leverage existing libraries rather than implementing the algorithm yourself. Python offers passlib (passlib.hash.sha512_crypt), PHP provides crypt() with CRYPT_SHA512, Node.js has unix-crypt-td-js, Java can use jBCrypt or Apache Commons Codec, and Go has golang.org/x/crypto/sha512crypt. Best practices for application use: 1) Use library defaults or increase round count above defaults, 2) Never hardcode round counts—make them configurable, 3) Implement proper error handling for hash verification, 4) Use timing-safe comparison functions to prevent timing attacks, 5) Store algorithm parameters with the hash (modern formats do this automatically), 6) Plan for algorithm upgrades—design systems to support multiple hash types, 7) Log authentication failures for security monitoring, but never log passwords or hashes, 8) Implement rate limiting on authentication endpoints, 9) Use secure session management post-authentication, 10) Consider implementing password strength validation before hashing. While SHA-Crypt is secure, for new applications consider bcrypt or Argon2 which have broader security analysis and may offer easier implementation in modern frameworks.{" "}
              <a
                className="underline text-blue-700"
                target="_blank"
                rel="noopener noreferrer"
                href="https://passlib.readthedocs.io/en/stable/"
              >
                Passlib - Comprehensive Password Hashing Library
              </a>
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold text-gray-800 my-4">
              Comparing SHA-Crypt with Alternative Algorithms
            </h2>
            <p className="text-justify text-gray-600">
              SHA-Crypt sits among several viable password hashing options. Compared to bcrypt: both provide strong security, bcrypt has longer track record (since 1999), bcrypt is slightly more resistant to GPU attacks due to memory access patterns, SHA-Crypt can be faster on 64-bit systems with high rounds. Compared to scrypt: scrypt provides memory-hardness that SHA-Crypt lacks, scrypt is more resistant to specialized hardware attacks, but has less widespread implementation. Compared to Argon2: Argon2 won the Password Hashing Competition (2015), provides both time and memory hardness, offers multiple variants (Argon2i, Argon2d, Argon2id), but has shorter real-world usage history. For Linux system passwords, SHA-512-Crypt remains the de facto standard due to native PAM support, proven security, and excellent compatibility. For application passwords, bcrypt or Argon2id are increasingly preferred. The choice depends on: compatibility requirements, performance constraints, security requirements, and available library support. All these modern algorithms are vastly superior to MD5, SHA1, or unsalted hashing.{" "}
              <a
                className="underline text-blue-700"
                target="_blank"
                rel="noopener noreferrer"
                href="https://password-hashing.net/"
              >
                Password Hashing Competition
              </a>
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold text-gray-800 my-4">
              Future Considerations and Algorithm Agility
            </h2>
            <p className="text-justify text-gray-600">
              As computing power continues advancing, maintaining security requires algorithm agility. SHA-Crypt's configurable round count provides some adaptability—as hardware improves, administrators can increase rounds. However, the underlying SHA-2 algorithm, while currently secure, may eventually face threats from quantum computing or cryptanalytic advances. Planning for future migrations: 1) Design systems to support multiple hash formats simultaneously, 2) Implement automatic hash strength detection and upgrade mechanisms, 3) Monitor NIST and cryptographic community recommendations, 4) Plan for gradual migrations rather than sudden changes, 5) Maintain backward compatibility during transitions, 6) Document hash formats and migration procedures, 7) Consider periodic security audits to assess current hash strength. Quantum computing concerns: SHA-2 is more resistant to quantum attacks than public-key cryptography, but Grover's algorithm could theoretically weaken it. However, doubling hash length provides adequate quantum resistance. Likely timeline: SHA-Crypt will remain secure for 10-20+ years, but organizations should prepare for eventual migration to post-quantum algorithms as they mature and standardize.{" "}
              <a
                className="underline text-blue-700"
                target="_blank"
                rel="noopener noreferrer"
                href="https://csrc.nist.gov/projects/post-quantum-cryptography"
              >
                NIST Post-Quantum Cryptography
              </a>
            </p>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Frequently Asked Questions
            </h2>
            
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2 text-gray-700">
                What's the difference between $5$ and $6$ hashes?
              </h3>
              <p className="text-justify text-gray-600">
                $5$ indicates SHA-256-Crypt (256-bit hash), while $6$ indicates SHA-512-Crypt (512-bit hash). Both are secure, but SHA-512-Crypt is generally preferred for its larger security margin and better performance on 64-bit systems. Modern Linux distributions default to $6$ (SHA-512-Crypt).
              </p>
            </div>

            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2 text-gray-700">
                How many rounds should I use for SHA-Crypt?
              </h3>
              <p className="text-justify text-gray-600">
                As of 2025, security experts recommend at least 500,000 rounds for new systems. The default of 5,000 is too low by modern standards. Higher rounds increase security but also CPU usage during authentication. Test on your hardware—aim for 250-1000ms authentication time, which provides good security while maintaining acceptable user experience.
              </p>
            </div>

            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2 text-gray-700">
                Is SHA-Crypt better than bcrypt?
              </h3>
              <p className="text-justify text-gray-600">
                Both provide strong security when properly configured. Bcrypt has a longer track record and slightly better GPU resistance. SHA-Crypt can be faster on 64-bit systems and has native Linux support. For Linux system passwords, use SHA-512-Crypt. For application passwords, either is excellent—choose based on library support and compatibility requirements.
              </p>
            </div>

            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2 text-gray-700">
                Can I change the round count on existing passwords?
              </h3>
              <p className="text-justify text-gray-600">
                No, you cannot change the round count of existing hashes without knowing the plaintext password. However, you can configure your system to use higher rounds for new passwords and changed passwords. Over time, as users change passwords, your system will gradually transition to the new round count. You can accelerate this with forced password resets.
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
                  href="https://www.akkadia.org/drepper/SHA-crypt.txt"
                  className="text-blue-700 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SHA-Crypt Official Specification
                </a>
              </li>
              <li>
                <a
                  href="https://man7.org/linux/man-pages/man3/crypt.3.html"
                  className="text-blue-700 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Linux Crypt Manual Page
                </a>
              </li>
              <li>
                <a
                  href="https://passlib.readthedocs.io/en/stable/lib/passlib.hash.sha512_crypt.html"
                  className="text-blue-700 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Passlib SHA-512-Crypt Documentation
                </a>
              </li>
              <li>
                <a
                  href="https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html"
                  className="text-blue-700 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  OWASP Password Storage Best Practices
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex gap-x-8 gap-y-4 justify-center flex-wrap mt-8">
          <a
            className="underline text-blue-700"
            href="/md5-crypt"
          >
            Go to MD5-Crypt Hash Converter
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
            href="/mysql"
          >
            Go to MySQL Hash Converter
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

export default SHACrypt;
