import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../registro/usuario/usuario.service';
import { especialidad } from '../login/especialidades/especialidad';
import { Router } from '@angular/router';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  nombre: string;
  apellido1: string;
  apellido2: string;
  dni: string;
  fecha: string;
  sexo: string;
  email: string;
  especialidad: string = "";
  especialidades: Observable<any>;
  password: string;
  confirmPassword: string;
  mostrarAlerta: boolean = false;
  mostrarRegistro: boolean = false;

  constructor(public usuarioService: UsuarioService, public router: Router, private db: AngularFirestore) { }

  ngOnInit(): void {
    this.especialidades = this.db.collection('especialidadesDisponibles').valueChanges();
    this.db.collection('especialidadesDisponibles').valueChanges().subscribe(data => {
      console.log(data)
    });
  }

  registro() {
    if (this.password != this.confirmPassword) {
      this.mostrarAlerta = true;
      console.log("Las contraseñas no coinciden");
    } else {
      this.mostrarRegistro = true;
      const usuario = { apellido1: this.apellido1, apellido2: this.apellido2, contraseña: this.password, correo: this.email, dni: this.dni, especialidad: this.especialidad, fecha: this.fecha, nombre: this.nombre };
      this.usuarioService.registro(usuario).subscribe(data => {
      this.usuarioService.setToken(data.token);
      this.router.navigateByUrl('/');
      console.log("Registrado correctamente");
      this.usuarioService.registroFirebase(usuario);
    },
    error => {
      console.log(error);
    });
    }
  }

}
