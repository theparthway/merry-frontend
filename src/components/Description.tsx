import React from 'react';
import CodeBlock from './CodeBlock';

const Description: React.FC = () => {
  // Information block data
  const informationBlocks = [
    {
      title: "Bitcoin",
      description: "Quickly fire up a personal Bitcoin blockchain along with Liquid and Electrum.",
      icon: "ℹ️", // Replace with actual icon or emoji
    },
    {
      title: "Bitcoin",
      description: "Quickly fire up a personal Bitcoin blockchain along with Liquid and Electrum.",
      icon: "ℹ️", // Replace with actual icon or emoji
    },
    {
      title: "Bitcoin",
      description: "Quickly fire up a personal Bitcoin blockchain along with Liquid and Electrum.",
      icon: "ℹ️", // Replace with actual icon or emoji
    },
    {
      title: "Bitcoin",
      description: "Quickly fire up a personal Bitcoin blockchain along with Liquid and Electrum.",
      icon: "ℹ️", // Replace with actual icon or emoji
    },
    {
      title: "Bitcoin",
      description: "Quickly fire up a personal Bitcoin blockchain along with Liquid and Electrum.",
      icon: "ℹ️", // Replace with actual icon or emoji
    },
    {
      title: "Bitcoin",
      description: "Quickly fire up a personal Bitcoin blockchain along with Liquid and Electrum.",
      icon: "ℹ️", // Replace with actual icon or emoji
    },
  ];

  return (
    <section className="flex flex-col justify-center h-screen bg-gradient-to-b from-gradient1 to-gradient2">
      <div className="flex flex-col items-center text-center p-8 max-w-full">
        <h2 className="text-4xl font-bold mb-4">One Click Bitcoin</h2>
        <p className="text-xl mb-8">Quickly fire up a personal Bitcoin blockchain along with Liquid and Electrum. You can use to run tests locally and execute API calls</p>
        <CodeBlock text={'Install'} code={`curl https://getmerry.vulpem.com | bash`} />
      </div>

      <div className="grid grid-cols-2 gap-6 max-w-1/2 mx-auto mt-8">
        {informationBlocks.map((block, index) => (
          <div key={index} className="flex items-center p-4 px-24 rounded-lg">
            <div className="mr-4">{block.icon}</div>
            <div>
              <h3 className="text-lg font-semibold">{block.title}</h3>
              <p className="text-sm">{block.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Description;
