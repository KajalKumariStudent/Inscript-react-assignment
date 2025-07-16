// SpreadsheetCell.tsx
import React, { useRef, useEffect } from 'react';
import type { Cell } from './types';
import UserAvatar from './UserAvatar';
import StatusBadge from './StatusBadge';
import PriorityBadge from './PriorityBadge';

interface SpreadsheetCellProps {
  cell: Cell;
  rowId: string;
  columnId: string;
  isSelected: boolean;
  isEditing: boolean;
  editValue: string;
  onCellClick: (rowId: string, columnId: string) => void;
  onCellDoubleClick: (rowId: string, columnId: string) => void;
  onEditValueChange: (value: string) => void;
  onKeyPress: (e: React.KeyboardEvent, rowId: string, columnId: string) => void;
  onEditComplete: (rowId: string, columnId: string, value: string) => void;
  onEditCancel: () => void;
}

const SpreadsheetCell: React.FC<SpreadsheetCellProps> = ({
  cell,
  rowId,
  columnId,
  isSelected,
  isEditing,
  editValue,
  onCellClick,
  onCellDoubleClick,
  onEditValueChange,
  onKeyPress,
  onEditComplete,
  onEditCancel
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const renderCellContent = (cell: Cell) => {
    switch (cell.type) {
      case 'user':
        return (
          <div className="flex items-center space-x-2">
            <UserAvatar name={cell.value} />
            <span className="text-sm">{cell.value}</span>
          </div>
        );
      case 'status':
        return <StatusBadge status={cell.value} />;
      case 'priority':
        return <PriorityBadge priority={cell.value} />;
      case 'url':
        return (
          <a href={`https://${cell.value}`} className="text-blue-600 hover:text-blue-800 text-sm truncate">
            {cell.value}
          </a>
        );
      case 'date':
        return <span className="text-sm text-gray-700">{cell.value}</span>;
      case 'number':
        return <span className="text-sm text-gray-700 font-mono">{cell.value}</span>;
      default:
        return <span className="text-sm text-gray-700">{cell.value}</span>;
    }
  };

  return (
    <td
      className={`px-3 py-4 cursor-pointer ${isSelected ? 'bg-blue-50' : ''}`}
      onClick={() => onCellClick(rowId, columnId)}
      onDoubleClick={() => onCellDoubleClick(rowId, columnId)}
    >
      {isEditing ? (
        <input
          ref={inputRef}
          type="text"
          value={editValue}
          onChange={(e) => onEditValueChange(e.target.value)}
          onKeyDown={(e) => onKeyPress(e, rowId, columnId)}
          onBlur={() => {
            onEditComplete(rowId, columnId, editValue);
            onEditCancel();
          }}
          className="w-full border-none outline-none bg-transparent"
        />
      ) : (
        renderCellContent(cell)
      )}
    </td>
  );
};

export default SpreadsheetCell;