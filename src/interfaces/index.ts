export interface IImage {
  url: string;
  description?: string;
}

export interface IPrice {
  value: string;
  discount?: {
    value: string;
  }
}

export interface IRating {
  rating: string;
}

export interface ISeller {
  url: string;
  name: string;
}

export interface ICard {
  image: IImage;
  title: string;
  rating: string;
  price: IPrice;
  color: string;
  material: string;
  sizes: string;
  mechanism: string;
  seller: ISeller;
}

export interface ICardList {
  cards: ICard[];
}