import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

/**
 * Enhanced VPN Banner with improved CTAs and conversion elements
 * Features: Urgency, social proof, better copy, and prominent CTAs
 */
const EnhancedVPNBanner = ({ 
  affiliateLink = 'https://go.nordvpn.net/aff_c?offer_id=15&aff_id=134111&url_id=902',
  variant = 'default' // 'default', 'security-focused', 'discount-focused'
}) => {
  
  const handleClick = () => {
    window.gtag && window.gtag('event', 'affiliate_click', {
      'event_category': 'NordVPN',
      'event_label': 'Enhanced Banner',
      'value': 1
    });
  };

  const variants = {
    'default': {
      headline: 'Working with Hashes? Protect Your Connection',
      subheadline: 'Military-grade encryption trusted by 14M+ security professionals',
      cta: 'Get 69% OFF + 3 Months FREE',
      highlight: 'Limited Time Offer'
    },
    'security-focused': {
      headline: 'Your Privacy Matters',
      subheadline: 'Zero-logs VPN with independently audited security',
      cta: 'Secure Your Connection Now',
      highlight: 'Rated #1 for Security'
    },
    'discount-focused': {
      headline: '🔥 Massive VPN Discount Alert',
      subheadline: 'Save up to 69% on the world\'s leading VPN service',
      cta: 'Claim Exclusive Deal →',
      highlight: 'Today Only'
    }
  };

  const content = variants[variant] || variants.default;

  return (
    <div className="w-full max-w-4xl mx-auto my-8">
      <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        
        <div className="relative px-6 sm:px-8 py-8">
          {/* Urgency Badge */}
          <div className="inline-flex items-center gap-2 bg-yellow-400 text-yellow-900 px-4 py-1 rounded-full text-xs font-bold mb-4 animate-pulse">
            <TrendingUpIcon fontSize="small" />
            {content.highlight}
          </div>

          <div className="grid md:grid-cols-2 gap-6 items-center">
            {/* Left Column - Content */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                {content.headline}
              </h3>
              <p className="text-blue-100 mb-4 text-sm sm:text-base">
                {content.subheadline}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6 text-white text-sm">
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>6000+ servers in 60 countries</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>No-logs policy (audited)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>30-day money-back guarantee</span>
                </li>
              </ul>

              {/* CTA Button */}
              <a
                href={affiliateLink}
                target="_blank"
                rel="noopener noreferrer sponsored"
                onClick={handleClick}
                className="inline-block bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold px-8 py-4 rounded-xl transition-all transform hover:scale-105 shadow-lg text-center w-full sm:w-auto"
              >
                {content.cta}
              </a>
            </div>

            {/* Right Column - Social Proof & Stats */}
            <div className="hidden md:block">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
                {/* Ratings */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} className="text-yellow-400" fontSize="small" />
                    ))}
                  </div>
                  <span className="text-white font-semibold">4.7/5</span>
                </div>

                {/* Stats */}
                <div className="space-y-3 text-white text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-blue-200">Active Users:</span>
                    <span className="font-bold">14M+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-200">Countries:</span>
                    <span className="font-bold">60+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-200">Servers:</span>
                    <span className="font-bold">6000+</span>
                  </div>
                </div>

                {/* Testimonial */}
                <div className="mt-4 pt-4 border-t border-white border-opacity-20">
                  <p className="text-xs text-blue-100 italic">
                    "Essential for anyone working with sensitive data. The speed is incredible!"
                  </p>
                  <p className="text-xs text-blue-300 mt-1">- Security Professional</p>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-6 pt-4 border-t border-white border-opacity-20">
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-blue-100">
              <span>🛡️ Military-Grade Encryption</span>
              <span>⚡ Ultra-Fast Servers</span>
              <span>🌍 Global Coverage</span>
              <span>💯 Money-Back Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedVPNBanner;

