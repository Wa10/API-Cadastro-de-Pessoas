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
  success: boolean = false;
  errors: String[] = [];

  constructor( private service : PessoasService) {
    this.pessoa = new Pessoa();
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.pessoa);
    this.service.salvar(this.pessoa)
    .subscribe(response => {
      this.success = true;
      this.errors = [];
    }, errorResponse => { 
      this.success = false;
      this.errors = errorResponse.error.erros;
    });
  }

}
