/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RoyalSilverComponent } from './royalSilver.component';

describe('RoyalSilverComponent', () => {
  let component: RoyalSilverComponent;
  let fixture: ComponentFixture<RoyalSilverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoyalSilverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoyalSilverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
