import React, { useState } from 'react';
import heroImageLight from '../assets/hero-img-light.svg';
import heroImage from '../assets/hero-img-dark.svg';
import logoImage from '../assets/logo.svg';
import heroBg from '../assets/hero-bg.svg';
import heroBgLight from '../assets/light-hero-bg.svg';
import darkModeIcon from '../assets/dark-mode-icon.svg';
import lightModeIcon from '../assets/light-mode-icon.svg';

import heroText from '../assets/hero-text.svg';
import heroTextLight from '../assets/hero-text-light.svg';

const Hero: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`relative w-full h-screen dark:bg-overlay bg-cover bg-center`}>
      <div className={`absolute inset-0 dark:opacity-[34%] bg-cover bg-center`} style={{ backgroundImage: `url(${isDarkMode ? heroBg : heroBgLight})` }}></div>
      <div className="relative z-10 flex flex-col items-center justify-between h-full p-8 md:flex-row md:pl-32">

        <div className="absolute top-4 left-4 md:top-12 md:left-32">
          <img src={logoImage} alt="Logo" className="w-8 h-8 md:w-12 md:h-12" />
        </div>

        <div className="absolute top-4 right-4 md:top-12 md:right-32">
          <button onClick={toggleDarkMode}>
            <img src={isDarkMode ? darkModeIcon : lightModeIcon} alt="Toggle Dark Mode" className="w-8 h-8 md:w-16 md:h-16" />
          </button>
        </div>

        <div className="text-white max-w-lg mb-8 md:mb-0">
          <div className="flex flex-col gap-8 mb-4">
            <img src={isDarkMode ? heroText : heroTextLight} alt="Merry Bitcoin" className='w-full md:w-3/4' />
          </div>
          <p className={`text-lg text-darkblue dark:text-white md:text-2xl my-8`}>An adventurous docker box for special Bitcoin and Liquid sailings.</p>
          <button className="px-12 py-2 md:px-24 bg-darkblue text-white font-bold rounded-full">Install</button>
        </div>

        <div className="lg:w-1/2 md:w-1/4 sm:w-1/2 absolute -bottom-1 right-0">
          <img src={isDarkMode ? heroImage : heroImageLight} alt="Hero" className="w-3/4 md:w-full object-contain" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
