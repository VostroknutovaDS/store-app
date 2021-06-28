export interface CardItem {
  name: string;
  description: string;
  image: string;
  cost: number;
  key: number;
}

export interface CardItemInCart extends CardItem {
  number: number;
}
