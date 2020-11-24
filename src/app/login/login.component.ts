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
  usuario: { email: string, password: string};

  constructor(public usuarioService: UsuarioService, public router: Router) { }

  ngOnInit(): void {
  }

  login() {
    console.log(this.email + this.password);
    var logueado = false;
    //this.usuario.email = this.email;
    //this.usuario.password = this.password;
    //const usuario = {email: this.email, password: this.password};
    //console.log("usuario: " + this.usuario);
    /*
    this.usuarioService.login(usuario).subscribe(data => {
      this.usuarioService.setToken(data.token);
      this.router.navigateByUrl("/home");

    },
    error => {
      console.log(error);
    }); */
    this.logueado = this.usuarioService.loginFirebase(this.email,this.password);

    //console.log(logueado);

    if (this.logueado) {
      console.log("logueado");
      this.router.navigateByUrl('/home');
    } else {
      console.log("no logueado");
    }
    
  }
}
