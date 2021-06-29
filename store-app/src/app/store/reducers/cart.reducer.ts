import { CardItemInCart } from '../../item-interface';
import { CartActions } from '../actions/cart.actions';
import * as fromActions from '../actions/cart.actions';

const initialState: CardItemInCart[] = [];

export function reducer(
  state = initialState,
  action: fromActions.CartActions
): CardItemInCart[] {
  switch (action.type) {
    case fromActions.ADD_ITEM_TO_CART: {
      const itemKey = state.findIndex((x) => x.key === action.payload.key);
      if (itemKey > -1) {
        const item = state[itemKey];
        return [
          ...state.slice(0, itemKey - 1),
          { ...item, number: item.number + 1 },
          ...state.slice(itemKey + 1, state.length),
        ];
      } else {
        return [...state, { ...action.payload, number: 1 }];
      }
    }
    default:
      return state;
  }
}
