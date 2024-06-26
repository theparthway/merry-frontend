import React from 'react';
import logo from '../assets/logo.svg'

const Footer: React.FC = () => {
  return (
    <section className="flex flex-col bg-gradient2">
      <div className="flex flex-col items-center text-center mb-40 max-w-full">
        <img src={logo} alt="logo" className="w-1/6 mb-8 mt-10" />
        <h2 className="text-2xl md:text-4xl font-bold mb-4">Do you like Merry?</h2>
        <a target='_blank' href="https://github.com/catalogfi/merry" className="px-4 py-2 md:px-6 md:py-3 bg-gradient-to-b from-buttongradient1 to-buttongradient2 cursor-pointer text-buttontext font-bold">Give us a star on GitHub</a>
      </div>
    </section>
  );
};

export default Footer;
