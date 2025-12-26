import React, { useState, useCallback, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import NameGenerator from './components/NameGenerator';
import StaticPage from './components/StaticPage';
import ContactPage from './components/ContactPage';
import AdPlaceholder from './components/AdPlaceholder';
import { PageView } from './types';
import { STATIC_PAGE_CONTENT } from './constants';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageView>(PageView.GENERATOR);

  const handleNavigate = useCallback((view: PageView) => {
    setCurrentPage(view);
    window.scrollTo(0, 0);
  }, []);

  const handleBack = useCallback(() => {
    setCurrentPage(PageView.GENERATOR);
  }, []);

  // Dynamic Title Management for SEO
  useEffect(() => {
    let title = "Free AI Name Generator | Creative Business, Brand & Baby Names 2025";
    switch (currentPage) {
      case PageView.ABOUT: title = "About Us - Multiple Names Generator Pro"; break;
      case PageView.CONTACT: title = "Contact Us - Multiple Names Generator Pro"; break;
      case PageView.TERMS: title = "Terms & Conditions - Multiple Names Generator Pro"; break;
      case PageView.PRIVACY: title = "Privacy Policy - Multiple Names Generator Pro"; break;
      case PageView.DISCLAIMER: title = "Disclaimer - Multiple Names Generator Pro"; break;
      case PageView.GENERATOR: default: title = "Free AI Name Generator | Creative Business, Brand & Baby Names 2025"; break;
    }
    document.title = title;
  }, [currentPage]);

  const renderContent = () => {
    if (currentPage === PageView.GENERATOR) {
      return <NameGenerator />;
    }
    if (currentPage === PageView.CONTACT) {
      return <ContactPage onBack={handleBack} />;
    }
    const pageData = STATIC_PAGE_CONTENT[currentPage];
    return <StaticPage title={pageData.title} content={pageData.content} onBack={handleBack} />;
  };
  
  const backgroundStyle = {
    background: 'linear-gradient(135deg, #f0fff4, #c6f6d5)',
  };

  const animationStyle = `
    @keyframes fade-in {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes fade-in-up {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-in { animation: fade-in 0.5s ease-out forwards; }
    .animate-fade-in-up { animation: fade-in-up 0.5s ease-out forwards; }
  `;

  return (
    <>
      <style>{animationStyle}</style>
      <div style={backgroundStyle} className="min-h-screen flex flex-col">
        <Header />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-grow w-full">
           <div className="mb-8 hidden md:block">
            <AdPlaceholder sizeLabel="Banner (728x90)" className="min-h-[90px] max-w-3xl mx-auto" />
          </div>
           <div className="mb-8 md:hidden">
            <AdPlaceholder sizeLabel="Mobile Banner (320x100)" className="min-h-[100px]" />
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:flex-grow">
              {renderContent()}
            </div>

            <div className="w-full lg:w-1/3 lg:max-w-xs flex flex-col gap-8">
               <AdPlaceholder sizeLabel="Large Vertical Banner (300x600)" className="min-h-[400px] lg:min-h-[600px]" />
            </div>
          </div>
        </main>
        <Footer onNavigate={handleNavigate} />
      </div>
    </>
  );
};

export default App;