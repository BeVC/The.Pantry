import { Component, OnInit } from '@angular/core';
//import { Http } from '@angular/http';

// MODELS
//import { FoodListItemModel, FoodlistItem } from "./shared/models/foodlist-item";


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    //title = 'the-pantry';
    //public values: string[];

    //constructor(private http: Http) {
    //    this.http.get('/api/values').subscribe(result => {
    //        this.values = result.json() as string[];
    //    }, error => console.error(error));
    //}

    //data: FoodListItemModel[] = [];

    constructor() { }

    //#region Angular Events
    ngOnInit() {
        //this.data = [new FoodlistItem("item1"), new FoodlistItem("item2")];
    }
    //#endregion
}