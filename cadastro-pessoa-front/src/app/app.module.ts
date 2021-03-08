import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastraPessoaComponent } from './Cadastro/cadastra-pessoa/cadastra-pessoa.component';
import { ListaPessoaComponent } from './Cadastro/lista-pessoa/lista-pessoa.component';
import { VisualizaPessoaComponent } from './Cadastro/visualiza-pessoa/visualiza-pessoa.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    CadastraPessoaComponent,
    ListaPessoaComponent,
    VisualizaPessoaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
