import { Component, Input, OnInit } from '@angular/core';
import { IEmpleado } from '../interface/empleado';

@Component({
  selector: 'app-listar-empleados',
  templateUrl: './listar-empleados.component.html',
  styleUrls: ['./listar-empleados.component.css']
})
export class ListarEmpleadosComponent implements OnInit {

  etiquetaBorrar: string = '';
  @Input()
  empleados : IEmpleado[] = [];

  @Input()
  titulo: string= '';
  constructor() { }

  ngOnInit(): void {
  }

  borrar(){
    console.log('hola funciona');
    const emp = this.empleados.shift();
    if (emp !== undefined) {
      this.etiquetaBorrar = emp?.nombres + ' '+ emp?.apellidos;
    } else {
      this.etiquetaBorrar = '';

    }

  }

}
