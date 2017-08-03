/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DrsnikComponent } from './drsnik.component';

describe('DrsnikComponent', () => {
  let component: DrsnikComponent;
  let fixture: ComponentFixture<DrsnikComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrsnikComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrsnikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
