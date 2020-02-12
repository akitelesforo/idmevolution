import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // return true;
    if (this.authService.isAuthenticated()) { return true; }
    this.authService.login();
    // this.router.navigate(['/register'], { queryParams: { redirect: state.url }, replaceUrl: true });
    return false;
  }

}
