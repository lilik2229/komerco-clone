import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppMaterialModule } from '../app-material.module';
import { AppRoutingModule } from '../app-routing.module';

import { HomeComponent } from './home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ArticlesComponent } from './articles/articles.component';

@NgModule({
  imports: [
    CommonModule,
    AppMaterialModule,
    AppRoutingModule
  ],
  declarations: [HomeComponent, HeaderComponent, FooterComponent, ArticlesComponent]
})
export class HomeModule { }
