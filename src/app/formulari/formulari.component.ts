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
  });

  url: string = "______________";
  nombreurl: string = "______________";
  tipopersona!: string;


  ngOnInit(): void {
  }

  onSubmit(_datosForm: any) {
    this.url = _datosForm.value.url;
    this.nombreurl = _datosForm.value.nombreurl;
    this.tipopersona = _datosForm.value.persona;
  }

  get m(){
    return this.formulario.controls
  }
}
