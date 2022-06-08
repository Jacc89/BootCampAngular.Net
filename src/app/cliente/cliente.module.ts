import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaInicioComponent } from './pagina-inicio/pagina-inicio.component';
import { ListarClienteComponent } from './listar-cliente/listar-cliente.component';
import { AgregarClienteComponent } from './agregar-cliente/agregar-cliente.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AgregarClienteComponent,
    ListarClienteComponent,
    PaginaInicioComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ], exports:[
    AgregarClienteComponent,
    ListarClienteComponent,
    PaginaInicioComponent

  ]
})
export class ClienteModule { }
