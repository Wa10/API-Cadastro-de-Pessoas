import { TranslationWidth } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  username: string;
  password: string;
  loginError: boolean;
  cadastrando: boolean = false;

  constructor(
    private router : Router,
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.router.navigate(['/home']);
  }
  
  cadastrar(event){
    event.preventDefault();
    this.cadastrando = true;
  }

  cancelarCadastro(){
    this.cadastrando = false;
  }

}
