
import React from 'react';
import { PageView } from '../types';

interface StaticPageProps {
  title: string;
  content: string[];
  onBack: () => void;
}

const StaticPage: React.FC<StaticPageProps> = ({ title, content, onBack }) => {
  return (
    <div className="bg-white/40 backdrop-blur-lg rounded-xl shadow-2xl p-6 md:p-10 max-w-4xl w-full mx-auto animate-fade-in">
      <button
        onClick={onBack}
        className="mb-6 bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        Back to Generator
      </button>
      <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-green-500 to-teal-500 text-transparent bg-clip-text">{title}</h2>
      <div className="space-y-4 text-gray-700">
        {content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};

export default React.memo(StaticPage);