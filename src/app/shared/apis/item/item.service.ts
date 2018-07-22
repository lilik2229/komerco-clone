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

  public getPopularItemsWithCountLimit(
    countOfArticles: number,
    startAfterItem: Item
  ): Observable<Array<Item>> {
    if (startAfterItem === undefined) {
      return this.store
        .collection<Item>('items',
                          ref => ref.orderBy('views', 'desc')
                          .limit(countOfArticles))
        .valueChanges();
    } else {
      return this.store
        .collection<Item>('items',
                          ref => ref.orderBy('views', 'desc')
                          .startAfter(startAfterItem.views)
                          .limit(countOfArticles))
        .valueChanges();
    }
  }

  public getNewItemsWithCountLimit(
    countOfArticles: number,
    startAfterItem: Item
  ): Observable<Array<Item>> {
    if (startAfterItem === undefined) {
      return this.store
        .collection<Item>('items',
                          ref => ref.orderBy('updatedAt', 'desc')
                          .limit(countOfArticles))
        .valueChanges();
    } else {
      console.log(startAfterItem);
      return this.store
        .collection<Item>('items',
                          ref => ref.orderBy('updatedAt', 'desc')
                          .startAfter(startAfterItem.updatedAt)
                          .limit(countOfArticles))
        .valueChanges();
    }
  }

}
