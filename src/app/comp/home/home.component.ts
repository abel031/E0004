import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Session } from 'inspector';
import { GestionarSesionService } from '../login/gestionar-sesion.service';

@Component({
  selector: 'Home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private session:GestionarSesionService, private router: Router) { }

  ngOnInit(): void {
  }

  Salir(){
    this.session.LogOut();
    this.router.navigateByUrl('Login');
  }

}
