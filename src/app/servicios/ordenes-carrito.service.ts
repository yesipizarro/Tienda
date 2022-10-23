import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IProductoDetalle } from '../modulos/compartido/interfaces/producto.interface';
import { ConexionFirebaseService } from './conexion-firebase.service';

@Injectable({
  providedIn: 'root'
})
export class OrdenesCarritoService {
  productosPedidos: IProductoDetalle[] = [];

  constructor(private conexionFirebaseService: ConexionFirebaseService) { }

  pedidoCarrito(producto: IProductoDetalle) {
    this.productosPedidos.push(producto);
  }
}
