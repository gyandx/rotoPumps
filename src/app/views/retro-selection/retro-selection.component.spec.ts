import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetroSelectionComponent } from './retro-selection.component';

describe('RetroSelectionComponent', () => {
  let component: RetroSelectionComponent;
  let fixture: ComponentFixture<RetroSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetroSelectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetroSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
