import React from 'react';
import SecurityIcon from '@mui/icons-material/Security';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import VpnKeyIcon from '@mui/icons-material/VpnKey';

/**
 * Affiliate Tool Box Component
 * Displays recommended security tools with affiliate links
 * Can be placed in blog posts, converter pages, or sidebar
 */
const AffiliateToolBox = ({ 
  title = "🔒 Recommended Security Tools",
  variant = "default" // 'default', 'compact', 'sidebar'
}) => {
  
  const tools = [
    {
      name: 'NordVPN',
      description: 'Secure your connection with military-grade encryption',
      discount: '69% OFF',
      badge: '⭐ #1 Rated',
      link: 'https://go.nordvpn.net/aff_c?offer_id=15&aff_id=134111&url_id=902',
      icon: <VpnKeyIcon className="text-blue-600" />
    },
    {
      name: 'Burp Suite Pro',
      description: 'Professional web security testing',
      discount: 'Free Trial',
      badge: '🔥 Popular',
      link: '#', // Replace with your Burp Suite affiliate link when you get it
      icon: <SecurityIcon className="text-green-600" />
    },
    {
      name: '1Password',
      description: 'Best-in-class password management',
      discount: 'Try Free',
      badge: '🛡️ Secure',
      link: '#', // Replace with your 1Password affiliate link when you get it
      icon: <VerifiedUserIcon className="text-purple-600" />
    }
  ];

  const handleClick = (toolName) => {
    // Track affiliate click in Google Analytics
    window.gtag && window.gtag('event', 'affiliate_click', {
      'event_category': 'Affiliate',
      'event_label': toolName,
      'value': 1
    });
  };

  // Compact variant for inline placement
  if (variant === 'compact') {
    return (
      <div className="bg-blue-50 border-l-4 border-blue-600 p-4 my-6 rounded">
        <h3 className="font-bold text-lg mb-2">{title}</h3>
        <div className="space-y-2">
          {tools.map((tool, index) => (
            <a
              key={index}
              href={tool.link}
              target="_blank"
              rel="noopener noreferrer sponsored"
              onClick={() => handleClick(tool.name)}
              className="flex items-center justify-between bg-white p-3 rounded hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-2">
                {tool.icon}
                <span className="font-semibold text-sm">{tool.name}</span>
              </div>
              <span className="text-blue-600 text-sm font-semibold">{tool.discount} →</span>
            </a>
          ))}
        </div>
        <p className="text-xs text-gray-500 mt-3">
          Affiliate disclosure: We may earn commission at no cost to you.
        </p>
      </div>
    );
  }

  // Sidebar variant for narrow spaces
  if (variant === 'sidebar') {
    return (
      <div className="bg-white rounded-lg shadow-lg p-4 sticky top-4">
        <h3 className="font-bold text-lg mb-4 text-center">{title}</h3>
        <div className="space-y-4">
          {tools.map((tool, index) => (
            <div key={index} className="border-b pb-4 last:border-b-0">
              <div className="flex items-center gap-2 mb-2">
                {tool.icon}
                <h4 className="font-semibold text-sm">{tool.name}</h4>
              </div>
              <p className="text-xs text-gray-600 mb-2">{tool.description}</p>
              <a
                href={tool.link}
                target="_blank"
                rel="noopener noreferrer sponsored"
                onClick={() => handleClick(tool.name)}
                className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded text-sm font-semibold transition-colors"
              >
                {tool.discount} →
              </a>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-500 mt-4 text-center">
          We may earn commission
        </p>
      </div>
    );
  }

  // Default variant - full featured
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 my-8 shadow-lg border border-gray-200">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-blue-600 p-2 rounded-lg">
          <SecurityIcon className="text-white" fontSize="large" />
        </div>
        <div>
          <h3 className="font-bold text-xl text-gray-800">{title}</h3>
          <p className="text-sm text-gray-600">Trusted by security professionals</p>
        </div>
      </div>
      
      <div className="space-y-4">
        {tools.map((tool, index) => (
          <div key={index} className="bg-white rounded-lg p-5 shadow hover:shadow-md transition-all">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  {tool.icon}
                  <h4 className="font-semibold text-lg text-gray-800">{tool.name}</h4>
                  <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
                    {tool.badge}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-3">{tool.description}</p>
                <a
                  href={tool.link}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  onClick={() => handleClick(tool.name)}
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-sm font-semibold transition-colors transform hover:scale-105"
                >
                  {tool.discount} →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 pt-4 border-t border-gray-300">
        <p className="text-xs text-gray-500 text-center">
          <strong>Affiliate disclosure:</strong> We may earn a commission from these links at no additional cost to you. 
          We only recommend tools we personally use and trust.
        </p>
      </div>
    </div>
  );
};

export default AffiliateToolBox;

