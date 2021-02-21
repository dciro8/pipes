import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre: string = `Capitan america`;

  arreglo = [1,2,3,4,5,6,7,8,9,10];


  pipe: number =Math.PI;



  porcetaje: number= 0.235;

  moneda: number=1234.5;

  valorPromesa = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('Llego la data');
    },4500);
  }
  );

  heroe={
    nombre: 'Logan',
    calve: 'Wolverin',
    edad: 500,
    direccion: {
      calle: 'primera',
      casa: 20
    }
  }
}
