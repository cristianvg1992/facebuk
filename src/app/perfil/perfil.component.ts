import { Component, OnInit } from '@angular/core';

// SE IMPORTARÁ UNA LIBRERÍA PARA CONSUMIR UN SERVICIO WEB
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
	public listaPublicaciones: any = [];

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
  	/** this.post.get('https://jsonplaceholder.typicode.com/posts').subscribe(
  		response => {
  			console.log(response);
  			this.listaPublicaciones = response;
  		}, 
  		error => {}
  	);*/
    console.log(localStorage.getItem('post'));
    this.listaPublicaciones = (JSON.parse(localStorage.getItem('post')) == null) ? [] : JSON.parse(localStorage.getItem('post'));
  }

  public darLike(publicacion: string): void {
  	alert('Le has dado like a ' + publicacion);
  }

  public publicarPost(post: string): void {
    if(post !== '' && post !== undefined && post != "") {

      this.listaPublicaciones = (JSON.parse(localStorage.getItem('post')) == null) ? [] : JSON.parse(localStorage.getItem('post'));
      console.log(this.listaPublicaciones);

      var amorcito = 4 + 5;

      var publicacion = {
          title: amorcito,
          body: post
       };

       this.listaPublicaciones.push(publicacion);
      
      // Para almacenar datos en el navegador se utiliza localstorage
      localStorage.setItem('post', JSON.stringify(this.listaPublicaciones));
      
      this.obtenerPublicaciones();
    }
  }

}
