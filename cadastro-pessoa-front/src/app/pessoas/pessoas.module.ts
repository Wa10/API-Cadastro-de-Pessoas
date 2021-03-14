import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PessoasRoutingModule } from './pessoas-routing.module';
import { PessoasformComponent } from './pessoas-form/pessoas-form.component';


@NgModule({
  declarations: [
    PessoasformComponent
  ],
  imports: [
    CommonModule,
    PessoasRoutingModule
  ],
  exports:[
    PessoasformComponent,
  ]
})
export class PessoasModule { }
