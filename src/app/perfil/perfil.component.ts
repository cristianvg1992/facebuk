import { Component, OnInit } from '@angular/core';

// SE IMPORTARÁ UNA LIBRERÍA PARA CONSUMIR UN SERVICIO WEB
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
	public listaPublicaciones: any;

  constructor(private post: HttpClient) {}

  ngOnInit() {
  	this.obtenerPublicaciones();
  }

  /** MÉTODOS DE PETICIÓN
  * GET	
  * POST
  * PUT
  * DELETE
  */
  public obtenerPublicaciones(): void {
  	this.post.get('https://jsonplaceholder.typicode.com/posts').subscribe(
  		response => {
  			console.log(response);
  			this.listaPublicaciones = response;
  		}, 
  		error => {}
  	);
  }

  public darLike(publicacion: string): void {
  	alert('Le has dado like a ' + publicacion);
  }

}
