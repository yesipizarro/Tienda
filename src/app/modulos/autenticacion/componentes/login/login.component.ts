import { CursorError } from '@angular/compiler/src/ml_parser/lexer';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  enviar() {

  }

  constructor() { }

  ngOnInit(): void {
  }

  formLogin: FormGroup = new FormGroup({
    correo: new FormControl(undefined, [Validators.required, Validators.email]),
    password: new FormControl(undefined, [Validators.required])

  })


}
