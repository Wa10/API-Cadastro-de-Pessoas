import { EmailValidator } from "@angular/forms";

export class Pessoa {
    id: number;
    nome: string;
    cpf: string;
    naturalidade: string;
    nacionalidade: string;
    dtNascimento: Date;
    sexo: string;
    email: EmailValidator;
    dataCadastro: Date;
  }