import { Component, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { MatDialog, MatDialogConfig } from '@angular/material';

import {CartDialogComponent} from '../shopping-cart/cart-dialog/cart-dialog.component';

@Component({
  selector: 'app-top-bar',
  templateUrl: 'top-bar.component.html',
  styleUrls: ['top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  public dialogConfig = new MatDialogConfig();
  @Output() public navSelected: Subject<any> = new Subject();
  public navCategories = [
    {
      name: 'Shopping Cart',
      path: '/cart'
    }
  ];

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.navSelected.next(this.navCategories[0]);
  }

  navSelection(index: number) {
    this.navSelected.next(this.navCategories[index]);
  }

  openDialog() {
    this.dialogConfig.position = {
      top: '30%',
      left: '40%'
    };
    this.dialogConfig.disableClose = true;
    this.dialogConfig.autoFocus = true;
    const dialogRef = this.dialog.open(CartDialogComponent, this.dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      // console.log(`Dialog result: ${result}`);
    });
  }

}
