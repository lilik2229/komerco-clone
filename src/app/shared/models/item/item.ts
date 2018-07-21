export class Item {
  title: string;
  imageSrc: string;
  price: number;

  constructor(
    title: string,
    imageSrc: string,
    price: number
  ) {
    title = this.title;
    imageSrc = this.imageSrc;
    price = this.price;
  }
}
