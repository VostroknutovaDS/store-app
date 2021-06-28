import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { items } from 'src/app/mock-data';
import { CardItem } from '../item/item-interface';

@Component({
  selector: 'app-store-grid',
  templateUrl: './store-grid.html',
  styleUrls: ['./store-grid.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoreGridComponent implements OnInit {
  data: CardItem[] = [];
  readonly columnNumber = 5;
  readonly placeholderImg = '../../../assets/img/placeholder-img.png';

  ngOnInit() {
    this.data = items;
  }
}
