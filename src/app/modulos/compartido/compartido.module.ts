import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoComponent } from '../../producto/producto.component';
import { MatButtonModule } from '@angular/material/button';
import { ErrorTooltipDirective } from './directivas/resaltar.directive';



@NgModule({
  declarations: [ProductoComponent, ErrorTooltipDirective],
  imports: [
    CommonModule,
    MatButtonModule,
  ],
  exports: [ProductoComponent, ErrorTooltipDirective]
})
export class CompartidoModule { }
