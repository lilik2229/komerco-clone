import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppMaterialModule } from '../app-material.module';
import { AppRoutingModule } from '../app-routing.module';
import { TopComponent } from './top.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    AppMaterialModule,
    AppRoutingModule
  ],
  exports: [
    TopComponent,
    LoginComponent
  ],
  declarations: [
    TopComponent,
    LoginComponent
  ]
})
export class TopModule { }
