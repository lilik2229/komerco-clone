import { Component, Input } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsSortOrder } from '../shared/items/itemsSortOrder';

import { HomeComponent } from './home.component';

@Component({selector: 'app-header', template: ''})
class HeaderStubComponent {}

@Component({selector: 'app-articles', template: ''})
class ArticlesStubComponent {}

@Component({selector: 'app-items', template: ''})
class ItemsStubComponent {
  @Input() title: string;
  @Input() itemsSortOrder: ItemsSortOrder;
  @Input() countOfItems: number;
}

@Component({selector: 'app-categories', template: ''})
class CategoriesStubComponent {
  @Input() countOfCategories: number;
}

@Component({selector: 'app-footer', template: ''})
class FooterStubComponent {}

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        HeaderStubComponent,
        ArticlesStubComponent,
        ItemsStubComponent,
        CategoriesStubComponent,
        FooterStubComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
