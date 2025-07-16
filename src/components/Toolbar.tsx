// Toolbar.tsx
import React from 'react';
import { ChevronDown, Eye, Filter, Import, Download, Share2, Plus } from 'lucide-react';

interface ToolbarProps {
  showFilters: boolean;
  hideFields: boolean;
  onToggleFilters: () => void;
  onToggleHideFields: () => void;
}

const Toolbar: React.FC<ToolbarProps> = ({ 
  showFilters, 
  hideFields, 
  onToggleFilters, 
  onToggleHideFields 
}) => {
  return (
    <>
      {/* Main toolbar */}
      <div className="bg-white border-b border-gray-200 px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-700">Tool bar</span>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </div>
            <button
              onClick={onToggleHideFields}
              className="flex items-center space-x-1 text-sm text-gray-700 hover:text-gray-900"
            >
              <Eye className="h-4 w-4" />
              <span>Hide fields</span>
            </button>
            <button
              onClick={() => console.log('Sort clicked')}
              className="flex items-center space-x-1 text-sm text-gray-700 hover:text-gray-900"
            >
              <span>Sort</span>
            </button>
            <button
              onClick={onToggleFilters}
              className="flex items-center space-x-1 text-sm text-gray-700 hover:text-gray-900"
            >
              <Filter className="h-4 w-4" />
              <span>Filter</span>
            </button>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => console.log('Import clicked')}
              className="flex items-center space-x-1 px-3 py-1.5 text-sm text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50"
            >
              <Import className="h-4 w-4" />
              <span>Import</span>
            </button>
            <button
              onClick={() => console.log('Export clicked')}
              className="flex items-center space-x-1 px-3 py-1.5 text-sm text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50"
            >
              <Download className="h-4 w-4" />
              <span>Export</span>
            </button>
            <button
              onClick={() => console.log('Share clicked')}
              className="flex items-center space-x-1 px-3 py-1.5 text-sm text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50"
            >
              <Share2 className="h-4 w-4" />
              <span>Share</span>
            </button>
            <button
              onClick={() => console.log('New Action clicked')}
              className="flex items-center space-x-1 px-3 py-1.5 text-sm text-white bg-blue-600 rounded-md hover:bg-blue-700"
            >
              <Plus className="h-4 w-4" />
              <span>New Action</span>
            </button>
          </div>
        </div>
      </div>

      {/* Additional toolbar row */}
      <div className="bg-white border-b border-gray-200 px-6 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <input type="checkbox" className="rounded border-gray-300" />
              <span className="text-sm text-blue-600">ABC</span>
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <span>Answer a question</span>
              <span>Extract</span>
            </div>
          </div>
          <button 
            onClick={() => console.log('Add row clicked')}
            className="text-gray-400 hover:text-gray-600"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Toolbar;