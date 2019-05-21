/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PlanEventComponent } from './planEvent.component';

describe('PlanEventComponent', () => {
  let component: PlanEventComponent;
  let fixture: ComponentFixture<PlanEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
