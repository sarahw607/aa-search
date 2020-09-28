import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';

import { IOMDBResponse, IOMDBMovie } from '../models/movie.model';

import { environment } from '../../environments/environment';

@Injectable()
export class SearchService {
  constructor(private httpClient: HttpClient) {}

  getSearchResults(searchTerm: string): Observable<IOMDBResponse> {
    const params = new HttpParams().append('s', searchTerm);
    return this.httpClient.get<IOMDBResponse>(environment.searchUrl, {
      params,
    });
  }
}
