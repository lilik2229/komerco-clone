import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService    
  ) { }
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {      
      return true; //大変良くないけど、開発中はguardなしで
      const redirectUrlAfterLogout: string = '/top';
      
      if(this.authService.isLogin()){
        return true;
      }

      this.router.navigateByUrl(redirectUrlAfterLogout);
      return false;
    }
}
