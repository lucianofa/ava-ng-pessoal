import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactComponent } from './personal/contact/contact.component';
import { InicioComponent } from './personal/inicio/inicio.component';
import { PaginaNaoEncontradaComponent } from './personal/pagina-nao-encontrada/pagina-nao-encontrada.component';
import { ReposComponent } from './personal/repos/repos.component';

const routes: Routes = [

  { path: '/', component: InicioComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'repos', component: ReposComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: PaginaNaoEncontradaComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
