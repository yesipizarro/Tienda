import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { CrearUsuarioComponent } from './modulos/autenticacion/componentes/crear-usuario/crear-usuario.component';
import { LoginComponent } from './modulos/autenticacion/componentes/login/login.component';


const routes: Routes = [

  {
    path: 'autenticacion',
    loadChildren: () => import('./modulos/autenticacion/autenticacion.module').then(m => m.AutenticacionModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
