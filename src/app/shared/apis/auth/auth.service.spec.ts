import { TestBed, inject } from '@angular/core/testing';
import {
    RouterTestingModule
} from '@angular/router/testing';
import { AngularFireAuth } from 'angularfire2/auth';

import {
  AngularFireAuthStubService
} from '../../../mock/angular-fireauth.stub.service';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers: [
        AuthService,
        {provide: AngularFireAuth, useClass: AngularFireAuthStubService },
      ]
    });
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
});
