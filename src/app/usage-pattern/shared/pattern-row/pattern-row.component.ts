import { Component, OnInit, Input } from '@angular/core';
import { Row, Cell } from '../mosaic-table/chart.interface';
@Component({
  selector: 'app-pattern-row',
  templateUrl: 'pattern-row.component.html',
  styleUrls: ['pattern-row.component.scss']
})
export class PatternRowComponent implements OnInit {

  @Input() public row: Row;
  constructor() { }

  ngOnInit() {
    console.log(this.row);
  }

}
