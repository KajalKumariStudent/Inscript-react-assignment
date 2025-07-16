// FloatingActions.tsx
import React from 'react';
import { DollarSign } from 'lucide-react';

const FloatingActions: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col space-y-3">
      <button
        onClick={() => console.log('Avatar group clicked')}
        className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-gray-700"
      >
        <div className="flex -space-x-1">
          <div className="w-4 h-4 bg-green-500 rounded-full border border-white"></div>
          <div className="w-4 h-4 bg-red-500 rounded-full border border-white"></div>
        </div>
      </button>
      <button
        onClick={() => console.log('Number button clicked')}
        className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-red-600"
      >
        <span className="text-sm font-bold">7</span>
      </button>
      <button
        onClick={() => console.log('Dollar button clicked')}
        className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-yellow-600"
      >
        <DollarSign className="h-5 w-5" />
      </button>
    </div>
  );
};

export default FloatingActions;