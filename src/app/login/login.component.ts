import { Component, OnInit } from '@angular/core';
import {  UsuarioService } from '../registro/usuario/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  logueado: boolean = false;

  constructor(public usuarioService: UsuarioService, public router: Router) { }

  ngOnInit(): void {
  }

  login() {
    const usuario = {email: this.email, password: this.password};
    this.usuarioService.login(usuario).subscribe(data => {
      this.usuarioService.setToken(data.token);
      this.router.navigateByUrl("/");
    },
    error => {
      console.log(error);
    });
    this.logueado = true;
  }
}
