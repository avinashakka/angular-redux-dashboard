import {Component, Input, Output, OnInit} from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { Subscription } from 'rxjs';
import { MatDialogRef } from '@angular/material';


import { Cart, Inventory, Item} from '../shopping-cart.interface';
import { IAppState, Action } from '../../shared/store/store';
import { FINALIZE_CART, GET_INVENTORY } from '../../shared/store/action';

@Component({
    selector: 'app-cart-dialog',
    templateUrl: 'cart-dialog.component.html',
  })
  export class CartDialogComponent implements OnInit {
      public cart: Cart;
      public subscription: Subscription;
      public inventory: Subscription;
      public currentInventory: Item[];
      constructor(
        private ngRedux: NgRedux<IAppState>,
        private dialogRef: MatDialogRef<CartDialogComponent>
      ) {}

      ngOnInit() {
        this.subscription = this.ngRedux.select('cart').subscribe((state:  Cart) => {
            this.cart = state;
          });
          this.inventory = this.ngRedux.select('inventory').subscribe((state:  Inventory) => {
            this.currentInventory = state.items;
          });
      }

      close() {
          this.dialogRef.close();
      }

      getName(id: number) {
          if (this.currentInventory && this.currentInventory.length > 0) {
              const items = this.currentInventory.filter(i => i.id === id);
              return items[0].name;
          }
          return 'N/A';
      }

      getTotalCost(): number {
        if (this.cart) {
            return this.cart.cost + this.getTax();
        }
        return 0;
      }

      getTax(): number {
        if (this.cart) {
            return 0.15 * this.cart.cost;
        }
        return 0;
      }
  }
