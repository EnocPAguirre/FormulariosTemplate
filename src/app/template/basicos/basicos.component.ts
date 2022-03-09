import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  guardar(miFormulario: NgForm){
    miFormulario.value
  }

  constructor() { }

  ngOnInit(): void {
  }

}
