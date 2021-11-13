import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BareShaftComponent } from './bare-shaft.component';

describe('BareShaftComponent', () => {
  let component: BareShaftComponent;
  let fixture: ComponentFixture<BareShaftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BareShaftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BareShaftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
