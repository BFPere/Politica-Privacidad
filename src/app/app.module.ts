import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormulariComponent } from './formulari/formulari.component';
import { CheckformComponent } from './checkform/checkform.component';

@NgModule({
  declarations: [
    AppComponent,
    FormulariComponent,
    CheckformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [FormsModule, ReactiveFormsModule],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
