import { AppState } from '../reducers';

export const selectItemsInCart = (state: AppState) => state.cart;
