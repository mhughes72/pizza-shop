import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaNutritionComponent } from './pizza-nutrition.component';

describe('PizzaNutritionComponent', () => {
  let component: PizzaNutritionComponent;
  let fixture: ComponentFixture<PizzaNutritionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaNutritionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaNutritionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
