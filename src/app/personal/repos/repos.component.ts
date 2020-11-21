import { Component, OnInit } from '@angular/core';
import { Repositories } from './repos.class'

@Component({
  selector: 'repos-component',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {

  meusRepos: Repositories[] = []; 
  
  //constructor() {   }

  ngOnInit(): void {

   this.meusRepos = [
     {
       name: 'Avanade Angular SPA',
       language: 'Angular',
       commits: 0,  
     },
     {
       name: 'DIO Angular',
       language: 'Angular',
       commits: 0,  
     }
   ]   

  }

}
