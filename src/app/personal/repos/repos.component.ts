import { Component, OnInit } from '@angular/core';
import { Repositories } from './repos.class'


@Component({
  selector: 'repos-component',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {

  constructor() {   }

  meusRepos: Repositories[] = [
    
      {
        nome: 'Avanade Angular SPA',
        linguagem: 'Javascript/Angular',
        commits: 0,
        fotoUrl: './assets/images/angular_icon_130993.png'
      },
      {
        nome: 'DIO Angular',
        linguagem: 'Javascript/Angular',
        commits: 0,
        fotoUrl: './assets/images/angular_icon_130993.png'
      }
  ];
 
  
  ngOnInit(): void {

  
  }

  nomeDesenvolvedor: string = 'Luciano Faria'
}
