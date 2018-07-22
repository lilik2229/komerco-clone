import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { ItemsSortOrder } from '../shared/items/itemsSortOrder';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  itemsSortOrder = ItemsSortOrder.Popular;
  readonly countOfItems = 1;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.queryParamMap
      .subscribe((params: ParamMap) => {
        const sortId = this.route.snapshot.queryParamMap.get('sort');
        this.setItemSortOrder(sortId);
      });
  }

  private setItemSortOrder(sortId: string): void {
    if (sortId === 'pupular') {
      this.itemsSortOrder = ItemsSortOrder.Popular;
    } else if (sortId === 'new') {
      this.itemsSortOrder = ItemsSortOrder.New;
    }
  }

}
