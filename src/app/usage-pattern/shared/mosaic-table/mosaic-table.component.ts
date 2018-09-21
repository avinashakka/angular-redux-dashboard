import { Component, OnInit } from '@angular/core';
import { PatternTable, Cell, Row } from './chart.interface';
import { PatternQueryService } from '../services/pattern-query.service';

@Component({
  selector: 'app-mosaic-table',
  templateUrl: 'mosaic-table.component.html',
  styleUrls: ['mosaic-table.component.scss'],
  providers: [PatternQueryService]
})
export class MosaicTableComponent implements OnInit {
  constructor(
    private patternService: PatternQueryService
  ) { }
  public pattern: PatternTable;
  public patternForIp = '76.125.94.0';
  public usage;
  ngOnInit() {
    this.init();
  }

  public init() {
    this.patternService.getIps(this.patternForIp).subscribe((res) => {
      this.usage = res;
      this.generatePattern();
    });
  }

  public generatePattern():  void {
    this.pattern = {
      rows: []
    };
    for (let i = 0; i < 8; i++) {
      const cells: Cell[] = [];
      for (let j = i * 32; j < (i + 1) * 32; j++) {
        cells.push({
          color: this.getColor(j),
          id: j,
          display: j
        });
      }
      const row: Row = {
        cells: cells
      };
      this.pattern.rows[i] = row;
    }

    console.log(this.pattern);
  }

  public getColor(id: number): string {
    if (this.usage && this.usage[id]) {
      if (this.usage[id] >= 100) {
        return 'darkblue';
      }
      if (this.usage[id] < 100 && this.usage[id] >= 50) {
        return 'blue';
      }
      if (this.usage[id] < 50 && this.usage[id] >= 25) {
        return 'skyblue';
      }
      if (this.usage[id] < 25 && this.usage[id] > 0) {
        return 'lightblue';
      }
      return 'white';
    }
    return 'white';
  }

}
