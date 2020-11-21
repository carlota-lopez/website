import { Component, OnInit } from '@angular/core';
import { UsuarioService } from "../registro/usuario/usuario.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.getUsuarioLogueado();
  }

  getUsuarioLogueado() {
    this.usuarioService.getUsuario().subscribe(usuario => {
      console.log(usuario);
    })
  }

}
