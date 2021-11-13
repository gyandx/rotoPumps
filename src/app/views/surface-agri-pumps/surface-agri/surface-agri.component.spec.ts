import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurfaceAgriComponent } from './surface-agri.component';

describe('SurfaceAgriComponent', () => {
  let component: SurfaceAgriComponent;
  let fixture: ComponentFixture<SurfaceAgriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurfaceAgriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurfaceAgriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
