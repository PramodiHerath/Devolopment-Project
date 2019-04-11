/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BookingTulipComponent } from './BookingTulip.component';

describe('BookingTulipComponent', () => {
  let component: BookingTulipComponent;
  let fixture: ComponentFixture<BookingTulipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingTulipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingTulipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
