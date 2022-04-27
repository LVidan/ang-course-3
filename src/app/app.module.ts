import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstLastNameComponent } from './components/first-last-name/first-last-name.component';
import { BlocksComponentComponent } from './components/blocks-component/blocks-component.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstLastNameComponent,
    BlocksComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
