import { Component, OnInit } from '@angular/core';

// MODELS
import { FoodListItemModel, FoodlistItem } from "../../shared/models/foodlist-item";

@Component({
    selector: 'app-foodlist',
    templateUrl: './foodlist.component.html',
    styleUrls: ['./foodlist.component.scss']
})
export class FoodlistComponent implements OnInit {
    data: FoodListItemModel[] = [];

    constructor() { }

    ngOnInit() {
        this.data = [new FoodlistItem("item1"), new FoodlistItem("item2")];
    }

}
