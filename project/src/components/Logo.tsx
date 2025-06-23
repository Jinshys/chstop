import React from 'react';
import { Layers } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg">
      <Layers className="w-6 h-6 text-white" />
    </div>
  );
};

export default Logo;