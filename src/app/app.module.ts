import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormulariComponent } from './formulari/formulari.component';

@NgModule({
  declarations: [
    AppComponent,
    FormulariComponent
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
