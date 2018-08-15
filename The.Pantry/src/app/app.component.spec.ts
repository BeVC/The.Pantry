import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from './app.component';

// MODELS
//import { FoodListItemModel, FoodlistItem } from "./shared/models/foodlist-item";

describe('AppComponent', () => {
    //let data;
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;
    let myElementCollection: HTMLElement[];

    beforeEach(async(() => {
        //data = [];

        TestBed.configureTestingModule({
            declarations: [
                AppComponent
            ],
            imports: [
                RouterTestingModule
            ]
            //schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();

        fixture = TestBed.createComponent(AppComponent);
        component = fixture.debugElement.componentInstance;
    }));

    it('should create the app', async(() => {
        expect(component).toBeTruthy();
    }));

    /*it("data should be empty", () => {
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

    //it(`should have as title 'the-pantry'`, async(() => {
    //    const fixture = TestBed.createComponent(AppComponent);
    //    const app = fixture.debugElement.componentInstance;
    //    expect(app.title).toEqual('the-pantry');
    //}));

    //it('should render title in a h1 tag', async(() => {
    //    const fixture = TestBed.createComponent(AppComponent);
    //    fixture.detectChanges();
    //    const compiled = fixture.debugElement.nativeElement;
    //    expect(compiled.querySelector('h1').textContent).toContain('Welcome to the-pantry!');
    //}));*/
});
