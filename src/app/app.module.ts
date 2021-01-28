import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule,ComponentesCreados } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackButtonDirective } from './util/back-button.directive';
import { StarModule } from './shared/star.module';
import { ProductosModule } from './comp/deptos/productos/productos.module';


@NgModule({
  declarations: [
    AppComponent,
    ComponentesCreados,
    BackButtonDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StarModule,
    ProductosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
