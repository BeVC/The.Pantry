import { FoodlistModule } from './foodlist.module';

describe('FoodlistModule', () => {
  let foodlistModule: FoodlistModule;

  beforeEach(() => {
    foodlistModule = new FoodlistModule();
  });

  it('should create an instance', () => {
    expect(foodlistModule).toBeTruthy();
  });
});
