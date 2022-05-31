import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acumulador',
  templateUrl: './acumulador.component.html',
  styleUrls: ['./acumulador.component.css']
})
export class AcumuladorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = ' Angular bases acumulador';

  numero: number = 2;

  duplicar(){
    this.numero = this.numero*2;
  }
  triplicar(){
    this.numero = this.numero*3;
  }
  reiniciar(){
    this.numero = 2;
  }

}
