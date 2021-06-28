import { Injectable } from '@angular/core';
import { CardItem } from '../item-interface';
import { items } from '../mock-data';

@Injectable({ providedIn: 'root' })
export class ItemsService {
  getItems(): CardItem[] {
    return items;
  }
}
