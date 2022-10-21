import { Component, OnInit } from '@angular/core';
import { IProductoDetalle } from 'src/app/modulos/compartido/interfaces/producto.interface';
import { ConexionFirebaseService } from 'src/app/servicios/conexion-firebase.service';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.scss']
})
export class TarjetaComponent implements OnInit {

  productos: IProductoDetalle[] = [];
  constructor(private conexionFirebaseService: ConexionFirebaseService) { }

  ngOnInit(): void {
    this.conexionFirebaseService.getProductos()
      .subscribe((productosServicio: IProductoDetalle[]) => this.productos = productosServicio);
  }

  agregar(producto: IProductoDetalle) {
    console.log(`dieron click en agregar para el producto ${producto.nombre}`)
  }

}
