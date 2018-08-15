import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodlistRoutingModule } from './foodlist-routing.module';
import { FoodlistComponent } from './foodlist/foodlist.component';

@NgModule({
  imports: [
    CommonModule,
    FoodlistRoutingModule
  ],
  declarations: [FoodlistComponent]
})
export class FoodlistModule { }
