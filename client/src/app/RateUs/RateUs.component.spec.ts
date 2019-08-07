/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RateUsComponent } from './RateUs.component';

describe('RateUsComponent', () => {
  let component: RateUsComponent;
  let fixture: ComponentFixture<RateUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RateUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RateUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
