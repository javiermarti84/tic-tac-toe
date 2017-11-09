import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShapeCloseComponent } from './shape-close.component';

describe('ShapeCloseComponent', () => {
  let component: ShapeCloseComponent;
  let fixture: ComponentFixture<ShapeCloseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShapeCloseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShapeCloseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
