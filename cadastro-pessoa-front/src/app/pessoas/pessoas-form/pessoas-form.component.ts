import { Component, OnInit } from '@angular/core';
import { PessoasService } from 'src/app/pessoas.service';
import { Pessoa } from '../pessoa';

@Component({
  selector: 'app-pessoasform',
  templateUrl: './pessoas-form.component.html',
  styleUrls: ['./pessoas-form.component.css']
})
export class PessoasformComponent implements OnInit {

  pessoa: Pessoa;

  constructor( private service : PessoasService) { 
    this.pessoa = service.getPessoa();
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.pessoa)
  }

}
