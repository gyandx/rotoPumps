import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotoSparesComponent } from './roto-spares.component';

describe('RotoSparesComponent', () => {
  let component: RotoSparesComponent;
  let fixture: ComponentFixture<RotoSparesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RotoSparesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RotoSparesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
