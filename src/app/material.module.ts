import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [],
  imports: [
    MatProgressSpinnerModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    MatProgressSpinnerModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class MaterialModule { }
