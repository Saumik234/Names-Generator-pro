
import React from 'react';
import { PageView } from '../types';

interface FooterProps {
  onNavigate: (view: PageView) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const footerLinks = [
    { label: 'About Us', view: PageView.ABOUT },
    { label: 'Terms & Conditions', view: PageView.TERMS },
    { label: 'Privacy Policy', view: PageView.PRIVACY },
    { label: 'Contact Us', view: PageView.CONTACT },
    { label: 'Disclaimer', view: PageView.DISCLAIMER },
  ];

  return (
    <footer className="bg-transparent mt-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto text-center text-gray-600">
        <div className="flex justify-center items-center flex-wrap gap-x-6 gap-y-2 mb-4">
          {footerLinks.map((link) => (
            <button
              key={link.view}
              onClick={() => onNavigate(link.view)}
              className="hover:text-gray-900 transition-colors duration-200"
            >
              {link.label}
            </button>
          ))}
        </div>
        <p>&copy; {new Date().getFullYear()} Multiple Names Generator Pro. All rights reserved.</p>
        <p className="text-sm mt-1">Powered by Google Gemini</p>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
