import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { CheckformComponent } from '../checkform/checkform.component';


@Component({
  selector: 'app-formulari',
  templateUrl: './formulari.component.html',
  styleUrls: ['./formulari.component.css']
})
export class FormulariComponent implements OnInit {

  formulario!: FormGroup;
  checkform: any;

  constructor(private formBuilder: FormBuilder) {}

  url: string = "______________";
  nombreurl: string = "______________";
  persona: string ="fisica";


  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      url: ['', [Validators.required, 
        Validators.pattern('(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})(\.[a-zA-Z0-9]{2,})?')]],
      nombreurl: ['', [Validators.required]],

    });
  }

  onSubmit(_datosForm: any) {
    this.url = _datosForm.value.url;
    this.nombreurl = _datosForm.value.nombreurl;
    // this.persona = this.checkform.formulariocheck.value.persona;
  }

  get m(){
    return this.formulario.controls
  }
}
