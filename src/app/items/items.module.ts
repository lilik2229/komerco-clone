import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppMaterialModule } from '../app-material.module';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ItemListComponent } from './item-list.component';

@NgModule({
  imports: [
    CommonModule,
    AppMaterialModule,
    AppRoutingModule,
    SharedModule
  ],
  declarations: [ItemListComponent]
})
export class ItemsModule { }
