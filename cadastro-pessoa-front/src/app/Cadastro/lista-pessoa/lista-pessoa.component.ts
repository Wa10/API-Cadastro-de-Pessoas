import { CadastroService } from './../../cadastro.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pessoa } from 'src/app/model/pessoa';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-pessoa',
  templateUrl: './lista-pessoa.component.html',
  styleUrls: ['./lista-pessoa.component.css']
})
export class ListaPessoaComponent implements OnInit {

  pessoas: Observable<Pessoa[]>;

  constructor(
    private cadastroPessoa: CadastroService,
    private router: Router) {}

  ngOnInit(): void {
    this.carregarDados();
  }

  carregarDados(){
    this.pessoas = this.cadastroPessoa.getPessoaList();
  }

}
