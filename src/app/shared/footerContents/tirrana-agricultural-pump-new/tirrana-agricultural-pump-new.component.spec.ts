import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TirranaAgriculturalPumpNewComponent } from './tirrana-agricultural-pump-new.component';

describe('TirranaAgriculturalPumpNewComponent', () => {
  let component: TirranaAgriculturalPumpNewComponent;
  let fixture: ComponentFixture<TirranaAgriculturalPumpNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TirranaAgriculturalPumpNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TirranaAgriculturalPumpNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
