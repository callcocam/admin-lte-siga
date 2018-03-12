import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuestRouterService implements CanActivate {

  constructor(private authService: AuthService, private route: Router) { } 
 
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    
    if(this.authService.check){
      this.route.navigate(['admin/dashboard'])
      return false;
    }
    return true;
  }
}
