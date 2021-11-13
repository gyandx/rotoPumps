import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosedCoupleComponent } from './closed-couple.component';

describe('ClosedCoupleComponent', () => {
  let component: ClosedCoupleComponent;
  let fixture: ComponentFixture<ClosedCoupleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClosedCoupleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosedCoupleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
