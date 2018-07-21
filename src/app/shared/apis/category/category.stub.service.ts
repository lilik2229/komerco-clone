import { Observable , of } from 'rxjs';

import { Category } from '../../models/category/category';
import { MockCategories } from '../../models/category/categories.mock';

const categories = MockCategories;
export class CategoryStubService {

  public getCategoriesWithCountLimit(countOfCategories: number):
  Observable<Array<Category>> {
    return of(MockCategories);
  }

}
