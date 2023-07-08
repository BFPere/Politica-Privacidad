import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-formulari',
  templateUrl: './formulari.component.html',
  styleUrls: ['./formulari.component.css']
})
export class FormulariComponent implements OnInit {

  formulario = new FormGroup({
    url: new FormControl('', [Validators.required, 
      Validators.pattern('(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})(\.[a-zA-Z0-9]{2,})?')]),
    nombreurl: new FormControl('', [Validators.required]), 
    persona: new FormControl('fisica'),
    responsable: new FormControl('', [Validators.required]), 
    nif: new FormControl('', [Validators.required, 
      Validators.pattern("^[0-9a-zA-Z][0-9]{7,7}[0-9a-zA-Z]$")]),
    direccion: new FormControl('', [Validators.required]), 
    telefono: new FormControl('', [Validators.required, 
      Validators.pattern("^[0-9]{9,9}$")]),
    email: new FormControl('', [Validators.required, 
      Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9]{2,4}$")]),
    datos: new FormControl('identidad'),
    tiempo: new FormControl('', [Validators.required]), 
    compartir: new FormControl('compartirno'),
    comentarios: new FormControl(''),
    SSL: new FormControl('true'),
    })

  url: string = "";
  nombreurl: string = "";
  tipopersona!: string;
  responsable: string = "";
  nif!: string;
  direccion: string = "";
  telefono!: number;
  email: string = "";
  tipodatos!: string;
  tiempo: string = "";
  compartirdatos!: string;
  comentarios: string = "";
  SSL: boolean = true;

  ngOnInit(): void {
  }

  onSubmit(_datosForm: any) {
    this.url = _datosForm.value.url;
    this.nombreurl = _datosForm.value.nombreurl;
    this.tipopersona = _datosForm.value.persona;
    this.responsable = _datosForm.value.responsable;
    this.nif = _datosForm.value.nif;
    this.direccion = _datosForm.value.direccion;
    this.telefono = _datosForm.value.telefono;
    this.email = _datosForm.value.email;
    this.tipodatos = _datosForm.value.datos;
    this.tiempo = _datosForm.value.tiempo;
    this.compartirdatos = _datosForm.value.compartir;
    this.comentarios = _datosForm.value.comentarios;
    this.SSL = _datosForm.value.SSL;
    console.log(this.url);
    console.log(this.nombreurl);
    console.log(this.tipopersona);
    console.log(this.responsable);
    console.log(this.nif);
    console.log(this.direccion);
    console.log(this.telefono);
    console.log(this.email);
    console.log(this.tipodatos);
    console.log(this.tiempo);
    console.log(this.compartirdatos);
    console.log(this.comentarios);
    console.log(this.SSL);
  }

  get m(){
    return this.formulario.controls
  }
}
