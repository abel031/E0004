import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule,ComponentesCreados } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeptoComponent } from './comp/deptos/depto/depto.component';


@NgModule({
  declarations: [
    AppComponent,
    ComponentesCreados
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }