import { Action } from '@ngrx/store';
import { CardItem } from '../item-interface';

export const ADD_ITEM_TO_CART = 'ADD ITEM TO CART';

export class AddItemToCart implements Action {
  readonly type = ADD_ITEM_TO_CART;
  constructor(public payload: CardItem) {}
}

export type CartActions = AddItemToCart;
