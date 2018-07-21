import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppMaterialModule } from '../app-material.module';
import { AppRoutingModule } from '../app-routing.module';

import { HomeComponent } from './home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleComponent } from './articles/article/article.component';
import { ItemsComponent } from './items/items.component';
import { ItemComponent } from './items/item/item.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryComponent } from './categories/category/category.component';
import { MoreComponent } from './shared/more/more.component';

@NgModule({
  imports: [
    CommonModule,
    AppMaterialModule,
    AppRoutingModule
  ],
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ArticlesComponent,
    ArticleComponent,
    ItemsComponent,
    ItemComponent,
    CategoriesComponent,
    CategoryComponent,
    MoreComponent
  ]
})
export class HomeModule { }
