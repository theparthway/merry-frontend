import React from 'react';

interface CodeBlockProps {
    text: string;
    code: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ text, code }) => {
  return (
    <div className='w-1/2'>
        <div className="bg-darkblue p-2">
            <p className="text-sm">{text}</p>
        </div>
        <div className="bg-black p-2 mb-4">
            <pre className="font-mono text-sm">{code}</pre>
        </div>
    </div>
  );
};

export default CodeBlock;
