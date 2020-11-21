import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { especialidad } from "../../login/especialidades/especialidad";
import { ESPECIALIDADES } from "../../login/especialidades/mock-especialidades";

@Injectable({
    providedIn: "root"
  })

  export class UsuarioService {
    constructor(private http: HttpClient) {}

    login(usuario: any): Observable<any> {
        return this.http.post("https://reqres.in/api/login", usuario);
    }

    registro(usuario: any): Observable<any> {
      return this.http.post("https://reqres.in/api/registro", usuario);
    }

    getEspecialidades(): Observable<especialidad[]> {
      return of(ESPECIALIDADES);
    }
  }