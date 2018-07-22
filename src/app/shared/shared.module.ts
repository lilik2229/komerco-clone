import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppMaterialModule } from '../app-material.module';
import { AppRoutingModule } from '../app-routing.module';

import { MoreComponent } from './gui/more/more.component';
import { ItemsComponent } from './items/items.component';
import { ItemComponent } from './items/item/item.component';
import { HeaderComponent } from './gui/header/header.component';
import { FooterComponent } from './gui/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    AppMaterialModule,
    AppRoutingModule
  ],
  declarations: [
    MoreComponent,
    ItemsComponent,
    ItemComponent,
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    MoreComponent,
    ItemsComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
