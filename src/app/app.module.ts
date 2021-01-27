import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule,ComponentesCreados } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackButtonDirective } from './util/back-button.directive';


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
