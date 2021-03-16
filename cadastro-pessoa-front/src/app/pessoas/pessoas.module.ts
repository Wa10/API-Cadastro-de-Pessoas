import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PessoasRoutingModule } from './pessoas-routing.module';
import { PessoasformComponent } from './pessoas-form/pessoas-form.component';
import { FormsModule } from '@angular/forms';
import { PessoasListaComponent } from './pessoas-lista/pessoas-lista.component';


@NgModule({
  declarations: [
    PessoasformComponent,
    PessoasListaComponent
  ],
  imports: [
    CommonModule,
    PessoasRoutingModule,
    FormsModule,
  ],
  exports:[
    PessoasformComponent,
    PessoasListaComponent,
  ]
})
export class PessoasModule { }
