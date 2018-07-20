import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

import { Article } from '../../models/article/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(
    private store: AngularFirestore
  ) { }

  public getArticlesWithCountLimit(countOfArticles:number) :Observable<Array<Article>>{
    return this.store
      .collection<Article>('articles',ref => ref.orderBy("updatedAt","desc"))
      .valueChanges();
  }

    public getArticles() :Observable<Array<Article>>{
      return this.store
        .collection<Article>('articles',ref => ref.orderBy("updatedAt","desc"))
        .valueChanges();      
    }
  
}
