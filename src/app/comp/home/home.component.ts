import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GestionarSesionService } from '../../shared/servicios/gestionar-sesion.service';

@Component({
  selector: 'Home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private sesion:GestionarSesionService, private router: Router) { }

  ngOnInit(): void {
  }

  Salir(){
    this.sesion.LogOut();
    this.router.navigateByUrl('Login');
  }

}
