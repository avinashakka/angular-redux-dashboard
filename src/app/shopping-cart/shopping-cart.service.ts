import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Inventory } from './shopping-cart.interface';

@Injectable()
export class ShoppingCartService {
    constructor(
        private http: HttpClient
    ) {}

    public getInventory(): Observable<Inventory> {
        return this.http.get<Inventory>('/proxy/inventory');
    }
}
