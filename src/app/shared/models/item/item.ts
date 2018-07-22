export class Item {
  title: string;
  imageSrc: string;
  price: number;
  views: number;
  createdAt: any;
  updatedAt: any;
  
  constructor(
    title: string,
    imageSrc: string,
    price: number,
    views: number,
    createdAt: any,
    updatedAt: any
  ) {
    this.title = title;
    this.imageSrc = imageSrc;
    this.price = price;
    this.views = views;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
