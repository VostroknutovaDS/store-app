import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreGridComponent } from './components/store-grid/store-grid';

const routes: Routes = [{ path: '', component: StoreGridComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
