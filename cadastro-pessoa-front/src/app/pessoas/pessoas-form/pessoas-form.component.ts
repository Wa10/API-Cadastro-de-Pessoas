import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../pessoa';

@Component({
  selector: 'app-pessoasform',
  templateUrl: './pessoas-form.component.html',
  styleUrls: ['./pessoas-form.component.css']
})
export class PessoasformComponent implements OnInit {

  pessoa: Pessoa;

  constructor() { 
    this.pessoa = new Pessoa();
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.pessoa)
  }

}
