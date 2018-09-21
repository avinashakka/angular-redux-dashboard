import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatBadgeModule} from '@angular/material/badge';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';

import { AppComponent } from './app.component';
import { ROUTES } from './app.routes';
import { IAppState, INITIAL_STATE, rootReducer} from './shared/store/store';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CartDialogComponent } from './shopping-cart/cart-dialog/cart-dialog.component';
import { UsagePatternComponent } from './usage-pattern/usage-pattern.component';
import { CellComponent } from './usage-pattern/shared/cell/cell.component';
import { MosaicTableComponent } from './usage-pattern/shared/mosaic-table/mosaic-table.component';
import { PatternRowComponent } from './usage-pattern/shared/pattern-row/pattern-row.component';
import { DefaultPageComponent } from './default-page/default-page.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ShoppingCartComponent,
    CartDialogComponent,
    UsagePatternComponent,
    CellComponent,
    MosaicTableComponent,
    PatternRowComponent,
    DefaultPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES),
    NgReduxModule,
    HttpClientModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatTableModule,
    MatDialogModule,
    MatListModule,
    MatCardModule,
    MatBadgeModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatChipsModule
  ],
  providers: [],
  entryComponents: [
    CartDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor (ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
}
