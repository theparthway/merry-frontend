import React from 'react';
import CodeBlock from './CodeBlock';

const Commands: React.FC = () => {

  return (
    <section className="flex flex-col h-screen bg-gradient2">
      <div className="flex flex-col items-center text-center p-12 mt-12 max-w-full">
        <h2 className="text-4xl font-bold mb-4">Commands</h2>
        <CodeBlock text={'Start Bitcoin'} code={`merry start`} />
        <CodeBlock text={'Start Bitcoin and Liquid'} code={`merry start --liquid`} />
        <CodeBlock text={'Stop'} code={`merry stop`} />
        <CodeBlock text={'Delete'} code={`merry stop --delete`} />
        <CodeBlock text={'Logs'} code={`merry logs SERVICE --liquid`} />
        <CodeBlock text={'Version'} code={`merry --version`} />
      </div>
    </section>
  );
};

export default Commands;
