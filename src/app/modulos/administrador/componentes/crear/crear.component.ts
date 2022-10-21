import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { IProductoDetalle } from 'src/app/modulos/compartido/interfaces/producto.interface';
import { ConexionFirebaseService } from 'src/app/servicios/conexion-firebase.service';

interface ICategorias {
  tipoVista: string;
}

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent implements OnInit {

  productos: IProductoDetalle[] = [];
  constructor(
    private conexionFirebaseService: ConexionFirebaseService,
    private router: Router,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.conexionFirebaseService.getProductos()
      .subscribe((productosServicio: IProductoDetalle[]) => this.productos = productosServicio);
  }

  editar(producto: IProductoDetalle) {
    this.router.navigate(['admi', 'add', producto.id]);
  }

  categoria: ICategorias[] = [
    { tipoVista: 'Alimento' },
    { tipoVista: 'Snaks' },
    { tipoVista: 'Belleza e higiene' },
    { tipoVista: 'Complementos y accesorios' },
    { tipoVista: 'Juguetes' },
  ];

  elinarProducto(producto: IProductoDetalle) {
    this.conexionFirebaseService.eliminarProd(producto).subscribe({
      next: () => {
        this._snackBar.open("Producto eliminado", "ok");
        this.conexionFirebaseService.getProductos()
          .subscribe((productosServicio: IProductoDetalle[]) => this.productos = productosServicio);
      },
      error: () => {
        this._snackBar.open("Producto no fue eliminado", "ok");
      }
    });
  }
}
