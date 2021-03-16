import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PessoasformComponent } from './pessoas-form/pessoas-form.component';
import { PessoasListaComponent } from './pessoas-lista/pessoas-lista.component';

const routes: Routes = [
  {path: 'pessoas-form', component: PessoasformComponent},
  {path: 'pessoas-form/:id', component: PessoasformComponent},
  {path: 'pessoas-lista', component: PessoasListaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PessoasRoutingModule { }
