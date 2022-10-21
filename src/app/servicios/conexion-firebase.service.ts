import { Injectable } from '@angular/core';
import { getAuth, createUserWithEmailAndPassword, UserCredential, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { FirebaseError, initializeApp } from "firebase/app";
import { catchError, from, map, Observable } from 'rxjs';
import { GoogleAuthProvider } from "firebase/auth";
import { getDatabase, ref, set, get, child, remove } from "firebase/database";
import { IProductoDetalle, IProductoFirebase } from '../modulos/compartido/interfaces/producto.interface';

enum ErrorFirebaseCustom {
  INICIO_SESION_FALLA = 'No se pudo iniciar sesión',
  CORREO_EXISTE = 'El correo ya existe',
  PASSWORD = 'Usuario o Contraseña invalida'
}

@Injectable({
  providedIn: 'root'
})
export class ConexionFirebaseService {
  firebaseConfig = {
    apiKey: "AIzaSyAR4d-4ylKLjY_GlW3kuOJ8l-7l399f89M",
    authDomain: "tienda-55641.firebaseapp.com",
    projectId: "tienda-55641",
    storageBucket: "tienda-55641.appspot.com",
    messagingSenderId: "504148919647",
    appId: "1:504148919647:web:3873933ad4bf597972e2ea",
    measurementId: "G-YXZ2MB6JLR"
  };

  // Initialize Firebase
  app = initializeApp(this.firebaseConfig);
  auth = getAuth(this.app);
  googleAuth = new GoogleAuthProvider();
  database = getDatabase();

  constructor() { }

  crearUsuario(infoEmail: string, infocontraseña: string): Observable<UserCredential> {
    return from(createUserWithEmailAndPassword(this.auth, infoEmail, infocontraseña))
      .pipe(
        catchError((error: FirebaseError) => {
          let message = ErrorFirebaseCustom.INICIO_SESION_FALLA;
          if (error.code === "auth/email-already-in-use") {
            message = ErrorFirebaseCustom.CORREO_EXISTE;
          }
          throw message;
        })
      );
  }

  login(loginCorreo: string, logincontraseña: string) {
    return from(signInWithEmailAndPassword(this.auth, loginCorreo, logincontraseña))
      .pipe(
        catchError((error: FirebaseError) => {
          let message = ErrorFirebaseCustom.INICIO_SESION_FALLA;
          if (error.code === "auth/wrong-password") {
            message = ErrorFirebaseCustom.PASSWORD;
          }
          throw message;
        })
      );
  }

  iniciarSesionGoogle() {
    return from(signInWithPopup(this.auth, this.googleAuth))
      .pipe(
        catchError(() => {
          throw ErrorFirebaseCustom.INICIO_SESION_FALLA;
        })
      );
  }

  escribriInfoProducto(id, nombre, cantidad, precio, categoria, imagen) {
    return from(set(ref(this.database, 'productos/' + id), {
      nombre: nombre,
      cantidad: cantidad,
      precio: precio,
      categoria: categoria,
      imagen: imagen
    }));
  }

  getProductos(): Observable<IProductoDetalle[]> {
    return from(get(child(ref(this.database), 'productos')))
      .pipe(
        map(snapshot => snapshot.val()),
        map((productos: IProductoFirebase) => {
          let productosMapeados: IProductoDetalle[] = [];
          for (let productoId in productos) {
            productosMapeados.push({
              ...productos[productoId],
              id: productoId,
            });
          }
          return productosMapeados;
        })
      );
  }

  getProductoPorId(id: string): Observable<IProductoDetalle> {
    return from(get(child(ref(this.database), `productos/${id}`)))
      .pipe(
        map(snapshot => snapshot.val())
      );
  }

  editandoElProducto(producto: IProductoDetalle) {
    return from(set(child(ref(this.database), `/productos/${producto.id}`), producto))
  }

  eliminarProd(producto: IProductoDetalle) {
    return from(remove(ref(this.database, 'productos/' + producto.id)));

  }


}