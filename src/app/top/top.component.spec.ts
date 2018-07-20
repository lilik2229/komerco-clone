import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopComponent } from './top.component';

@Component({selector: 'app-login', template: ''})
class LoginStubComponent {}

describe('TopComponent', () => {
  let component: TopComponent;
  let fixture: ComponentFixture<TopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TopComponent,
        LoginStubComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
