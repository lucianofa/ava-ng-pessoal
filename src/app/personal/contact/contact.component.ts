import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-component',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  name: string = 'Luciano'
  constructor() { }

  ngOnInit(): void {
  }

  mensagemEmail() {
    alert('Função de envio de e-mail ainda não foi implementada!');
  }

}
