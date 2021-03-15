import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PessoasRoutingModule } from './pessoas-routing.module';
import { PessoasformComponent } from './pessoas-form/pessoas-form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PessoasformComponent
  ],
  imports: [
    CommonModule,
    PessoasRoutingModule,
    FormsModule,
  ],
  exports:[
    PessoasformComponent,
  ]
})
export class PessoasModule { }
