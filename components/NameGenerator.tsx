import React from 'react';
import { useState } from 'react';
import { CATEGORY_GROUPS } from '../constants';
import { generateNames } from '../services/geminiService';
import { NameSuggestion } from '../types';
import AdPlaceholder from './AdPlaceholder';
import UseCases from './UseCases';
import FAQ from './FAQ';

const NameGenerator: React.FC = () => {
  const [category, setCategory] = useState<string>(CATEGORY_GROUPS[0].categories[0]);
  const [keywords, setKeywords] = useState<string>('');
  const [gender, setGender] = useState<string>('Unisex');
  const [country, setCountry] = useState<string>('');
  const [religion, setReligion] = useState<string>('');
  const [birthYear, setBirthYear] = useState<string>('');
  const [showAdvanced, setShowAdvanced] = useState<boolean>(false);

  const [suggestions, setSuggestions] = useState<NameSuggestion[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuggestions([]);

    try {
      const results = await generateNames(category, keywords, gender, country, religion, birthYear);
      setSuggestions(results);
    } catch (err: any) {
      setError(err.message || 'An unknown error occurred.');
    } finally {
      setIsLoading(false);
    }
  };
  
  const Loader: React.FC = () => (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-teal-500"></div>
      <p className="text-lg text-gray-600">Generating creative names...</p>
    </div>
  );
  
  const ResultCard: React.FC<{suggestion: NameSuggestion}> = ({ suggestion }) => (
     <div className="bg-white/10 backdrop-blur-md rounded-lg p-5 border border-white/20 transform transition-all duration-300 hover:scale-105 hover:bg-white/20 animate-fade-in-up">
        <h3 className="text-xl font-bold text-gray-900">{suggestion.name}</h3>
        <p className="text-gray-700 mt-1">{suggestion.description}</p>
      </div>
  );

  const inputClasses = "w-full bg-white/80 border-gray-300 text-gray-900 rounded-lg p-3 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition";
  const labelClasses = "block text-lg font-medium text-gray-700 mb-2";


  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-white/40 backdrop-blur-lg rounded-xl shadow-2xl p-6 md:p-10">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="category" className={labelClasses}>
              Category
            </label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className={inputClasses}
            >
              {CATEGORY_GROUPS.map((group) => (
                <optgroup key={group.label} label={group.label}>
                  {group.categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="keywords" className={labelClasses}>
              Keywords (Optional)
            </label>
            <input
              type="text"
              id="keywords"
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
              placeholder="e.g., fast, minimal, elegant"
              className={inputClasses}
            />
          </div>

          <div className="text-center pt-2">
            <button
              type="button"
              onClick={() => setShowAdvanced(!showAdvanced)}
              className="text-teal-600 hover:text-teal-800 font-semibold transition-colors duration-200 flex items-center gap-2 mx-auto"
              aria-expanded={showAdvanced}
            >
              <span>{showAdvanced ? 'Hide Advanced Options' : 'Show Advanced Options'}</span>
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 transition-transform duration-300 ${showAdvanced ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          {showAdvanced && (
            <div className="space-y-4 border-t-2 border-green-200 pt-6 animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                  <label htmlFor="gender" className={labelClasses}>Gender</label>
                  <select id="gender" value={gender} onChange={(e) => setGender(e.target.value)} className={inputClasses}>
                    <option value="Unisex">Unisex</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
                 <div>
                    <label htmlFor="birthYear" className={labelClasses}>Birth Year (for style)</label>
                    <input type="number" id="birthYear" value={birthYear} onChange={(e) => setBirthYear(e.target.value)} placeholder={`e.g., ${new Date().getFullYear() - 25}`} min="1800" max={new Date().getFullYear()} className={inputClasses} />
                 </div>
              </div>
              <div>
                <label htmlFor="country" className={labelClasses}>Country/Nationality</label>
                <input type="text" id="country" value={country} onChange={(e) => setCountry(e.target.value)} placeholder="e.g., Japan, Italy, Viking" className={inputClasses} />
              </div>
              <div>
                <label htmlFor="religion" className={labelClasses}>Religion</label>
                <input type="text" id="religion" value={religion} onChange={(e) => setReligion(e.target.value)} placeholder="e.g., Christian, Hindu, Ancient Greek" className={inputClasses} />
              </div>
            </div>
          )}


          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-teal-500 to-green-500 text-white font-bold py-4 px-4 rounded-lg text-xl hover:from-teal-600 hover:to-green-600 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Generating...' : 'Generate Names'}
          </button>
        </form>
      </div>
      
      <div className="my-8">
        <AdPlaceholder sizeLabel="Medium Rectangle (300x250)" className="min-h-[250px] max-w-md mx-auto" />
      </div>

      {!isLoading && suggestions.length === 0 && (
        <>
          <UseCases />
          <FAQ />
        </>
      )}

      <div>
        {isLoading && <Loader />}
        {error && <div className="text-center text-red-400 bg-red-900/50 p-4 rounded-lg">{error}</div>}
        {suggestions.length > 0 && (
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-green-500 to-teal-500 text-transparent bg-clip-text">Your Creative Names</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {suggestions.reduce((acc, suggestion, index) => {
                acc.push(<ResultCard key={`suggestion-${index}`} suggestion={suggestion} />);
                
                const middleIndex = Math.floor(suggestions.length / 2);

                // Insert ad in the middle of the results
                if (index === middleIndex - 1) {
                  acc.push(
                    <div key="ad-middle" className="md:col-span-2 my-4">
                      <AdPlaceholder sizeLabel="Leaderboard Banner (728x90)" className="min-h-[90px]" />
                    </div>
                  );
                }
                
                return acc;
              }, [] as React.ReactNode[])}
            </div>
            <div className="mt-12">
                <FAQ />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default React.memo(NameGenerator);