import { CadastraPessoaComponent } from './Cadastro/cadastra-pessoa/cadastra-pessoa.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaPessoaComponent } from './Cadastro/lista-pessoa/lista-pessoa.component';

const routes: Routes = [
  { path: '', redirectTo: 'pessoa', pathMatch: 'full' },
  { path: 'pessoas', component: ListaPessoaComponent },
  { path: 'adicionar', component: CadastraPessoaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
