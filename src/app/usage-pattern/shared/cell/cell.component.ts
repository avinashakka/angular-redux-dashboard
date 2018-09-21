import { Component, OnInit, Input } from '@angular/core';
import { Cell } from '../mosaic-table/chart.interface';

@Component({
  selector: 'app-cell',
  templateUrl: 'cell.component.html',
  styleUrls: ['cell.component.scss']
})
export class CellComponent implements OnInit {
  @Input() public cell: Cell;
  constructor() { }

  ngOnInit() {
  }

  public getClass(cell: Cell) {
    return `cell ${cell.color}`;
  }

}
