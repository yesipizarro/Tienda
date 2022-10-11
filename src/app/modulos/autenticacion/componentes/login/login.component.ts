import { Component, OnInit } from '@angular/core';
import { SerCrearUsuarioService } from 'src/app/ser-crear-usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private s: SerCrearUsuarioService) { }

  ngOnInit(): void {
  }

}
