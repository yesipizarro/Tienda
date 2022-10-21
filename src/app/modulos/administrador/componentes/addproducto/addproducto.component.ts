
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { IProductoDetalle } from 'src/app/modulos/compartido/interfaces/producto.interface';
import { ConexionFirebaseService } from 'src/app/servicios/conexion-firebase.service';
import { v4 as uuidv4 } from 'uuid';

interface ICategorias {
  tipoVista: string;
}


@Component({
  selector: 'app-addproducto',
  templateUrl: './addproducto.component.html',
  styleUrls: ['./addproducto.component.scss']
})
export class AddproductoComponent implements OnInit {
  formProducto: FormGroup;
  editar = false;
  idProd: string;


  constructor(
    private conexionFirebaseService: ConexionFirebaseService,
    private _snackBar: MatSnackBar,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe((value) => {
        if ('id' in value) {
          this.llenarFormularioProducto(value['id']);

        } else {
          this.formularioVacio();

        }
      });
  }

  llenarFormularioProducto(productoId: string) {
    this.editar = true;
    this.idProd = productoId;
    this.conexionFirebaseService.getProductoPorId(productoId)
      .subscribe((productoEncontrado: IProductoDetalle) => {
        this.formProducto = new FormGroup({
          nombre: new FormControl(productoEncontrado.nombre, [Validators.required]),
          cantidad: new FormControl(productoEncontrado.cantidad, [Validators.required, Validators.min(0)]),
          precio: new FormControl(productoEncontrado.precio, [Validators.required, Validators.min(0)]),
          imagen: new FormControl(productoEncontrado.imagen, [Validators.required]),
          categoria: new FormControl(productoEncontrado.categoria, [Validators.required])
        });
      });


  }

  formularioVacio() {
    this.editar = false;
    this.formProducto = new FormGroup({
      nombre: new FormControl(undefined, [Validators.required]),
      cantidad: new FormControl(undefined, [Validators.required, Validators.min(0)]),
      precio: new FormControl(undefined, [Validators.required, Validators.min(0)]),
      imagen: new FormControl(undefined, [Validators.required]),
      categoria: new FormControl(undefined, [Validators.required])
    });
  }

  categoria: ICategorias[] = [
    { tipoVista: 'Alimento' },
    { tipoVista: 'Snaks' },
    { tipoVista: 'Belleza e higiene' },
    { tipoVista: 'Complementos y accesorios' },
    { tipoVista: 'Juguetes' },
  ];


  enviar() {
    if (this.editar) {
      this.editarProducto();
      return;
    }
    let id = uuidv4();
    let nombre = this.formProducto.value.nombre;
    let cantidad = this.formProducto.value.cantidad;
    let precio = this.formProducto.value.precio;
    let categoria = this.formProducto.value.categoria;
    let imagen = this.formProducto.value.imagen;
    this.conexionFirebaseService.escribriInfoProducto(id, nombre, cantidad, precio, categoria, imagen).subscribe({
      next: () => {
        this.formProducto.reset();
        this._snackBar.open("Producto creado", "ok");
      },
      error: () => {
        this._snackBar.open("El producto no fue creado", "ok");
      }
    });

  }

  editarProducto() {
    this.conexionFirebaseService.editandoElProducto({ id: this.idProd, ...this.formProducto.value }).subscribe({
      next: () => {
        this.formProducto.reset();
        this._snackBar.open("Producto Editado", "ok");
      },
      error: () => {
        this._snackBar.open("El producto no fue editado", "ok");
      }
    });
  }

}
