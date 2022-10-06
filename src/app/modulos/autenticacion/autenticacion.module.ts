import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './componentes/login/login.component';
import { CrearUsuarioComponent } from './componentes/crear-usuario/crear-usuario.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


const routesAutenticacion: Routes = [
  {
    path: 'crear',
    component: CrearUsuarioComponent
  }
]

@NgModule({
  declarations: [
    LoginComponent,
    CrearUsuarioComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    RouterModule.forChild(routesAutenticacion)
  ]
})
export class AutenticacionModule { }
