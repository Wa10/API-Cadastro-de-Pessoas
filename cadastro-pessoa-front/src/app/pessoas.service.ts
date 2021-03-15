import { Injectable } from '@angular/core';
import { Pessoa } from './pessoas/pessoa';

@Injectable({
  providedIn: 'root'
})
export class PessoasService {

  constructor() { }

  getPessoa() : Pessoa{
    let pessoa : Pessoa = new Pessoa();
    pessoa.nome = 'walace';
    pessoa.cpf = '333333333';
    return pessoa;
  }
}
