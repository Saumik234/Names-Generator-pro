import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="py-6 px-4 sm:px-6 lg:px-8 bg-white/30 backdrop-blur-lg sticky top-0 z-20 shadow-md">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          <span className="bg-gradient-to-r from-green-500 via-teal-500 to-cyan-500 text-transparent bg-clip-text">
            Multiple Names Generator Pro
          </span>
        </h1>
        <p className="mt-2 text-lg text-gray-700">Your creative partner for the perfect name</p>
      </div>
    </header>
  );
};

export default React.memo(Header);