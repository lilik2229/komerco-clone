import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

import { Category } from '../../models/category/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private store: AngularFirestore
  ) { }

  public getCategoriesWithCountLimit(countOfCategories: number):
  Observable<Array<Category>> {
    return this.store
      .collection<Category>('categories',
                            ref => ref.orderBy('updatedAt', 'desc')
                            .limit(countOfCategories)
                           )
      .valueChanges();
  }

}
