import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../../environments/environment';
import { MaterialModule } from '../material.module';
import { ItemCardComponent } from './item-card/item-card.component';
import { ItemsOverviewComponent } from './items-overview/items-overview.component';
import { PortfolioRoutingModule } from './portfolio-routing.module';



@NgModule({
  declarations: [
    ItemsOverviewComponent,
    ItemCardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    PortfolioRoutingModule,
    AngularFirestoreModule,
    AngularFireStorageModule
  ]
})
export class PortfolioModule { }
