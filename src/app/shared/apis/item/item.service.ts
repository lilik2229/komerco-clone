import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

import { Item } from '../../models/item/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(
    private store: AngularFirestore
  ) { }

  public getPopularItemsWithCountLimit(countOfArticles: number): Observable<Array<Item>> {
    return this.store
      .collection<Item>('items',
                        ref => ref.orderBy('views', 'desc').limit(countOfArticles))
      .valueChanges();
  }
}
