import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { CoreModule } from "./core/core.module";
import { SharedModule } from "./shared/shared.module";
import { FoodlistModule } from "./foodlist/foodlist.module"; 
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
      HttpModule,

      CoreModule,
      SharedModule,
      FoodlistModule,
      AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
