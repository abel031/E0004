import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule,ComponentesCreados } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeptoComponent } from './comp/deptos/depto/depto.component';
import { BackButtonDirective } from './util/back-button.directive';
import { TareasComponent } from './comp/deptos/tareas/tareas.component';


@NgModule({
  declarations: [
    AppComponent,
    ComponentesCreados,
    BackButtonDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
