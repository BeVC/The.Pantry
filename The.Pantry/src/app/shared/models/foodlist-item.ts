export interface FoodListItemModel {
    name: string;
    date: Date;
    location: string;
    quantity: number;
}

export class FoodlistItem implements FoodListItemModel {
    name: string;
    date: Date;
    location: string;
    quantity: number;

    constructor(name: string = "") {
        this.name = name;
        this.date = new Date();
        this.location = "";
        this.quantity = 0;
    }
}
