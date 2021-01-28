import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Isession } from 'src/app/pojos/isession';
import { GestionarSesionService } from '../../shared/servicios/gestionar-sesion.service';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private login:  LoginService, private router: Router, private Session:GestionarSesionService) { }

  ngOnInit(): void {
  }

  logIn(username: string, password: string, event: Event) {
    console.log(event);
    event.preventDefault();

    if (this.login.Testlogin(username, password))  { 
          let token="Token";
          let u: Isession = {username: username,token:token};        
          this.Session.setSession(u);
          this.router.navigateByUrl('/Home');
          
    } else {
           this.router.navigateByUrl('Login');
    }
}

}
