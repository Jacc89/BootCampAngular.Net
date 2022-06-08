import { Component, OnInit } from '@angular/core';
import { ICliente } from '../interfaces/cliente';


@Component({
  selector: 'app-pagina-inicio',
  templateUrl: './pagina-inicio.component.html',
  styleUrls: ['./pagina-inicio.component.css']
})
export class PaginaInicioComponent implements OnInit {

  nuevo: ICliente={
    nombre:'',
    credito: 0
  }

  clientes: ICliente[]= [
    {
      nombre: 'Alexandra Castro',
      credito: 98000
    },
    {
      nombre: 'Manuel Garcia',
      credito: 34000
    },
    {
      nombre: 'Alejandra Gonzalez',
      credito: 25000
    },
    {
      nombre: 'Alejandro Castillo',
      credito: 22000
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }
  Agregar(): void{
    console.log(this.nuevo);
    if (this.nuevo.nombre.trim().length ===0) {
      return;
    }
    if (this.nuevo.credito === null) {
      return;
    }

    this.clientes.push(this.nuevo);
    this.nuevo = {
      nombre: '',
      credito: 0
    }

  }

}
