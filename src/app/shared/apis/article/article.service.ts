import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable, of } from 'rxjs';

import { Article } from '../../models/article/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(
    private store: AngularFirestore
  ) { }

  public getArticles(countOfArticles?:number) :Promise<any>{
    let articlesRef =
      this.store
      .collection('articles')
      .ref
      .orderBy("updatedAt","desc");
    
    if(countOfArticles !== undefined){
      articlesRef = articlesRef.limit(countOfArticles);
    }
    
    return articlesRef.get();
  }
  
}
