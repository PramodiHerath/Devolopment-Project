/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CloseConfirmedBookingsComponent } from './closeConfirmedBookings.component';

describe('CloseConfirmedBookingsComponent', () => {
  let component: CloseConfirmedBookingsComponent;
  let fixture: ComponentFixture<CloseConfirmedBookingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloseConfirmedBookingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloseConfirmedBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
