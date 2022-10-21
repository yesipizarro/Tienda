import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CrearComponent } from './componentes/crear/crear.component';
import { MatButtonModule } from '@angular/material/button';
import { CompartidoModule } from '../compartido/compartido.module';
import { AddproductoComponent } from './componentes/addproducto/addproducto.component';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';




const routesAdministrador: Routes = [
  {
    path: '',
    component: CrearComponent,
  },
  {
    path: 'add',
    component: AddproductoComponent
  },
  {
    path: 'add/:id',
    component: AddproductoComponent
  }
];


@NgModule({
  declarations: [CrearComponent, AddproductoComponent],
  imports: [
    RouterModule.forChild(routesAdministrador),
    CommonModule,
    MatButtonModule,
    CompartidoModule,
    MatIconModule,
    ReactiveFormsModule,
    CompartidoModule,
    MatSelectModule,
    MatSnackBarModule
  ]
})
export class AdministradorModule { }
