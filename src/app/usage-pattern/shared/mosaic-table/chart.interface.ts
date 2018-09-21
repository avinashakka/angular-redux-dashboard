export interface Cell {
    color: string;
    id: number;
    display: number;
}

export interface PatternTable {
    rows: Row[];
}

export interface Row {
    cells: Cell[];
}
