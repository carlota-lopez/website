import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UsuarioService } from '../registro/usuario/usuario.service';
import { especialidad } from '../login/especialidades/especialidad';
import { ESPECIALIDADES } from '../login/especialidades/mock-especialidades';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  email: string;
  especialidad: string;
  especialidades: especialidad[];
  password: string;
  confirmPassword: string;
  mostrarAlerta: boolean = false;

  constructor(public usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.getEspecialidades();
  }

  registro() {
    if (this.password != this.confirmPassword) {
      this.mostrarAlerta = true;
      console.log("Las contraseñas no coinciden");
    } else {
      const usuario = { email: this.email, password: this.password, especialidad: this.especialidad };
      this.usuarioService.registro(usuario).subscribe(data => {
      console.log(data);
    });
    }
  }

  getEspecialidades(): void {
    this.usuarioService.getEspecialidades().subscribe(especialidades => this.especialidades = especialidades);
  }

}
