import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ConexionFirebaseService } from '../servicios/conexion-firebase.service';
import { StorageNavegadorService } from '../servicios/storage-navegador.service';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionGuard implements CanActivate {
  constructor(private storageNavegadorService: StorageNavegadorService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.storageNavegadorService.obtenerSesion()) {
      return true;
    } else {
      this.router.navigate(['autenticacion']);
      return false;
    }
  }

}
