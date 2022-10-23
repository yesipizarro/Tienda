import { Injectable } from '@angular/core';
import { UserCredential } from '@firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class StorageNavegadorService {

  guardarSesion = (usuario: UserCredential) => {
    localStorage.setItem('sesion', JSON.stringify(usuario));
  }

  obtenerSesion(): UserCredential {
    return JSON.parse(localStorage.getItem('sesion'));
  }
}
