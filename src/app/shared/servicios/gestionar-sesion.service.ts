import { Injectable } from '@angular/core';
import { Isession } from 'src/app/pojos/isession';

@Injectable({
  providedIn: 'root'
})
export class GestionarSesionService {

  constructor() { }

  private isUserLoggedIn:boolean  = false;
  public SessionLogged:Isession;


  setSession(Sesion:Isession) {
    this.isUserLoggedIn = true;
    this.SessionLogged = Sesion;
    //localStorage.setItem('currentUser', JSON.stringify(Sesion));
    sessionStorage.setItem('currentUser', JSON.stringify(Sesion));
  }

  getSession() {
  	return JSON.parse(sessionStorage.getItem('currentUser'));
  }

  isAuthenticated(): boolean {
    return this.isUserLoggedIn;
  };
  
  LogOut():void{
    //localStorage.removeItem('currentUser');
    sessionStorage.removeItem('currentUser');
    this.SessionLogged = null;
    this.isUserLoggedIn = false;
  }
}
