import { CardItem, CardItemInCart } from '../item-interface';
import { CartActions } from './cart.actions';
import * as fromActions from './cart.actions';
import { items } from '../mock-data';

const initialState: CardItemInCart[] = [];

export function reducer(
  state = initialState,
  action: CartActions
): CardItemInCart[] {
  switch (action.type) {
    case fromActions.ADD_ITEM_TO_CART: {
      const item = state.findIndex((x) => x.key === action.payload.key);
      if (item) {
        state[item].number++;
        return [...state];
      } else {
        return [...state, { ...action.payload, number: 0 }];
      }
    }
    default:
      return state;
  }
}
