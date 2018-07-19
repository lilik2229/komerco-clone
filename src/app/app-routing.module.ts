import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';

const appRoutes: Routes = [
  // {path: '', component: RecipeComponent, pathMatch: 'full'
  //  , canActivate: [AuthGuard]},
  {path: 'top', component: TopComponent},
  {path: '**', redirectTo: 'top'}
];
 
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    // AuthGuard
  ]
})
export class AppRoutingModule {}
