import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserCredential } from '@firebase/auth';
import { ConexionFirebaseService } from 'src/app/servicios/conexion-firebase.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup = new FormGroup({
    correo: new FormControl(undefined, [Validators.required, Validators.email]),
    password: new FormControl(undefined, [Validators.required])
  })

  constructor(private servicio: ConexionFirebaseService, private _snackBar: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
  }

  enviar() {
    let loginCorreo = this.formLogin.value.correo
    let logincontraseña = this.formLogin.value.password
    this.servicio.login(loginCorreo, logincontraseña).subscribe({
      next: (usuario: UserCredential) => {
        this.router.navigateByUrl('');

      },
      error: (error) => {
        this._snackBar.open(error, "ok");
      }
    });
  }

  ingresarGoogle() {
    this.servicio.iniciarSesionGoogle()
      .subscribe({
        next: (resultado) => {
          this.router.navigateByUrl('');
        },
        error: (error) => {
          this._snackBar.open(error, "ok");
        }
      });
  }

}
