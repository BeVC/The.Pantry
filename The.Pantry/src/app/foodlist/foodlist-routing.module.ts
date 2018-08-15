import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FoodlistComponent } from "./foodlist/foodlist.component";

const routes: Routes = [
    { path: 'foodlist', component: FoodlistComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodlistRoutingModule { }
