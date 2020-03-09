export interface IImage {
  url: string;
  description?: string;
}

export interface IField {
  label?: string;
  value: string;
}

export interface IPrice extends IField {
  discount?: {
    value: string;
  }
}

export interface ISeller extends IField {
  url: string;
}

export interface ICard {
  image: IImage;
  title: IField;
  rating: IField;
  price: IPrice;
  color: IField;
  material: IField;
  sizes: IField;
  mechanism: IField;
  seller: ISeller;
}

export interface ICardList {
  cards: ICard[];
}