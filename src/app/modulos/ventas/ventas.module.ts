import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { TarjetaComponent } from './componentes/tarjeta/tarjeta.component';
import { HeaderComponent } from './componentes/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { CompartidoModule } from '../compartido/compartido.module';




const routesVentas: Routes = [
  {
    path: '',
    component: InicioComponent,
    children: [
      {
        path: '',
        component: TarjetaComponent
      },

    ]
  }
]

@NgModule({
  declarations: [
    InicioComponent,
    TarjetaComponent,
    HeaderComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    RouterModule.forChild(routesVentas),
    CompartidoModule
  ],

})
export class VentasModule { }
