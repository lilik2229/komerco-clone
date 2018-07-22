import { Component, Input } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Item } from '../../shared/models/item/item';
import { MockItems } from '../../shared/models/item/items.mock';
import { ItemService } from '../../shared/apis/item/item.service';
import { ItemStubService } from '../../shared/apis/item/item.stub.service';
import { ItemsSortOrder } from './itemsSortOrder';

import { ItemsComponent } from './items.component';

@Component({selector: 'app-item', template: ''})
class ItemStubComponent {
  @Input() item: Item;
}

@Component({selector: 'app-more', template: ''})
class MoreStubComponent {
  @Input() url: string;
}

describe('ItemsComponent', () => {
  let component: ItemsComponent;
  let fixture: ComponentFixture<ItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ItemsComponent,
        ItemStubComponent,
        MoreStubComponent
      ],
      providers: [
        {provide: ItemService, useClass: ItemStubService },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsComponent);
    component = fixture.componentInstance;
    component.title = 'title';
    component.itemsSortOrder = ItemsSortOrder.Popular;
    component.countOfItems = 7;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
