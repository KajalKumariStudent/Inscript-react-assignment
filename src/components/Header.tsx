// Header.tsx
import React from 'react';
import { ChevronDown, Search, Users, MoreHorizontal } from 'lucide-react';
import UserAvatar from './UserAvatar';

interface HeaderProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

const Header: React.FC<HeaderProps> = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-blue-600 rounded-sm"></div>
            <span className="text-sm text-gray-500">Workspace</span>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500">Folder</span>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </div>
          <h1 className="text-lg font-medium text-gray-900">Spreadsheet 3</h1>
        </div>
        <div className="flex items-center space-x-2">
          <div className="flex -space-x-2">
            <UserAvatar name="John Doe" size="md" />
            <UserAvatar name="Jane Smith" size="md" />
            <UserAvatar name="Mike Johnson" size="md" />
          </div>
          <div className="flex items-center space-x-2 ml-4">
            <div className="relative">
              <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search within sheet"
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className="pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <button 
              onClick={() => console.log('User menu clicked')}
              className="p-2 text-gray-400 hover:text-gray-600"
            >
              <Users className="h-4 w-4" />
            </button>
            <button 
              onClick={() => console.log('More options clicked')}
              className="p-2 text-gray-400 hover:text-gray-600"
            >
              <MoreHorizontal className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;