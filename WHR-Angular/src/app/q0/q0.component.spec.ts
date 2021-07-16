import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Q0Component } from './q0.component';

describe('Q0Component', () => {
  let component: Q0Component;
  let fixture: ComponentFixture<Q0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Q0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Q0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
