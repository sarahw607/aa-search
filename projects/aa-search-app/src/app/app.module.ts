import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AaSearchLibModule } from 'aa-search-lib';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AaSearchLibModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
