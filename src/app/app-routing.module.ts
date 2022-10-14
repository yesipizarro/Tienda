import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'autenticacion',
    loadChildren: () => import('./modulos/autenticacion/autenticacion.module').then(m => m.AutenticacionModule)
  },
  {
    path: '',
    redirectTo: 'autenticacion',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
