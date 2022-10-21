import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'inicio',
    loadChildren: () => import('./modulos/ventas/ventas.module').then(m => m.VentasModule)
  },
  {
    path: 'autenticacion',
    loadChildren: () => import('./modulos/autenticacion/autenticacion.module').then(m => m.AutenticacionModule)
  },
  {
    path: 'admi',
    loadChildren: () => import('./modulos/administrador/administrador.module').then(m => m.AdministradorModule)
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
