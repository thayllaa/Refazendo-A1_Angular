import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ThayllaComponent } from './thaylla/thaylla.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot([
      {path: "thaylla", component: ThayllaComponent}
    ]) 
  ],
  declarations: [ 
    AppComponent, 
    HelloComponent,
    ThayllaComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
