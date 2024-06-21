import React from 'react';
import heroImage from '../assets/hero-img.svg'; // Make sure to place an image in the assets folder

const Hero: React.FC = () => {
  return (
    <div className="relative w-full h-screen opacity-[34%] bg-cover bg-center" style={{ backgroundImage: `url('/src/assets/hero-bg.jpeg')` }}>
      <div className="absolute inset-0 opacity-5 bg-overlay"></div> {/* Optional dark overlay */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between h-full p-8">
        <div className="text-white max-w-lg">
          <h1 className="text-5xl font-bold mb-4">Merry Bitcoin</h1>
          <p className="text-2xl mb-8">A adventurous docker box for special Bitcoin and Liquid sailings.</p>
          <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded">Install</button>
        </div>
        <div className="md:flex md:items-end md:justify-end md:w-1/2">
          <img src={heroImage} alt="Hero" className="max-w-full h-full object-contain md:object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
