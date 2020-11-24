import { Component, OnInit } from '@angular/core';
import { UsuarioService } from "../registro/usuario/usuario.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public usuarioService: UsuarioService, public router: Router) { }

  ngOnInit(): void {
    this.getUsuarioLogueado();
  }

  getUsuarioLogueado() {
    this.usuarioService.getUsuario().subscribe(usuario => {
      console.log(usuario);
    })
  }

  listadoPacientes() {
    this.router.navigateByUrl('/pacientes');
  }

  agenda() {
    this.router.navigateByUrl('/agenda');
  }

  videollamada() {
    this.router.navigateByUrl('/videollamada');
  }

}
