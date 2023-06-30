import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';


@Component({
  selector: 'app-formulari',
  templateUrl: './formulari.component.html',
  styleUrls: ['./formulari.component.css']
})
export class FormulariComponent implements OnInit {

  formulario!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  url: string = "______________";

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      url: ['', [Validators.required, 
        Validators.pattern('(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})(\.[a-zA-Z0-9]{2,})?')]],
      apellidos: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required]]
    });
  }


  onSubmit(_datosForm: any) {
    this.url = _datosForm.value.url;
  }

  get m(){
    return this.formulario.controls
  }
}
