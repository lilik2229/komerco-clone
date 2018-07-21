import { Component, OnInit } from '@angular/core';

import { ArticleService } from '../../shared/apis/article/article.service';

import { Article } from '../../shared/models/article/article';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  articles: Article[] = new Array;

  constructor(
    private articleService: ArticleService
  ) { }

  ngOnInit() {
    const countOfArticles = 7;
    this.setArticles(countOfArticles);
  }

  private setArticles(countOfArticles: number): void {
    this.articleService
      .getArticlesWithCountLimit(countOfArticles)
      .subscribe(
        (res) => {
          res.forEach((doc) => {
            const article: Article = new Article(
              doc.description,
              doc.imageSrc,
              doc.link
            );
            this.articles.push(article);
          });
        },
        (error) => console.log(error)
      );
  }

}
