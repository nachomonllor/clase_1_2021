import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clase01';


  edad1:number = 0.0;
  edad2:number = 0.0;

  CambiarTitulo()
  {
    this.title = "otro titulo";
  }
 
  suma:number = 0.0;
  prom:number = 0.0;

  Calcular() {
    this.suma = +this.edad1 + +this.edad2;
    this.prom = this.suma / 2.0;
  }

  Limpiar() {
    this.edad1 =0;
    this.edad2 =0;
    this.prom = 0;
  }






}
