import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

import { AppMaterialModule } from './app-material.module';
import { AppRoutingModule } from './app-routing.module';

import { TopModule } from './top/top.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent    
  ],
  imports: [
    // angular提供のモジュール
    BrowserModule,
    // firebase系のモジュール
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    // 切り分けたモジュール
    AppMaterialModule,
    AppRoutingModule,
    TopModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
