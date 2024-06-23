import React, { useState } from 'react';
import heroImage from '../assets/hero-img.svg';
import logoImage from '../assets/logo.svg'; // Your logo image
import heroBg from '../assets/hero-bg.svg';
import heroBgLight from '../assets/light-hero-bg.svg';
import darkModeIcon from '../assets/dark-mode-icon.svg';
import lightModeIcon from '../assets/light-mode-icon.svg';

import heroText from '../assets/hero-text.svg';
import heroTextLight from '../assets/hero-text-light.svg';

const Hero: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`relative w-full h-screen bg-overlay bg-cover bg-center`}>
      <div className={`absolute inset-0 opacity-[${isDarkMode ? "34%" : "60%"} bg-cover bg-center`} style={{ backgroundImage: `url(${isDarkMode ? heroBg : heroBgLight})` }}></div>
      <div className="relative z-10 flex flex-col items-center justify-between h-full p-8 md:flex-row md:pl-24">

        {/* Top Left Logo */}
        <div className="absolute top-4 left-4 md:top-12 md:left-24">
          <img src={logoImage} alt="Logo" className="w-8 h-8 md:w-12 md:h-12" />
        </div>

        {/* Top Right Dark Mode Button */}
        <div className="absolute top-4 right-4 md:top-12 md:right-16">
          <button onClick={toggleDarkMode}>
            <img src={isDarkMode ? darkModeIcon : lightModeIcon} alt="Toggle Dark Mode" className="w-8 h-8 md:w-16 md:h-16" />
          </button>
        </div>

        {/* Hero Content */}
        <div className="text-white max-w-lg mb-8 md:mb-0">
          <div className="flex flex-col gap-8 mb-4">
            <img src={isDarkMode ? heroText : heroTextLight} alt="Merry Bitcoin" className='w-full md:w-3/4' />
          </div>
          <p className={`text-lg text-darkblue dark:text-white md:text-2xl mb-8`}>An adventurous docker box for special Bitcoin and Liquid sailings.</p>
          <button className="px-12 py-2 md:px-24 bg-darkblue text-white font-bold rounded-full">Install</button>
        </div>

        {/* Hero Image */}
        <div className="w-full md:w-1/2 absolute bottom-0 right-0">
          <img src={heroImage} alt="Hero" className="w-3/4 md:w-full object-contain" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
