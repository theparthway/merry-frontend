import React from 'react';
import logo from '../assets/logo.svg'

const Footer: React.FC = () => {

  return (
    <section className="flex flex-col h-screen bg-gradient2">
      <div className="flex flex-col items-center text-center p-12 mt-12 max-w-full">
        <img src={logo} alt="logo" />
        <h2 className="text-4xl font-bold mb-4">Do you like Merry?</h2>
        <button className="px-6 py-3 bg-button1 text-buttontext font-bold">Give us a star on GitHub</button>
      </div>
    </section>
  );
};

export default Footer;
