import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShapeCircleComponent } from './shape-circle.component';

describe('ShapeCircleComponent', () => {
  let component: ShapeCircleComponent;
  let fixture: ComponentFixture<ShapeCircleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShapeCircleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShapeCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
