import { Component, OnInit } from '@angular/core';
import { IProductoDetalle } from 'src/app/modulos/compartido/interfaces/producto.interface';
import { ConexionFirebaseService } from 'src/app/servicios/conexion-firebase.service';
import { OrdenesCarritoService } from 'src/app/servicios/ordenes-carrito.service';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.scss']
})
export class TarjetaComponent implements OnInit {

  productos: IProductoDetalle[] = [];
  constructor(private conexionFirebaseService: ConexionFirebaseService,
    private ordenesCarritoService: OrdenesCarritoService) { }

  ngOnInit(): void {
    this.conexionFirebaseService.getProductos()
      .subscribe((productosServicio: IProductoDetalle[]) => this.productos = productosServicio);
  }

  agregar(producto: IProductoDetalle) {
    this.ordenesCarritoService.pedidoCarrito(producto)
  }

}
