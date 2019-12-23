import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'facebuk';

	public imprimirMensaje(nombre: string = 'Luis', edad: number = 18):  void {
		if(edad >= 18){
			alert(nombre + ' es mayor de edad');
		}else {
			alert(nombre + ' no es mayor de edad');
		}
	}

	public calcularTablas(numero: number = 1): void {
		for (let i = 1; i <= 10; i++) {
			console.log(numero + ' * ' + i + ' = ' + (numero * i));
		}
	}
}
