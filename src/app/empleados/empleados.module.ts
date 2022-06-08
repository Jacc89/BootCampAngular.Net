import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarEmpleadosComponent } from './listar-empleados/listar-empleados.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { AgregarEmpleadoComponent } from './agregar-empleado/agregar-empleado.component';

@NgModule({
  declarations: [
    EmpleadoComponent,
    ListarEmpleadosComponent,
    AgregarEmpleadoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    EmpleadoComponent,
    ListarEmpleadosComponent,
    AgregarEmpleadoComponent

  ],
})
export class EmpleadosModule { }
