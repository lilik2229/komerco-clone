import { Component, OnInit } from '@angular/core';

import { ArticleService } from '../../shared/apis/article/article.service';

import { Article } from '../../shared/models/article/article';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  articles:Article[] = new Array;
  
  constructor(
    private articleService :ArticleService 
  ) { }

  ngOnInit() {
    const countOfArticles:number = 3;
    this.setArticles(countOfArticles);
  }

  private setArticles(countOfArticles :number) :void{
    this.articleService
      .getArticles(countOfArticles)
      .then(
        (querySnapshot)=>{
          querySnapshot.forEach((doc)=> {
            const article:Article =
              new Article(
                doc.data().description,
                doc.data().imageSrc,
                doc.data().link
              );
            this.articles.push(article);
          });
        }
      )
      .catch(
        (error)=>{
          console.log(error);
        }
      );
  }

}
