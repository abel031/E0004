import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  Testlogin(username:string, password:string) {
    let rdo= ((username=="Abel" )&& (password =="123")) ? true : false;
    return rdo; 
  }
}
