import { NgModule } from '@angular/core';
import {
  MatNativeDateModule,
  MatIconModule,
  MatMenuModule,
  MatToolbarModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatSelectModule,
  MatDatepickerModule,
  MatSnackBarModule
} from '@angular/material';

import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE
} from '@angular/material/core';

@NgModule({
  exports: [
    MatDatepickerModule,
    MatNativeDateModule,
    MatNativeDateModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatSelectModule,
    MatSnackBarModule,
  ],
  providers: [
  ]
})
export class AppMaterialModule { }
