import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { items } from 'src/app/mock-data';
import { ItemsService } from 'src/app/services/items.service';
import { CardItem } from '../../item-interface';

@Component({
  selector: 'app-store-grid',
  templateUrl: './store-grid.html',
  styleUrls: ['./store-grid.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoreGridComponent implements OnInit {
  data: CardItem[] = [];
  readonly columnNumber = 5;

  constructor(private itemsService: ItemsService) {}

  ngOnInit(): void {
    this.data = this.itemsService.getItems();
  }

  onItemAdd(data: any): void {}
}
