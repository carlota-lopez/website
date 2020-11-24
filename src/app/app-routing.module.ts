import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from "./app.component";
import { HomeComponent } from './home/home.component';
import { LoginComponent } from "./login/login.component";
import { RegistroComponent } from "./registro/registro.component";
import { PacientesComponent } from "./home/pacientes/pacientes.component";
import { AgendaComponent } from "./home/agenda/agenda.component";
import { VideollamadaComponent } from "./home/videollamada/videollamada.component";
import { from } from 'rxjs';

const routes: Routes = [
  //{ path: "", component: AppComponent, pathMatch: "full" },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: "login", component: LoginComponent, pathMatch: "full"},
  { path: "registro", component: RegistroComponent, pathMatch: "full"},
  { path: "home", component: HomeComponent, pathMatch: "full"},
  { path: "pacientes", component: PacientesComponent, pathMatch: "full"},
  { path: "agenda", component: AgendaComponent, pathMatch: "full"},
  { path: "videollamada", component: VideollamadaComponent, pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
