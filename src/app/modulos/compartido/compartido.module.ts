import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoComponent } from './componentes/producto/producto.component';
import { MatButtonModule } from '@angular/material/button';
import { ErrorTooltipDirective } from './directivas/resaltar.directive';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [ProductoComponent, ErrorTooltipDirective],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [ProductoComponent, ErrorTooltipDirective]
})
export class CompartidoModule { }
