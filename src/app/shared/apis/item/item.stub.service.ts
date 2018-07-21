import { Observable , of } from 'rxjs';

import { Item } from '../../models/item/item';
import { MockItems } from '../../models/item/items.mock';

const items = MockItems;
export class ItemStubService {

  public getPopularItemsWithCountLimit(countOfArticles: number): Observable<Array<Item>> {
    return of(items);
  }

  public getNewItemsWithCountLimit(countOfArticles: number): Observable<Array<Item>> {
    return of(items);
  }

}
