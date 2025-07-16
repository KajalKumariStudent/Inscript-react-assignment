// SpreadsheetTable.tsx
import React from 'react';
import { ChevronDown } from 'lucide-react';
import type { Column, Row } from './types';
import SpreadsheetCell from './SpreadsheelShell';

interface SpreadsheetTableProps {
  columns: Column[];
  rows: Row[];
  selectedCell: { rowId: string; columnId: string } | null;
  editingCell: { rowId: string; columnId: string } | null;
  editValue: string;
  selectedRows: Set<string>;
  onCellClick: (rowId: string, columnId: string) => void;
  onCellDoubleClick: (rowId: string, columnId: string) => void;
  onEditValueChange: (value: string) => void;
  onKeyPress: (e: React.KeyboardEvent, rowId: string, columnId: string) => void;
  onEditComplete: (rowId: string, columnId: string, value: string) => void;
  onEditCancel: () => void;
  onRowSelect: (rowId: string, selected: boolean) => void;
  onSort: (columnId: string) => void;
}

const SpreadsheetTable: React.FC<SpreadsheetTableProps> = ({
  columns,
  rows,
  selectedCell,
  editingCell,
  editValue,
  selectedRows,
  onCellClick,
  onCellDoubleClick,
  onEditValueChange,
  onKeyPress,
  onEditComplete,
  onEditCancel,
  onRowSelect,
  onSort
}) => {
  return (
    <div className="flex-1 overflow-hidden">
      <div className="h-full overflow-auto">
        <table className="min-w-full">
          <thead className="bg-gray-50 sticky top-0">
            <tr>
              <th className="w-12 px-3 py-3 text-left">
                <input type="checkbox" className="rounded border-gray-300" />
              </th>
              {columns.filter(col => col.visible).map((column) => (
                <th
                  key={column.id}
                  className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                  style={{ width: column.width }}
                  onClick={() => onSort(column.id)}
                >
                  <div className="flex items-center space-x-1">
                    <span>{column.title}</span>
                    <ChevronDown className="h-3 w-3 text-gray-400" />
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {rows.map((row) => (
              <tr key={row.id} className="hover:bg-gray-50">
                <td className="px-3 py-4">
                  <input 
                    type="checkbox" 
                    className="rounded border-gray-300"
                    checked={selectedRows.has(row.id)}
                    onChange={(e) => onRowSelect(row.id, e.target.checked)}
                  />
                </td>
                {columns.filter(col => col.visible).map((column) => {
                  const cell = row.cells[column.id];
                  const isSelected = selectedCell?.rowId === row.id && selectedCell?.columnId === column.id;
                  const isEditing = editingCell?.rowId === row.id && editingCell?.columnId === column.id;
                  
                  return (
                    <SpreadsheetCell
                      key={`${row.id}-${column.id}`}
                      cell={cell}
                      rowId={row.id}
                      columnId={column.id}
                      isSelected={isSelected}
                      isEditing={isEditing}
                      editValue={editValue}
                      onCellClick={onCellClick}
                      onCellDoubleClick={onCellDoubleClick}
                      onEditValueChange={onEditValueChange}
                      onKeyPress={onKeyPress}
                      onEditComplete={onEditComplete}
                      onEditCancel={onEditCancel}
                    />
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SpreadsheetTable;