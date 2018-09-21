import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { Subscription } from 'rxjs';
import { MatTableDataSource } from '@angular/material';
import { MatDialog, MatDialogConfig } from '@angular/material';

import { ShoppingCartService } from './shopping-cart.service';
import { Cart, Inventory, Item} from './shopping-cart.interface';
import { IAppState, Action } from '../shared/store/store';
import { FINALIZE_CART, GET_INVENTORY, ADD_ITEM, REMOVE_ITEM } from '../shared/store/action';
import { CartDialogComponent } from './cart-dialog/cart-dialog.component';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: 'shopping-cart.component.html',
  styleUrls: ['shopping-cart.component.scss'],
  providers: [ShoppingCartService]
})
export class ShoppingCartComponent implements OnInit {
  public inventory: Subscription;
  public cartSubscription: Subscription;
  public myCart: Cart;
  public displayedColumns = ['id', 'name', 'category', 'price', 'inventory', 'cart', 'action'];
  public store: Item[] = [];
  public dataSource;
  public dialogConfig = new MatDialogConfig();

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private cartService: ShoppingCartService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.inventory = this.ngRedux.select('inventory').subscribe((state:  Inventory) => {
      this.store = state.items;
    });

    this.cartSubscription = this.ngRedux.select('cart').subscribe((state:  Cart) => {
      this.myCart = state;
    });

    this.refresh();
  }

  openDialog() {
    this.dialogConfig.position = {
      top: '10%',
      left: '40%'
    };
    this.dialogConfig.disableClose = true;
    this.dialogConfig.autoFocus = true;
    const dialogRef = this.dialog.open(CartDialogComponent, this.dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      // console.log(`Dialog result: ${result}`);
    });
  }

  refresh() {
    this.cartService.getInventory().subscribe((data: Inventory) => {
      this.ngRedux.dispatch<any>({type: GET_INVENTORY, payload: data});
    });
  }

  getCount(id: number): number {
    if (this.myCart && this.myCart.items.length > 0) {
      const items = this.myCart.items.filter(item => item.id === id);
      if (items && items.length > 0) {
        return items[0].count;
      } else {
          return 0;
      }
    }
    return 0;
  }

  increase(id: number, price: number) {
    this.ngRedux.dispatch<any>({type: ADD_ITEM, payload: {id : id, price: price}});
  }

  decrease(id: number, price: number) {
    this.ngRedux.dispatch<any>({type: REMOVE_ITEM, payload: {id : id, price: price}});
  }
}
