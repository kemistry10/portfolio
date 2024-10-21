import React, { useState, useEffect } from 'react';

const greetings = [
  { language: 'English', text: 'Hello' },
  { language: 'Hindi', text: 'नमस्ते' },
  { language: 'Spanish', text: 'Hola' },
  { language: 'French', text: 'Bonjour' },
  { language: 'German', text: 'Hallo' },
  { language: 'Italian', text: 'Ciao' },
  { language: 'Japanese', text: 'こんにちは' },
  { language: 'Korean', text: '안녕하세요' },
  { language: 'Arabic', text: 'مرحبا' },
  { language: 'Portuguese', text: 'Olá' },
];

const Greeting: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % greetings.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-4xl font-bold mb-4">
      <span className="mr-2">{greetings[index].text}</span>
      {/* <span className="text-sm text-gray-500">({greetings[index].language})</span> */}
    </div>
  );
};

export default Greeting;