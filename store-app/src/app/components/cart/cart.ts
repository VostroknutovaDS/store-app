import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CardItem, CardItemInCart } from '../../item-interface';
import * as fromStore from '../../store/cart.selectors';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.html',
  styleUrls: ['./cart.scss'],
})
export class CartComponent implements OnInit {
  data: CardItemInCart[];
  readonly columns = ['name', 'number', 'cost'];

  constructor(private store: Store<CardItem[]>) {}

  ngOnInit(): void {
    this.store
      .select(fromStore.selectItemsInCart)
      .pipe(take(1))
      .subscribe((data) => {
        this.data = data;
      });
  }

  getTotalCost(): number {
    return this.data.map((x) => x.cost).reduce((acc, value) => acc + value, 0);
  }
}
