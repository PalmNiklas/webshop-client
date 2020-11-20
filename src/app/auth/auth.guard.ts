import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, Route, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthenticationService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const url = state.url;

      return this.checkIfLoggedIn(route, url)
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }

  checkIfLoggedIn(route: ActivatedRouteSnapshot, url: string): boolean | UrlTree{
    if(this.authService.currentUserValue){
      const userRole = this.authService.getCurrentUserRole();
      if(typeof route.data.role != "undefined" && route.data.role !== userRole){
        this.router.navigate(['/']);
        return false;
      }else
      return true;
    }
    this.authService.redirectUrl = url
    return this.router.parseUrl('/login')
  }
  
}
