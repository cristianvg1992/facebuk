import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { PerfilComponent } from './perfil/perfil.component';

import { MenuComponent } from './menu/menu.component';


const routes: Routes = [
	{
		path: '', component: MenuComponent
	},
	{
		path: 'login', component: LoginComponent
	},
	{
		path: 'registro', component: RegistroComponent
	},
	{
		path: 'perfil', component: PerfilComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
