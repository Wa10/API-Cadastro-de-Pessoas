import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  id: number;

  constructor( 
    private service: PessoasService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
    this.pessoa = new Pessoa();
  }

  ngOnInit(): void {
    let params = this.activatedRoute.snapshot.params;
    if(params && params.id){
      this.id = params.id;
      this.service.findById(this.id).subscribe(
        response => {
          this.pessoa = response
        }, error => {
          this.pessoa = new Pessoa();
        })
    }
  }

  onSubmit(){
      if(this.id){
        this.service.updateById(this.pessoa).subscribe(response => {
          this.success = true;
          this.errors = null;
        }, error => {
          this.errors = ['Erro ao Atualizar o pessoa.']
        })

      }else {

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

  voltar(){
    this.router.navigate(['/pessoas-lista']);
  }

}
