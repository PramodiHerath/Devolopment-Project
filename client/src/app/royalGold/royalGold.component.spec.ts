/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RoyalGoldComponent } from './royalGold.component';

describe('RoyalGoldComponent', () => {
  let component: RoyalGoldComponent;
  let fixture: ComponentFixture<RoyalGoldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoyalGoldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoyalGoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
