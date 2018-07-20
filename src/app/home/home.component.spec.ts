import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

@Component({selector: 'app-header', template: ''})
class HeaderStubComponent {}

@Component({selector: 'app-articles', template: ''})
class ArticlesStubComponent {}

@Component({selector: 'app-footer', template: ''})
class FooterStubComponent {}

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        HeaderStubComponent,
        ArticlesStubComponent,
        FooterStubComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
