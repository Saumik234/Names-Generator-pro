import React from 'react';
import { FAQ_CONTENT } from '../constants';

const FAQ: React.FC = () => {
  return (
    <div className="my-16 max-w-4xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Frequently Asked Questions
      </h2>
      <div className="space-y-6">
        {FAQ_CONTENT.map((item, index) => (
          <div key={index} className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-green-100 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold text-teal-800 mb-2 flex items-center gap-2">
              <span className="bg-teal-100 text-teal-600 rounded-full w-8 h-8 flex items-center justify-center text-sm flex-shrink-0">Q</span>
              {item.question}
            </h3>
            <div className="ml-10 text-gray-700 leading-relaxed">
              {item.answer}
            </div>
          </div>
        ))}
      </div>
      {/* SEO Content Block for Keyword Density */}
      <div className="mt-12 text-gray-600 text-sm text-center max-w-3xl mx-auto bg-green-50/80 p-6 rounded-lg border border-green-100">
        <h3 className="font-bold mb-2 text-gray-800">About Multiple Names Generator Pro</h3>
        <p>
          Welcome to the ultimate <strong>AI Name Generator</strong>. Whether you are looking for a <em>Business Name Generator</em> to launch your startup, a <em>Baby Name Generator</em> for your newborn, or a <em>Brand Name Generator</em> to redefine your identity, our tool delivers. Powered by Gemini technology, we provide unique, creative, and cool names for every niche including fantasy characters, pets, YouTube channels, and more. Start generating today and find the perfect name instantly.
        </p>
      </div>
    </div>
  );
};

export default React.memo(FAQ);