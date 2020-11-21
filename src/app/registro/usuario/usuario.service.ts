import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { especialidad } from "../../login/especialidades/especialidad";
import { ESPECIALIDADES } from "../../login/especialidades/mock-especialidades";
import { CookieService } from "ngx-cookie-service";

@Injectable({
    providedIn: "root"
  })

  export class UsuarioService {
    constructor(private http: HttpClient, private cookies: CookieService) {}

    login(usuario: any): Observable<any> {
        return this.http.post("https://reqres.in/api/login", usuario);
    }

    registro(usuario: any): Observable<any> {
      return this.http.post("https://reqres.in/api/registro", usuario);
    }

    //getEspecialidades(): Observable<especialidad[]> {
    //  return of(ESPECIALIDADES);
    //}

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