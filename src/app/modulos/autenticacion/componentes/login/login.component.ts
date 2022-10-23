import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserCredential } from '@firebase/auth';
import { interval, Subject, Subscription, take, takeUntil } from 'rxjs';
import { ConexionFirebaseService } from 'src/app/servicios/conexion-firebase.service';
import { StorageNavegadorService } from 'src/app/servicios/storage-navegador.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  // subscripcion: Subscription;
  // destruir: Subject<boolean> = new Subject();

  formLogin: FormGroup = new FormGroup({
    correo: new FormControl(undefined, [Validators.required, Validators.email]),
    password: new FormControl(undefined, [Validators.required])
  })

  constructor(
    private servicio: ConexionFirebaseService,
    private _snackBar: MatSnackBar,
    private router: Router,
    private storageNavegadorService: StorageNavegadorService) { }

  ngOnDestroy() {
    // this.subscripcion.unsubscribe();
    // this.destruir.next(true);
    // this.destruir.complete();
  }

  ngOnInit(): void {
    if (this.storageNavegadorService.obtenerSesion()) {
      this.router.navigate(['inicio']);
    }
    // const seconds = interval(1000);
    // this.subscripcion = seconds
    //   .subscribe(value => console.log(value));

    // seconds
    //   .pipe(
    //     takeUntil(this.destruir)
    //   ).subscribe(value => console.log(value));

    // seconds
    //   .pipe(
    //     take(5)
    //   ).subscribe(value => console.log(value));
  }

  enviar() {
    let loginCorreo = this.formLogin.value.correo
    let logincontraseña = this.formLogin.value.password
    this.servicio.login(loginCorreo, logincontraseña).subscribe({
      next: () => {
        this.router.navigate(['inicio']);
      },
      error: (error) => {
        this._snackBar.open(error, "ok");
      }
    });
  }

  ingresarGoogle() {
    this.servicio.iniciarSesionGoogle()
      .subscribe({
        next: () => {
          this.router.navigate(['inicio']);
        },
        error: (error) => {
          this._snackBar.open(error, "ok");
        }
      });
  }

}
