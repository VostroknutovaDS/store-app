import { Component, OnInit } from '@angular/core';
import { items } from 'src/app/mock-data';
import { CardItem } from '../../item-interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.html',
  styleUrls: ['./cart.scss'],
})
export class CartComponent implements OnInit {
  data: (CardItem & { number: number })[];
  readonly columns = ['name', 'number', 'cost'];

  ngOnInit(): void {
    this.data = items.map((x) => ({ ...x, number: 1 }));
  }

  getTotalCost(): number {
    return this.data.map((x) => x.cost).reduce((acc, value) => acc + value, 0);
  }
}
