import React from 'react';
import { Shield, Lock, Visibility, Storage, Cookie, VerifiedUser } from '@mui/icons-material';

const PrivacyPolicy = () => {
  const lastUpdated = "October 20, 2025";

  const sections = [
    {
      icon: <Storage className="text-blue-600" />,
      title: "Information We Collect",
      content: [
        {
          subtitle: "Usage Data",
          text: "We may collect information about how you access and use our service, including your IP address, browser type, pages visited, and time spent on pages."
        },
        {
          subtitle: "Cookies and Tracking",
          text: "We use cookies and similar tracking technologies to track activity on our service and hold certain information to improve user experience."
        }
      ]
    },
    {
      icon: <Lock className="text-blue-600" />,
      title: "How We Use Your Information",
      content: [
        {
          subtitle: "Service Provision",
          text: "To provide, maintain, and improve our hash conversion tools and services."
        },
        {
          subtitle: "Communication",
          text: "To respond to your comments, questions, and provide customer support."
        },
        {
          subtitle: "Analytics",
          text: "To monitor and analyze usage patterns and trends to improve user experience."
        },
        {
          subtitle: "Security",
          text: "To detect, prevent, and address technical issues and protect against malicious activity."
        }
      ]
    },
    {
      icon: <Shield className="text-blue-600" />,
      title: "Data Security",
      content: [
        {
          subtitle: "Security Measures",
          text: "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction."
        },
        {
          subtitle: "Client-Side Processing",
          text: "All hash conversions are performed locally in your browser. We do not transmit or store any sensitive data you enter into our conversion tools."
        },
        {
          subtitle: "No Guarantee",
          text: "While we strive to protect your information, no method of transmission over the Internet is 100% secure. We cannot guarantee absolute security."
        }
      ]
    },
    {
      icon: <Visibility className="text-blue-600" />,
      title: "Third-Party Services",
      content: [
        {
          subtitle: "Analytics Providers",
          text: "We may use third-party service providers like Google Analytics to monitor and analyze usage of our service."
        },
        {
          subtitle: "Hosting Services",
          text: "Our service is hosted on third-party platforms that may have access to certain technical data."
        },
        {
          subtitle: "Third-Party Privacy Policies",
          text: "We advise you to review the privacy policies of any third-party services you interact with through our platform."
        }
      ]
    },
    {
      icon: <VerifiedUser className="text-blue-600" />,
      title: "Your Rights",
      content: [
        {
          subtitle: "Access and Correction",
          text: "You have the right to access and update your personal information."
        },
        {
          subtitle: "Data Deletion",
          text: "You may request deletion of your personal data, subject to certain legal obligations."
        },
        {
          subtitle: "Opt-Out",
          text: "You can opt-out of certain data collection by adjusting your browser settings or contacting us."
        },
        {
          subtitle: "Complaints",
          text: "You have the right to lodge a complaint with a supervisory authority if you believe your privacy rights have been violated."
        }
      ]
    },
    {
      icon: <Cookie className="text-blue-600" />,
      title: "Cookies Policy",
      content: [
        {
          subtitle: "What Are Cookies",
          text: "Cookies are small text files stored on your device that help us provide and improve our services."
        },
        {
          subtitle: "Types of Cookies We Use",
          text: "We use session cookies (temporary) and persistent cookies (stored for longer periods) for various purposes including authentication, preferences, and analytics."
        },
        {
          subtitle: "Managing Cookies",
          text: "You can instruct your browser to refuse all cookies or indicate when a cookie is being sent. However, some features may not function properly without cookies."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="bg-blue-100 rounded-full p-4">
              <Shield className="text-blue-600" style={{ fontSize: '48px' }} />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-600">
            Last updated: {lastUpdated}
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <p className="text-gray-700 leading-relaxed mb-4">
            This Privacy Policy describes how we collect, use, and protect your information when you visit and use our hash conversion tools and services (the "Service").
          </p>
          <p className="text-gray-700 leading-relaxed">
            We respect your privacy and are committed to protecting your personal data. Please read this privacy policy carefully to understand our practices regarding your personal information.
          </p>
        </div>

        {/* Sections */}
        {sections.map((section, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-start space-x-4 mb-6">
              <div className="bg-blue-100 rounded-full p-3 flex-shrink-0">
                {section.icon}
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 pt-2">{section.title}</h2>
            </div>
            
            <div className="space-y-6">
              {section.content.map((item, itemIndex) => (
                <div key={itemIndex}>
                  <h3 className="font-semibold text-gray-900 mb-2">{item.subtitle}</h3>
                  <p className="text-gray-700 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Children's Privacy */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Children's Privacy</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our Service is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13.
          </p>
          <p className="text-gray-700 leading-relaxed">
            If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately so we can take appropriate action.
          </p>
        </div>

        {/* Changes to Policy */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
          </p>
          <p className="text-gray-700 leading-relaxed">
            You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
          </p>
        </div>

        {/* Contact Section */}
        {/* <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl shadow-lg p-8 text-white">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="mb-4 text-blue-100">
            If you have any questions about this Privacy Policy or our data practices, please contact us:
          </p>
          <div className="space-y-2">
            <p>
              <span className="font-semibold">Email:</span>{' '}
              <a href="mailto:privacy@hashconverter.com" className="underline hover:text-blue-200 transition duration-200">
                privacy@hashconverter.com
              </a>
            </p>
            <p>
              <span className="font-semibold">Address:</span> 123 Security Street, Tech City, TC 12345, United States
            </p>
          </div>
        </div> */}

        {/* Consent */}
        <div className="mt-8 bg-green-50 border-l-4 border-green-500 rounded-lg p-6">
          <p className="text-gray-800">
            <span className="font-semibold">Your Consent:</span> By using our Service, you consent to this Privacy Policy and agree to its terms.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

