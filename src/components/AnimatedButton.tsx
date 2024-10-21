import React from 'react';
import { Button } from "../components/ui/button"

const AnimatedButton: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Button 
      className="relative rounded-full px-4 py-2 bg-transparent text-white border border-white overflow-hidden transition-colors duration-300 hover:bg-white/10"
    >
      <span className="relative z-10 flex items-center">
        {children}
      </span>
    </Button>
  );
};

export default AnimatedButton;