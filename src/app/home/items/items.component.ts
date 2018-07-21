import { Component, OnInit, Input } from '@angular/core';

import { ItemService } from '../../shared/apis/item/item.service';
import { ItemsSortOrder } from './itemsSortOrder';

import { Item } from '../../shared/models/item/item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  @Input() title: string;
  @Input() itemsSortOrder: ItemsSortOrder;
  @Input() countOfItems: number;
  items: Item[] = new Array;
  
  constructor(
    private itemService: ItemService
  ) { }

  ngOnInit() {
    this.setItems(this.countOfItems,this.itemsSortOrder);
  }

  private setItems(countOfItems: number,itemsSortOrder: ItemsSortOrder): void {
    let items$;
    if(itemsSortOrder === ItemsSortOrder.Popular){
      items$ = this.itemService.getPopularItemsWithCountLimit(countOfItems);
    }else{
      items$ =this.itemService.getNewItemsWithCountLimit(countOfItems);
    }

    items$.subscribe(
      (res) => {
        res.forEach((doc)=>{
          const item:Item = new Item(              
            doc.title,
            doc.imageSrc,
            doc.price
          );
          this.items.push(item);
        });
      },
      (error) => console.log(error)
    );
    
  }
}
