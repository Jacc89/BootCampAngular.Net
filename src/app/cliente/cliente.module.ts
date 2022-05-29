import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaInicioComponent } from './pagina-inicio/pagina-inicio.component';
import { ListarClienteComponent } from './listar-cliente/listar-cliente.component';
import { AgregarClienteComponent } from './agregar-cliente/agregar-cliente.component';



@NgModule({
  declarations: [
    AgregarClienteComponent,
    ListarClienteComponent,
    PaginaInicioComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ClienteModule { }
