import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AaSearchLibModule } from 'aa-search-lib';

import { AppComponent } from './app.component';
import { SearchService } from './services/search.service';
import { MovieSearchComponent } from './components/movie-search/movie-search.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, MovieSearchComponent],
  imports: [BrowserModule, HttpClientModule, AaSearchLibModule],
  providers: [SearchService],
  bootstrap: [AppComponent],
})
export class AppModule {}
