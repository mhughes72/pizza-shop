import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaladDetailComponent } from './salad-detail.component';

describe('SaladDetailComponent', () => {
  let component: SaladDetailComponent;
  let fixture: ComponentFixture<SaladDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaladDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaladDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
