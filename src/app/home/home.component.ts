import { Component, OnInit } from '@angular/core';

import { ItemsSortOrder } from '../shared/items/itemsSortOrder';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  readonly itemsSortOrderPopular = ItemsSortOrder.Popular;
  readonly itemsSortOrderNew = ItemsSortOrder.New;
  readonly countOfItems = 8;
  readonly countOfCategories = 4;
  readonly morePopularItemsLink = '/items?sort=popular';
  readonly moreNewItemsLink = '/items?sort=new';
  readonly moreNewCategoriesLink = '/categories';
  
  constructor() { }

  ngOnInit() {
  }

}
