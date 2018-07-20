import { Observable , of } from 'rxjs';

import { Article } from '../../models/article/article';
import { MockArticles } from './response';

const articles = MockArticles;
export class ArticleStubService {
  
  public getArticlesWithCountLimit(countOfArticles:number) :Observable<Array<Article>>{
    return of(articles);    
  }

  public getArticles() :Observable<Array<Article>>{
    return of(articles);
  }
}
