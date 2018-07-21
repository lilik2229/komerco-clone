import { Component, OnInit, Input } from '@angular/core';

import { CategoryService } from '../../shared/apis/category/category.service';

import { Category } from '../../shared/models/category/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  @Input() countOfCategories:number;
  categories: Category[] = new Array;
  
  constructor(
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
    const countOfCategories = 4;
    this.setCategories(countOfCategories);
  }

  private setCategories(countOfCategories: number): void {    
    this.categoryService
      .getCategoriesWithCountLimit(countOfCategories)
      .subscribe(
        (res) => this.updateCategories(res),
        (error) => console.log(error)
      );
  }

  private updateCategories(res): void{
    let newCategories: Category[] = new Array;
    
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
