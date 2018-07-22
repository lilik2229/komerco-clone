import { Component, Input } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
    RouterTestingModule
} from '@angular/router/testing';

import { ItemsSortOrder } from '../shared/items/itemsSortOrder';

import { ItemListComponent } from './item-list.component';

@Component({selector: 'app-header', template: ''})
class HeaderStubComponent {}

@Component({selector: 'app-items', template: ''})
class ItemsStubComponent {
  @Input() title: string;
  @Input() itemsSortOrder: ItemsSortOrder;
  @Input() countOfItems: number;
  @Input() isShowMoreItem: boolean;
}

@Component({selector: 'app-footer', template: ''})
class FooterStubComponent {}

describe('ItemListComponent', () => {
  let component: ItemListComponent;
  let fixture: ComponentFixture<ItemListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        ItemListComponent,
        HeaderStubComponent,
        ItemsStubComponent,
        FooterStubComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
