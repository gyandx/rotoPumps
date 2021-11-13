import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TirranaGeneralPumpComponent } from './tirrana-general-pump.component';

describe('TirranaGeneralPumpComponent', () => {
  let component: TirranaGeneralPumpComponent;
  let fixture: ComponentFixture<TirranaGeneralPumpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TirranaGeneralPumpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TirranaGeneralPumpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
