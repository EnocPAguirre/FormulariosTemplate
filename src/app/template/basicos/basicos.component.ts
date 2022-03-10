import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  
@ViewChild('miFormualrio') miFormulario!: NgForm 

nombreValido(){
  return this.miFormulario.controls['producto']?.invalid || 
              this.miFormulario.controls['producto']?.touched
}

  guardar(){
   this.miFormulario 
  }

  constructor() { }

  ngOnInit(): void {
  }

}
