import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UsagePatternComponent } from './usage-pattern/usage-pattern.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { DefaultPageComponent } from './default-page/default-page.component';

export const ROUTES: Routes = [
  { path: 'pattern', component: UsagePatternComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'default', component: DefaultPageComponent },
  { path: '',   redirectTo: '/default', pathMatch: 'full' },
];
