import { TestBed } from '@angular/core/testing';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

import { authGuard } from './auth.guard'; // Assuming the guard class is named AuthGuard

describe('AuthGuard', () => {
  let guard: authGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [authGuard], // Provide the guard as a dependency
    });
    guard = TestBed.inject(authGuard); // Inject the guard instance
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should allow access when authenticated', () => {
    // Here you can write tests to simulate an authenticated user
    // and verify that the guard allows access as expected.
    const mockRouteSnapshot = {} as ActivatedRouteSnapshot;
    const mockRouterState = {} as RouterStateSnapshot;
    const result = guard.canActivate(mockRouteSnapshot, mockRouterState);
    expect(result).toBe(true);
  });

  it('should deny access when not authenticated', () => {
    // Similarly, you can write tests to simulate a non-authenticated user
    // and verify that the guard denies access as expected.
    const mockRouteSnapshot = {} as ActivatedRouteSnapshot;
    const mockRouterState = {} as RouterStateSnapshot;
    const result = guard.canActivate(mockRouteSnapshot, mockRouterState);
    expect(result).toBe(false);
  });
});
