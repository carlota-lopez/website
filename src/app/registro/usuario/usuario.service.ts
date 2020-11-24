import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { CookieService } from "ngx-cookie-service";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { stringify } from '@angular/compiler/src/util';

@Injectable({
    providedIn: "root"
  })

  export class UsuarioService {
    constructor(private http: HttpClient, private cookies: CookieService, private firestore: AngularFirestore) {}

    switchValue: boolean;

    login(usuario: any): Observable<any> {
        return this.http.post("https://reqres.in/api/login", usuario);
    }

    registro(usuario: any): Observable<any> {
      return this.http.post("https://reqres.in/api/registro", usuario);
    }

    registroFirebase(usuario: { apellido1: string, apellido2: string, contraseña: string, correo: string, dni: string, especialidad: string, fecha: string, nombre: string }) {
      // Add user to firestore
      this.firestore.collection('medicosRegistrados').add(usuario);
    }

    loginFirebase(email: string, password: string): boolean {
      console.log("service");
      console.log(email + password);
      this.firestore.collection('medicosRegistrados').valueChanges().subscribe((containers: any[]) => {
        for (let index = 0; index < containers.length; index++) {
          var element = containers[index];
          console.log(element);
          console.log(element.correo);
          console.log(element.contraseña);
          if (email === element.correo && password === element.contraseña) {
            console.log("true");
            this.switchValue = true;
          } else {
            console.log("false");
            this.switchValue = false;
          }
        }

      });

      return this.switchValue;
    }


    getToken() {
      return this.cookies.get("token");
    }

    setToken(token: string) {
      this.cookies.set("token",token);
    }

    getUsuario() {
      return this.http.get("https://reqres.in/api/users/2");
    }

    getUsuarioLogueado() {
      const token = this.getToken();
      // Endpoint para devolver usuario con token
    }

  }