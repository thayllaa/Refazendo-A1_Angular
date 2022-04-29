import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ThayllaComponent } from './thaylla/thaylla.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule ],
  declarations: [ 
    AppComponent, 
    HelloComponent,
    ThayllaComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
