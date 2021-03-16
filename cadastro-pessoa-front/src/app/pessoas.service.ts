import { Injectable } from '@angular/core';
import { Pessoa } from './pessoas/pessoa';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PessoasService {

  constructor( private http: HttpClient) { }

  salvar(pessoa : Pessoa) : Observable<Pessoa> {
    return this.http.post<Pessoa>('http://localhost:8080/api/pessoas', pessoa);
  }

  getLista():  Observable<Pessoa[]>{
    return this.http.get<Pessoa[]>('http://localhost:8080/api/pessoas');
  }

}
