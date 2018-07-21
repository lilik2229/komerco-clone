export class Item {
  title: string;
  imageSrc: string;
  price: number;

  constructor(
    title: string,
    imageSrc: string,
    price: number
  ) {
    this.title = title;
    this.imageSrc = imageSrc;
    this.price = price;
  }
}
