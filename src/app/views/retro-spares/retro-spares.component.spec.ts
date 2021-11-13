import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetroSparesComponent } from './retro-spares.component';

describe('RetroSparesComponent', () => {
  let component: RetroSparesComponent;
  let fixture: ComponentFixture<RetroSparesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetroSparesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetroSparesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
