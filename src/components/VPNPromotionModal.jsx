import React, { useState, useEffect } from 'react';
import ShieldCheckIcon from '@mui/icons-material/Shield';
import CloseIcon from '@mui/icons-material/Close';
import SecurityIcon from '@mui/icons-material/Security';
import SpeedIcon from '@mui/icons-material/Speed';
import PublicIcon from '@mui/icons-material/Public';

/**
 * VPN Promotion Modal Component
 * Shows strategic popups to increase affiliate conversions
 * 
 * Features:
 * - Exit-intent detection
 * - Time-delayed popup
 * - Mobile responsive
 * - Easy dismissal
 * - Local storage to avoid annoying repeat visitors
 */
const VPNPromotionModal = ({ 
  affiliateLink = 'https://go.nordvpn.net/aff_c?offer_id=15&aff_id=134111&url_id=902',
  showAfterSeconds = 30, // Show popup after 30 seconds
  exitIntentEnabled = true, // Enable exit-intent
  timeDelayEnabled = true, // Enable time-delay
  onClose 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Check if user has already seen the popup today
    const lastShown = localStorage.getItem('vpn-modal-shown');
    const today = new Date().toDateString();
    
    if (lastShown === today) {
      return; // Don't show if already shown today
    }

    // Time-delayed popup
    let timeoutId;
    if (timeDelayEnabled && !hasShown) {
      timeoutId = setTimeout(() => {
        if (!hasShown) {
          showModal('time-delay');
        }
      }, showAfterSeconds * 1000);
    }

    // Exit-intent detection
    const handleMouseLeave = (e) => {
      if (exitIntentEnabled && !hasShown && e.clientY < 10) {
        showModal('exit-intent');
      }
    };

    if (exitIntentEnabled) {
      document.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      if (exitIntentEnabled) {
        document.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [exitIntentEnabled, timeDelayEnabled, showAfterSeconds, hasShown]);

  const showModal = (trigger) => {
    if (!hasShown) {
      setIsVisible(true);
      setHasShown(true);
      // Store in localStorage to prevent showing multiple times today
      localStorage.setItem('vpn-modal-shown', new Date().toDateString());
    }
  };

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => {
      setIsVisible(false);
      setIsExiting(false);
      if (onClose) onClose();
    }, 300);
  };

  const handleCtaClick = () => {
    // Track conversion attempt
    window.gtag && window.gtag('event', 'affiliate_click', {
      'event_category': 'NordVPN',
      'event_label': 'Modal Popup',
      'value': 1
    });
    window.open(affiliateLink, '_blank');
    handleClose();
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${
          isExiting ? 'opacity-0' : 'opacity-100'
        }`}
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div 
        className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md md:max-w-lg transition-all duration-300 ${
          isExiting ? 'scale-95 opacity-0' : 'scale-100 opacity-100'
        }`}
      >
        <div className="bg-white rounded-2xl shadow-2xl mx-4 md:mx-0 overflow-hidden">
          {/* Header with close button */}
          <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6">
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-white hover:bg-white hover:bg-opacity-20 rounded-full p-1 transition-all"
              aria-label="Close"
            >
              <CloseIcon />
            </button>
            
            <div className="flex items-center gap-3 mb-2">
              <ShieldCheckIcon className="text-4xl" />
              <div>
                <h2 className="text-2xl font-bold">Wait! Protect Your Privacy</h2>
                <p className="text-blue-100 text-sm">Special offer for hash-converter users</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="mb-6">
              <p className="text-gray-700 text-lg mb-4">
                🔒 <strong>Are you protecting your online activity?</strong>
              </p>
              <p className="text-gray-600 mb-4">
                As someone working with sensitive data and hashes, securing your connection is crucial. 
                NordVPN provides military-grade encryption to keep your work private.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <SecurityIcon className="text-blue-600 mt-1" />
                <div>
                  <strong className="text-gray-800">AES-256 Encryption</strong>
                  <p className="text-sm text-gray-600">Military-grade security for your data</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <SpeedIcon className="text-blue-600 mt-1" />
                <div>
                  <strong className="text-gray-800">Lightning-Fast Speeds</strong>
                  <p className="text-sm text-gray-600">6000+ servers in 60 countries</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <PublicIcon className="text-blue-600 mt-1" />
                <div>
                  <strong className="text-gray-800">True No-Logs Policy</strong>
                  <p className="text-sm text-gray-600">Independently audited privacy</p>
                </div>
              </div>
            </div>

            {/* Urgency Banner */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
              <p className="text-sm text-yellow-800 font-semibold text-center">
                ⚡ Limited Time: Get up to 69% OFF + 3 months FREE
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-3">
              <button
                onClick={handleCtaClick}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-6 rounded-xl transition-all transform hover:scale-105 shadow-lg"
              >
                🔥 Claim Your Exclusive Discount
              </button>
              
              <button
                onClick={handleClose}
                className="w-full text-gray-500 hover:text-gray-700 text-sm py-2"
              >
                No thanks, I'll risk my privacy
              </button>
            </div>

            {/* Trust Signals */}
            <div className="mt-6 pt-4 border-t border-gray-200">
              <div className="flex items-center justify-center gap-6 text-xs text-gray-500">
                <span>✓ 30-Day Money-Back</span>
                <span>✓ 24/7 Support</span>
                <span>✓ 14M+ Users</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VPNPromotionModal;

