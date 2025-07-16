import React, { useState } from 'react';
import Toolbar from '../components/Toolbar';
import Header from '../components/Header';
import FloatingActions from '../components/FloatingActions';
import SpreadsheetTable from '../components/SpreadsheetTable';
import { sampleData } from '../components/data/sampleData';

export default function SpreadsheetPage() {
     const [searchTerm, setSearchTerm] = useState('');
     const columns = Object.keys(sampleData[0]).map((key) => ({
    id: key,
    title: key,
    type: 'text' as const,
    visible: true,
    width: 150,
  }));

  const rows = sampleData.map((item, idx) => ({
    id: idx.toString(),
    cells: Object.fromEntries(
  Object.entries(item).map(([key, value]) => [
    key,
    {
      id: `${idx}-${key}`,
      value,
      type: 'text' as const, // You can customize this dynamically if needed
    }
  ])
),
  }));
     
  return (
    <div className="w-full min-h-screen bg-white p-4">
      <Toolbar showFilters={false} hideFields={false} onToggleFilters={function (): void {
              throw new Error('Function not implemented.');
          } } onToggleHideFields={function (): void {
              throw new Error('Function not implemented.');
          } } />
      <Header searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <div className="overflow-auto border rounded-xl shadow mt-4">
         <SpreadsheetTable
          columns={columns}
          rows={rows}
          selectedCell={null}
          editingCell={null}
          editValue={''}
          selectedRows={new Set()}
          onCellClick={() => {}}
          onCellDoubleClick={() => {}}
          onEditValueChange={() => {}}
          onKeyPress={() => {}}
          onEditComplete={() => {}}
          onEditCancel={() => {}}
          onRowSelect={() => {}}
          onSort={() => {}}
        />
      </div>
      <FloatingActions />
    </div>
  );
}
