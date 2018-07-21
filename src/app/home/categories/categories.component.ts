import { Component, OnInit, Input } from '@angular/core';

import { CategoryService } from '../../shared/apis/category/category.service';

import { Category } from '../../shared/models/category/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  @Input() countOfCategories: number;
  categories: Category[] = new Array;
  moreLink: string;
  
  constructor(
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
    const countOfCategories = 4;
    this.setCategories(countOfCategories);
    this.moreLink = '/categories';
  }

  private setCategories(countOfCategories: number): void {
    this.categoryService
      .getCategoriesWithCountLimit(countOfCategories)
      .subscribe(
        (res) => this.updateCategories(res),
        (error) => console.log(error)
      );
  }

  private updateCategories(res): void {
    const newCategories: Category[] = new Array;

    res.forEach((doc) => {
      const category: Category = new Category(
        doc.title,
        doc.imageSrc,
        doc.categoryId
      );
      newCategories.push(category);
    });
    this.categories = newCategories;
  }
}
