import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, TimeoutError } from 'rxjs';
import { GestionarSesionService } from './gestionar-sesion.service';

@Injectable({
  providedIn: 'root'
})
export class AutenticadoGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.session.isAuthenticated()){
      return true;
    }
    this.router.navigateByUrl('Login');
    return false;
  }

  constructor(private session:GestionarSesionService, private router: Router) { }
  
}
