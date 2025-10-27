import React from 'react';

/**
 * Reusable NordVPN Affiliate Banner Component
 * 
 * @param {string} type - Banner type: 'horizontal', 'vertical', 'square', 'inline', 'bottom'
 * @param {string} affiliateLink - Your NordVPN affiliate link
 * @param {string} className - Additional CSS classes
 */
const NordVpnBanner = ({ 
  type = 'horizontal', 
  affiliateLink = 'https://go.nordvpn.net/aff_c?offer_id=15&aff_id=134111&url_id=902',
  className = ''
}) => {
  
  const bannerConfigs = {
    horizontal: {
      image: '/generic-banners-explore-the-internet-1500x300.png',
      containerClass: 'w-full max-w-4xl mx-auto my-6',
      imageClass: 'w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300',
      alt: 'NordVPN - Explore the internet without borders'
    },
    vertical: {
      image: '/generic-banners-explore-the-internet-300x600.png',
      containerClass: 'w-full max-w-[300px] my-4',
      imageClass: 'w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300',
      alt: 'NordVPN - Secure your connection'
    },
    square: {
      image: '/generic-banners-explore-the-internet-1200x1200.png',
      containerClass: 'w-full max-w-md mx-auto my-6',
      imageClass: 'w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300',
      alt: 'NordVPN - Get Protected Now'
    },
    inline: {
      image: '/NordVPN_Logo_RGB_Primary_Blue_Black-01.svg',
      containerClass: 'inline-flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300',
      imageClass: 'h-8 w-auto',
      alt: 'NordVPN Logo',
      showText: true
    },
    bottom: {
      image: '/generic-banners-explore-the-internet-1500x300.png',
      containerClass: 'w-full mt-8 mb-4',
      imageClass: 'w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300',
      alt: 'NordVPN - Protect your online privacy'
    }
  };

  const config = bannerConfigs[type] || bannerConfigs.horizontal;

  return (
    <div className={`${config.containerClass} ${className} `}>
      <a 
        href={affiliateLink} 
        target="_blank" 
        rel="noopener noreferrer sponsored"
        className="block"
        aria-label="Get NordVPN"
      >
        {config.showText ? (
          <div className="flex items-center gap-3">
            <img 
              src={config.image} 
              alt={config.alt}
              className={config.imageClass}
              loading="lazy"
            />
            <span className="text-sm font-semibold text-gray-700">
              Secure Your Connection
            </span>
          </div>
        ) : (
          <img 
            src={config.image} 
            alt={config.alt}
            className={config.imageClass}
            loading="lazy"
          />
        )}
      </a>
    </div>
  );
};

export default NordVpnBanner;

