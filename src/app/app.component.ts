import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = ' Angular bases';

  numero: number = 2;

  duplicar(){
    this.numero = 2;
  }
}
