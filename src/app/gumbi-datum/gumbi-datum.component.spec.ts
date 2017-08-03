/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GumbiDatumComponent } from './gumbi-datum.component';

describe('GumbiDatumComponent', () => {
  let component: GumbiDatumComponent;
  let fixture: ComponentFixture<GumbiDatumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GumbiDatumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GumbiDatumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
