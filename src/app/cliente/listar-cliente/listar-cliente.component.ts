import { Component, Input, OnInit } from '@angular/core';
import { ICliente } from '../interfaces/cliente';

@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrls: ['./listar-cliente.component.css']
})
export class ListarClienteComponent implements OnInit {

  @Input() clientes : ICliente[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
