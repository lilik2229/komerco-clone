export class Article {
  description: string;
  imageSrc: string;
  link: string;

  constructor(
    description: string,
    imageSrc: string,
    link: string,
  ) {
    this.description = description;
    this.imageSrc = imageSrc;
    this.link = link;
  }

}
