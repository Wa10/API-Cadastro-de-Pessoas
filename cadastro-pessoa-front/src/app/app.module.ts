import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component';
import { PessoasModule } from './pessoas/pessoas.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TemplateModule,
    PessoasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
