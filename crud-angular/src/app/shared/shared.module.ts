import { ConfirmationDialogComponent } from './../courses/components/confirmation-dialog/confirmation-dialog.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';

import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { CategoryPipe } from './pipes/category.pipe';



@NgModule({
  declarations: [
    ErrorDialogComponent,
    CategoryPipe,
    ConfirmationDialogComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule
  ],
  exports: [
    ErrorDialogComponent,
    ConfirmationDialogComponent,
    CategoryPipe
  ]
})
export class SharedModule { }
