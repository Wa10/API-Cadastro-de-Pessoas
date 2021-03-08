import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(private http: HttpClient) { }

  private endPoint = 'http://localhost:8080/app/pessoa';

  

  getPessoa(id: number): Observable<any> {
   
    return this.http.get(`${this.endPoint}/${id}`);
  }

  createPessoa(pessoa: Object): Observable<Object> {
    return this.http.post(`${this.endPoint}`, pessoa);
  }

  updatePessoa(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.endPoint}/${id}`, value);
  }

  deletePessoa(id: number): Observable<any> {
    return this.http.delete(`${this.endPoint}/${id}`, { responseType: 'text' });
  }

  getPessoaList(): Observable<any> {
    console.log("afjiswdjfoi");
    return this.http.get(`${this.endPoint}`);
  }
}
