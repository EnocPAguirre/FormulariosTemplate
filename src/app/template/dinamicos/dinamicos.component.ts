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
  nuevoJuego: string  = '';
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

  agregarJuego(){
    const nuevoFavorito: Favorito = {} as Favorito;
    nuevoFavorito.id = this.persona.favoritos.length +1;
    nuevoFavorito.nombre = this.nuevoJuego;

    this.persona.favoritos.push({...nuevoFavorito});
    this.nuevoJuego = '';

  }

  eliminar(index: number){
    this.persona.favoritos.splice(index, 1)

  }

}
