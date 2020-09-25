import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsOverviewComponent } from './items-overview/items-overview.component';

const routes: Routes = [
  {
    path: '',
    component: ItemsOverviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule { }
