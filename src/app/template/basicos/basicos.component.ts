import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [],
})
export class BasicosComponent implements OnInit {
  @ViewChild('miFormualrio') miFormulario!: NgForm;

  initForm = {
    producto: '',
    precio: 10,
    existencias: 10
  }

  nombreValido() {
    return (
      this.miFormulario.controls['producto']?.invalid ||
      this.miFormulario.controls['producto']?.touched
    );
  }

  guardar() {
    this.miFormulario.resetForm({
      precio: 0,
      producto: 1
    });
  }

  precioValido() {
    this.miFormulario.controls['precio'].setErrors(null);
    return (
      this.miFormulario.controls['precio'].touched ||
      this.miFormulario.controls['precio'].value > 0
    );
  }

  constructor() {}

  ngOnInit(): void {}
}
