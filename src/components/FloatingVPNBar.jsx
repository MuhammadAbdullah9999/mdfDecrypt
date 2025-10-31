import React, { useState, useEffect } from 'react';
import SecurityIcon from '@mui/icons-material/Security';
import CloseIcon from '@mui/icons-material/Close';

/**
 * Floating VPN Notification Bar
 * Non-intrusive sticky bar that stays at the bottom of the screen
 * Can be dismissed by users
 */
const FloatingVPNBar = ({ 
  affiliateLink = 'https://go.nordvpn.net/aff_c?offer_id=15&aff_id=134111&url_id=902',
  showAfterScroll = 300 // Show after scrolling 300px
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if user dismissed it in this session
    const dismissed = sessionStorage.getItem('vpn-bar-dismissed');
    if (dismissed) {
      setIsDismissed(true);
      return;
    }

    const handleScroll = () => {
      if (window.scrollY > showAfterScroll && !isDismissed) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showAfterScroll, isDismissed]);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    sessionStorage.setItem('vpn-bar-dismissed', 'true');
  };

  const handleClick = () => {
    window.gtag && window.gtag('event', 'affiliate_click', {
      'event_category': 'NordVPN',
      'event_label': 'Floating Bar',
      'value': 1
    });
  };

  if (!isVisible || isDismissed) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 animate-slide-up">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-3 flex-1">
              <SecurityIcon className="text-2xl hidden sm:block" />
              <div className="flex-1">
                <p className="text-sm sm:text-base font-semibold">
                  🔒 Protect Your Online Privacy with NordVPN
                </p>
                <p className="text-xs text-blue-100 hidden sm:block">
                  Get 69% OFF + 3 months FREE | 30-day money-back guarantee
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <a
                href={affiliateLink}
                target="_blank"
                rel="noopener noreferrer sponsored"
                onClick={handleClick}
                className="bg-white text-blue-700 hover:bg-blue-50 font-bold px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base transition-all transform hover:scale-105 whitespace-nowrap"
              >
                Get Deal →
              </a>
              
              <button
                onClick={handleDismiss}
                className="text-white hover:bg-white hover:bg-opacity-20 rounded-full p-1 transition-all ml-2"
                aria-label="Dismiss"
              >
                <CloseIcon fontSize="small" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingVPNBar;

