/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HandleClientsComponent } from './handleClients.component';

describe('HandleClientsComponent', () => {
  let component: HandleClientsComponent;
  let fixture: ComponentFixture<HandleClientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandleClientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandleClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
