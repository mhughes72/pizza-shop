import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidesDetailComponent } from './sides-detail.component';

describe('SidesDetailComponent', () => {
  let component: SidesDetailComponent;
  let fixture: ComponentFixture<SidesDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidesDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
