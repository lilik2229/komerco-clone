import { Component, Input } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryStubService } from '../../shared/apis/category/category.stub.service';
import { CategoryService } from '../../shared/apis/category/category.service';
import { Category } from '../../shared/models/category/category';

import { CategoriesComponent } from './categories.component';

@Component({selector: 'app-category', template: ''})
class CategoryStubComponent {
  @Input() category: Category;
}

@Component({selector: 'app-more', template: ''})
class MoreStubComponent {
  @Input() url: string;
}

describe('CategoriesComponent', () => {
  let component: CategoriesComponent;
  let fixture: ComponentFixture<CategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CategoriesComponent,
        CategoryStubComponent,
        MoreStubComponent
      ],
      providers: [
        {provide: CategoryService, useClass: CategoryStubService },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesComponent);
    component = fixture.componentInstance;
    component.countOfCategories = 4;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
