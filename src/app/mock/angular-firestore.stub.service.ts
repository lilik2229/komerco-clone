import { Observable, of } from "rxjs";

import { MockArticles } from '../shared/models/article/articles.mock';

export class AngularFirestoreStubService {
  collection(query: string,callback: any){
        return {
          valueChanges() :Observable<Array<any>>{
            return of(MockArticles)
          }
        }
  }
}
