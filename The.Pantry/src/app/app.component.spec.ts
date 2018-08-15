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
});
