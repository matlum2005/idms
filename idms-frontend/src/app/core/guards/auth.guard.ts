import { Injectable } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

/**
 * Default implementation: ALLOW ALL (per current app needs).
 *
 * Extend later to enforce auth (e.g., token check / roles).
 */
@Injectable({ providedIn: 'root' })
export class AuthGuard {
  constructor(private readonly router: Router) {}

  canActivate: CanActivateFn = () => {
    // Allow all routes for now.
    return true;
  };
}

/**
 * Functional guard export (Angular Router accepts this shape too).
 */
export const authGuard: CanActivateFn = () => true;

