import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpleadoComponent } from './empleado/empleado.component';
import { ListarEmpleadosComponent } from './listar-empleados/listar-empleados.component';
import { AgregarEmpleadoComponent } from './agregar-empleado/agregar-empleado.component';



@NgModule({
  declarations: [
    EmpleadoComponent,
    ListarEmpleadosComponent,
    AgregarEmpleadoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EmpleadosModule { }
