import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './components/cart/cart';
import { StoreGridComponent } from './components/store-grid/store-grid';

const routes: Routes = [
  {
    path: '',
    component: StoreGridComponent,
  },
  { path: 'cart', component: CartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
