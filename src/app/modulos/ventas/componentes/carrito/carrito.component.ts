import { Component, OnInit } from '@angular/core';
import { IProductoDetalle } from 'src/app/modulos/compartido/interfaces/producto.interface';
import { OrdenesCarritoService } from 'src/app/servicios/ordenes-carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {
  productosPedidos: IProductoDetalle[] = [];

  constructor(private ordenesCarritoService: OrdenesCarritoService) { }

  ngOnInit(): void {
    this.productosPedidos = this.ordenesCarritoService.productosPedidos;
  }

  get total(): number {
    return this.productosPedidos
      .map(producto => producto.precio)
      .reduce(
        (precioAnterior: number, precioActual: number) => {
          return precioAnterior + precioActual;
        },
        0
      );
  }

  calcularTotal() {
    if (this.productosPedidos.length >= 1) {
      for (let c of this.productosPedidos) {
        console.log(c.precio)
      }
    }
  }
}
