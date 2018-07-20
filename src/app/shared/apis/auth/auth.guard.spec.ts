import { TestBed, async, inject } from '@angular/core/testing';
import {
    RouterTestingModule
} from '@angular/router/testing';

import { AuthService } from './auth.service';
import { AuthStubService } from './auth.stub.service';

import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers: [
        AuthGuard,
        {provide: AuthService, useClass: AuthStubService },
      ]
    });
  });

  it('should ...', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
