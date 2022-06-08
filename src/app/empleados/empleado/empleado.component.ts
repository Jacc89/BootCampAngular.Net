import { Component, OnInit } from '@angular/core';
import { IEmpleado } from '../interface/empleado';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {
   empleadoAntiguo: IEmpleado[] = [
    {
      nombres: 'Alexandra',
      apellidos: ' Castro',
      direccion: 'cajica ',
      sueldo: 550000
    },
    {
      nombres: 'Alejandra',
      apellidos: 'Boorquez',
      direccion: 'Tocancipa ',
      sueldo: 450000
    },
    {
      nombres: 'Alexandra',
      apellidos: ' Clavijo',
      direccion: 'Sopo ',
      sueldo: 350000
    },
    {
      nombres: 'Jenny',
      apellidos: ' Garzon',
      direccion: 'Chia ',
      sueldo: 250000
    }
   ];

   tituloAntiguo= 'Listado Empleados Antiguos';
   tituloNuevo= 'Listado Empleados Nuevos';

   empleadosNuevos: IEmpleado[] = [
    {
      nombres: 'Maria',
      apellidos: ' Castañeda',
      direccion: 'cajica ',
      sueldo: 550000
    },
    {
      nombres: 'Laura',
      apellidos: 'Boorquez',
      direccion: 'Tocancipa ',
      sueldo: 450000
    },

   ];
  constructor() { }

  ngOnInit(): void {
  }

}
