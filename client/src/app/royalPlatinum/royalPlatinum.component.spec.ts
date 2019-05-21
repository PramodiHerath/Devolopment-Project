/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RoyalPlatinumComponent } from './royalPlatinum.component';

describe('RoyalPlatinumComponent', () => {
  let component: RoyalPlatinumComponent;
  let fixture: ComponentFixture<RoyalPlatinumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoyalPlatinumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoyalPlatinumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
