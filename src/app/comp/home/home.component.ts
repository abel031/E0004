import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Isession } from 'src/app/pojos/isession';
import { GestionarSesionService } from 'src/app/shared/servicios/gestionar-sesion.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public logged:Isession;

  constructor(private router:Router, private Session: GestionarSesionService) { 
      this.logged=this.Session.getSession();
  }

  ngOnInit(): void {
  }

  Salir(){     
    this.Session.LogOut();
    this.router.navigateByUrl('/login');
  }


}
