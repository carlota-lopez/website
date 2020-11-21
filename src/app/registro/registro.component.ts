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

  email: string;
  especialidad: string = "";
  especialidades: Observable<any>;
  password: string;
  confirmPassword: string;
  mostrarAlerta: boolean = false;
  mostrarRegistro: boolean = false;

  constructor(public usuarioService: UsuarioService, public router: Router, private db: AngularFirestore) { }

  ngOnInit(): void {
    //this.getEspecialidades();
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
      const usuario = { email: this.email, password: this.password, especialidad: this.especialidad };
      this.usuarioService.registro(usuario).subscribe(data => {
      this.usuarioService.setToken(data.token);
      this.router.navigateByUrl('/');
      console.log("Registrado correctamente");
    },
    error => {
      console.log(error);
    });
    }
  }

  //getEspecialidades(): void {
  //  this.usuarioService.getEspecialidades().subscribe(especialidades => this.especialidades = especialidades);
  //}

}
