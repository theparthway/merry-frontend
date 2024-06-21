import React from 'react';
import Hero from '../components/Hero';
import Description from '../components/Description'
import Commands from '../components/Commands';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col text-white min-h-screen">
        <Hero />
        <Description />
        <Commands />
    </div>
  );
};

export default Home;
