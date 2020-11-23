import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


//import { InicioComponent } from './personal/inicio/inicio.component';
import { ReposComponent } from './personal/repos/repos.component';
import { ContactComponent } from './personal/contact/contact.component';
import { InicioComponent } from './personal/inicio/inicio.component';
import { PaginaNaoEncontradaComponent } from './personal/pagina-nao-encontrada/pagina-nao-encontrada.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    ReposComponent,
    ContactComponent,
    InicioComponent,
    PaginaNaoEncontradaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
