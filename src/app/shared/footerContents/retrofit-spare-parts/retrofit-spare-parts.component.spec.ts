import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrofitSparePartsComponent } from './retrofit-spare-parts.component';

describe('RetrofitSparePartsComponent', () => {
  let component: RetrofitSparePartsComponent;
  let fixture: ComponentFixture<RetrofitSparePartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetrofitSparePartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetrofitSparePartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
