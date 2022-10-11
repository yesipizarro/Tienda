import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormGroupName, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserCredential } from '@firebase/auth';
import { ConexionFirebaseService } from 'src/app/conexion-firebase.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.scss']
})
export class CrearUsuarioComponent implements OnInit {

  constructor(private serviciosFirebase: ConexionFirebaseService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  enviar() {
    let infoEmail = this.crearUsuarioFormulario.value.email;
    let infocontraseña = this.crearUsuarioFormulario.value.password;
    let infoConfirmarContraseña = this.crearUsuarioFormulario.value.confirmarPassword;
    this.serviciosFirebase.crearUsuario(infoEmail, infocontraseña).subscribe({
      next: (usuario: UserCredential) => {
        debugger
      },
      error: (mensaje) => {
        this._snackBar.open(mensaje, "ok");
      }
    });
  }

  crearUsuarioFormulario: FormGroup = new FormGroup({
    email: new FormControl(undefined, [Validators.required, Validators.email]),
    password: new FormControl(undefined, [Validators.required, Validators.minLength(6), this.validar()]),
    confirmarPassword: new FormControl(undefined, [Validators.required])
  },
    this.validarPasswod()
  );

  validar(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!(/[A-Z]+/.test(control.value))) {
        return { letraMayuscula: true };
      } else if (!(/[0-9]+/.test(control.value))) {
        return { numero: true };
      } else if (!(/[$&+,:;=?@#|'<>.-^*()%!]/.test(control.value))) {
        return { caracter: true };
      }
      return null;
    }
  }

  validarPasswod(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.get('password')?.value !== control.get('confirmarPassword')?.value) {
        return { passDiff: true };
      }
      return null;
    }
  }

}
