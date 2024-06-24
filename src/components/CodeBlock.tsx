import React from 'react';

interface CodeBlockProps {
  text: string;
  code: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ text, code }) => {
  return (
    <div className='w-full md:w-1/3'>
      <div className="bg-darkblue p-2">
        <p className="text-sm text-white">{text}</p>
      </div>
      <div className="bg-black p-2 mb-4 overflow-x-auto flex items-center">
        <span className="text-green font-mono text-sm">$</span>
        <pre className="font-code text-sm text-green flex-1 text-center">{code}</pre>
      </div>
    </div>
  );
};

export default CodeBlock;
