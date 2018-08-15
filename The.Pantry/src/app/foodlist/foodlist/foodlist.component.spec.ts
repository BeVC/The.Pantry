import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodlistComponent } from './foodlist.component';

// MODELS
import { FoodListItemModel, FoodlistItem } from "../../shared/models/foodlist-item";

describe('FoodlistComponent', () => {
    let component: FoodlistComponent;
    let fixture: ComponentFixture<FoodlistComponent>;
    let myElementCollection: HTMLElement[];

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FoodlistComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FoodlistComponent);
        component = fixture.componentInstance;
        //fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it("data should be empty", () => {
        expect(component.data.length).toBe(0);
    });

    it("data should no longer be empty", () => {
        component.data = [new FoodlistItem("item1"), new FoodlistItem("item2")];
        fixture.detectChanges();
        expect(component.data.length).toBe(2);
    });

    it("li should have content", () => {
        component.data = [new FoodlistItem("item1"), new FoodlistItem("item2")];
        fixture.detectChanges();
        myElementCollection = fixture.nativeElement.querySelectorAll("li");
        expect(myElementCollection.length).toBe(2, "nothing displayed");
    });
});
