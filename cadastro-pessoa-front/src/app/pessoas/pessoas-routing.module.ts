import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PessoasformComponent } from './pessoas-form/pessoas-form.component';

const routes: Routes = [
  {path: 'pessoas-form', component: PessoasformComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PessoasRoutingModule { }
