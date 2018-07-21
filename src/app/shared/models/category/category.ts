export class Category {
  title: string;
  imageSrc: string;
  categoryId: string;

  constructor(
    title: string,
    imageSrc: string,
    categoryId: string
  ) {
    this.title = title;
    this.imageSrc = imageSrc;
    this.categoryId = categoryId;
  }
}
