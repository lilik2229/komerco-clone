import { Component, OnInit, OnDestroy, Input } from '@angular/core';

import { ItemService } from '../../shared/apis/item/item.service';
import { ItemsSortOrder } from './itemsSortOrder';

import { Item } from '../../shared/models/item/item';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit, OnDestroy {
  @Input() title: string;
  @Input() itemsSortOrder: ItemsSortOrder;
  @Input() countOfItems: number;
  @Input() startAfter: Item;
  @Input() isShowMoreItem: boolean;
  items: Item[] = new Array;
  totalCountOfItems: number;
  moreLink: string;
  item$: any;

  constructor(
    private itemService: ItemService
  ) { }

  ngOnInit() {
    this.totalCountOfItems = this.countOfItems;
    this.setItems(this.totalCountOfItems, this.itemsSortOrder, this.startAfter);
    this.setMoreLink(this.itemsSortOrder);
  }

  ngOnDestroy() {
    this.item$.unsubscribe();
  }

  private setMoreLink(itemsSortOrder: ItemsSortOrder): void {
    if (itemsSortOrder === ItemsSortOrder.Popular) {
      this.moreLink = '/items/popular';
    } else {
      this.moreLink = '/items/new';
    }
  }

  private setItems(
    countOfItems: number,
    itemsSortOrder: ItemsSortOrder,
    startAfter?: Item
  ): void {
    let items$;
    if (itemsSortOrder === ItemsSortOrder.Popular) {
      items$ =
        this.itemService.getPopularItemsWithCountLimit(countOfItems, startAfter);
    } else {
      items$ =
        this.itemService.getNewItemsWithCountLimit(countOfItems, startAfter);
    }

    this.item$ = items$.subscribe(
      (res) => this.updateItems(res),
      (error) => console.log(error)
    );
  }

  private updateItems(res): void {
    const newItems: Item[] = new Array;

    res.forEach((doc) => {
      const item: Item = new Item(
        doc.title,
        doc.imageSrc,
        doc.price,
        doc.views,
        doc.createdAt,
        doc.updatedAt
      );
      newItems.push(item);
    });
    this.items = newItems;
  }

  addItems(): void {
    this.item$.unsubscribe();
    this.totalCountOfItems += this.countOfItems;
    this.setItems(this.totalCountOfItems, this.itemsSortOrder);
  }


}
