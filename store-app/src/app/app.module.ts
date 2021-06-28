import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreGridComponent } from './components/store-grid/store-grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule, MatGridTile } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { CartComponent } from './components/cart/cart';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { CardComponent } from './components/card/card';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
    StoreGridComponent,
    CartComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    StoreModule.forRoot({}, {}),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
