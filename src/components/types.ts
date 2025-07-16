export interface Cell {
  id: string;
  value: string;
  type: 'text' | 'number' | 'date' | 'url' | 'status' | 'priority' | 'user';
}

export interface Column {
  id: string;
  title: string;
  width: number;
  type: 'text' | 'number' | 'date' | 'url' | 'status' | 'priority' | 'user';
  visible: boolean;
}

export interface Row {
  id: string;
  cells: { [columnId: string]: Cell };
}