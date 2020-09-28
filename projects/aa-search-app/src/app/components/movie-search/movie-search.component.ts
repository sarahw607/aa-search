import { Component, OnInit, OnDestroy } from '@angular/core';

import { takeWhile } from 'rxjs/operators';

import { SearchService } from '../../services/search.service';
import { IOMDBMovie } from '../../models/movie.model';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.scss'],
})
export class MovieSearchComponent implements OnInit, OnDestroy {
  searchResults: IOMDBMovie[];
  responseMessage: string;
  errorMessages = new Map([
    ['required', 'Please enter a search term'],
    ['pattern', 'Please enter only characters and spaces'],
    ['minlength', 'Please enter more than 2 characters'],
    ['maxlength', 'Please enter less than 10 characters'],
  ]);
  isAlive = true;

  constructor(private searchService: SearchService) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.isAlive = false;
  }

  onSearch(searchTerm: string): void {
    this.searchService
      .getSearchResults(searchTerm)
      .pipe(takeWhile(() => this.isAlive))
      .subscribe((r) => {
        r.Response === 'True'
          ? (this.searchResults = r.Search)
          : (this.responseMessage = r.Error);
      });
  }
}
