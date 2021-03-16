import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PessoasService } from 'src/app/pessoas.service';
import { Pessoa } from '../pessoa';

@Component({
  selector: 'app-pessoas-lista',
  templateUrl: './pessoas-lista.component.html',
  styleUrls: ['./pessoas-lista.component.css']
})
export class PessoasListaComponent implements OnInit {

  pessoas: Pessoa[] = [];

  constructor( 
    private service: PessoasService, 
    private router: Router) {}

  ngOnInit(): void {
    this.service.getLista().subscribe(resposta => {
        this.pessoas = resposta;
    });
  }

  novoCadastro(){
    this.router.navigate(['/pessoas-form']);
  }

}
