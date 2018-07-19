import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppMaterialModule } from '../app-material.module';
import { TopComponent } from './top.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    AppMaterialModule
  ],
  exports: [
  ],
  declarations: [
  TopComponent]
})
export class TopModule { }
