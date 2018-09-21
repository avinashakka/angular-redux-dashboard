import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';

import { IAppState, Action } from '../shared/store/store';

@Component({
  selector: 'app-usage-pattern',
  templateUrl: 'usage-pattern.component.html',
  styleUrls: ['usage-pattern.component.scss']
})
export class UsagePatternComponent implements OnInit {
  public ip: string;
  constructor(
    private ngRedux: NgRedux<IAppState>
  ) { }

  ngOnInit() {
  }

}
