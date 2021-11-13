import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotoEdgeComponent } from './roto-edge.component';

describe('RotoEdgeComponent', () => {
  let component: RotoEdgeComponent;
  let fixture: ComponentFixture<RotoEdgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RotoEdgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RotoEdgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
