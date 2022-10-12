import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CrearUsuarioComponent } from './componentes/crear-usuario/crear-usuario.component';
import { LoginComponent } from './componentes/login/login.component';



const routesAutenticacion: Routes = [
  {
    path: 'crear',
    component: CrearUsuarioComponent
  },
  {
    path: '',
    component: LoginComponent
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
    ReactiveFormsModule,
    RouterModule.forChild(routesAutenticacion),
    MatSnackBarModule,
    RouterModule
  ],

})
export class AutenticacionModule { }
