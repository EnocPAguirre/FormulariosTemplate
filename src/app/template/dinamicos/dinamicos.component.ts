import { Component, OnInit } from '@angular/core';

interface Persona {
  nombre: string;
  favoritos: Favorito[]
}

interface Favorito {
  id: number;
  nombre:string
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  persona: Persona = {
    nombre: 'Enoc',
    favoritos: [{
      id: 1, nombre: 'Metal Gear Solid'
    }]
  }

  constructor() { }

  ngOnInit(): void {
  }

  guardar(){

  }

  eliminar(index: number){
    this.persona.favoritos.splice(index, 1)

  }

}
