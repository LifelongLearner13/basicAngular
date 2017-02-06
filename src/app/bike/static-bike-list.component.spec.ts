/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StaticBikeListComponent } from './static-bike-list.component';

describe('StaticBikeListComponent', () => {
  let component: StaticBikeListComponent;
  let fixture: ComponentFixture<StaticBikeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaticBikeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticBikeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
