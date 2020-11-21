import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {  UsuarioService } from '../registro/usuario/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(public usuarioService: UsuarioService) { }

  ngOnInit(): void {
  }

  login() {
    const usuario = {email: this.email, password: this.password};
    this.usuarioService.login(usuario).subscribe(data => {
      console.log(data);
    });
  }

}
