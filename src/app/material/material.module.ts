import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [],
  imports: [
    MatProgressSpinnerModule,
    MatCardModule
  ],
  exports: [
    MatProgressSpinnerModule,
    MatCardModule
  ]
})
export class MaterialModule { }
