import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiPurposeComponent } from './multi-purpose.component';

describe('MultiPurposeComponent', () => {
  let component: MultiPurposeComponent;
  let fixture: ComponentFixture<MultiPurposeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiPurposeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiPurposeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
