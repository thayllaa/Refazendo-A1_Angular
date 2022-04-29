import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ThayllaComponent } from './thaylla/thaylla.component';
import { RouterModule } from '@angular/router';
import { ThayllaListaComponent } from './thaylla-lista/thaylla-lista.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot([
      {path: "thaylla", component: ThayllaComponent},
      {path: "lista-disciplinas", component: ThayllaListaComponent}
    ]) 
  ],
  declarations: [ 
    AppComponent, 
    HelloComponent,
    ThayllaComponent,
    ThayllaListaComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
