import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-checkform',
  templateUrl: './checkform.component.html',
  styleUrls: ['./checkform.component.css']
})

export class CheckformComponent implements OnInit{
tipopersona2: string="Probando";
persona!: string;

  formulariocheck = new FormGroup({
    persona: new FormControl('fisica'),
  });

  ngOnInit(): void {  
  }

  submit() {
    console.log("hola");
  }

}
