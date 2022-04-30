import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ThayllaComponent } from './thaylla/thaylla.component';
import { RouterModule } from '@angular/router';
import { ThayllaListaComponent } from './thaylla-lista/thaylla-lista.component';
import { ThayllaDisciplinasService } from './thaylla-disciplinas.service';
import { ThayllaDetalhesComponent } from './thaylla-detalhes/thaylla-detalhes.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot([
      {path: "thaylla", component: ThayllaComponent},
      {path: "lista-disciplinas", component: ThayllaListaComponent},
      {path: "lista-destalhes/:index", component: ThayllaDetalhesComponent}
    ]) 
  ],
  declarations: [ 
    AppComponent, 
    HelloComponent,
    ThayllaComponent,
    ThayllaListaComponent,
    ThayllaDetalhesComponent
  ],
  bootstrap:    [ AppComponent ],
  providers: [
    ThayllaDisciplinasService
  ]
})
export class AppModule { }
