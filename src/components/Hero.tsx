import React, { useState } from 'react';
import heroImage from '../assets/hero-img.svg';
import logoImage from '../assets/logo.svg'; // Your logo image
import darkModeIcon from '../assets/dark-mode-icon.svg'; // Your dark mode icon

// Import SVG letters
import M from '../assets/letter-m.svg';
import E from '../assets/letter-e.svg';
import R from '../assets/letter-r.svg';
import Y from '../assets/letter-y.svg';
import B from '../assets/letter-b.svg';
import I from '../assets/letter-i.svg';
import T from '../assets/letter-t.svg';
import C from '../assets/letter-c.svg';
import O from '../assets/letter-o.svg';
import N from '../assets/letter-n.svg';

const Hero: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`relative w-full h-screen bg-overlay bg-cover bg-center ${isDarkMode ? 'dark' : ''}`}>
      <div className="absolute inset-0 opacity-[34%] bg-cover bg-center" style={{ backgroundImage: `url('/src/assets/hero-bg.svg')` }}></div>
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between h-full p-12">
        
        {/* Top Left Logo */}
        <div className="absolute top-12 left-12">
          <img src={logoImage} alt="Logo" className="w-12 h-12" />
        </div>

        {/* Top Right Dark Mode Button */}
        <div className="absolute top-16 right-16">
          <button onClick={toggleDarkMode}>
            <img src={darkModeIcon} alt="Toggle Dark Mode" className="w-16 h-16" />
          </button>
        </div>

        {/* Hero Content */}
        <div className="text-white max-w-lg">
          <div className="flex flex-col gap-8 mb-4">
            <div className='flex space-x-2'>
            <img src={M} alt="M" className="w-20 h-20" />
            <img src={E} alt="E" className="w-20 h-20" />
            <img src={R} alt="R" className="w-20 h-20" />
            <img src={R} alt="R" className="w-20 h-20" />
            <img src={Y} alt="Y" className="w-20 h-20" />
            </div>
            <div className='flex space-x-2'>
            <img src={B} alt="B" className="w-20 h-20" />
            <img src={I} alt="I" className="w-20 h-20" />
            <img src={T} alt="T" className="w-20 h-20" />
            <img src={C} alt="C" className="w-20 h-20" />
            <img src={O} alt="O" className="w-20 h-20" />
            <img src={I} alt="I" className="w-20 h-20" />
            <img src={N} alt="N" className="w-20 h-20" />
            </div>
          </div>
          <p className="text-2xl mb-8">An adventurous docker box for special Bitcoin and Liquid sailings.</p>
          <button className="px-6 py-3 bg-darkblue text-white font-bold rounded">Install</button>
        </div>
        
        <div className="md:flex md:items-end md:justify-end md:w-1/2">
          <img src={heroImage} alt="Hero" className="absolute bottom-0 w-1/2 md:object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
