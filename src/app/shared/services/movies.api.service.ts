import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';
import { MovieList } from '../models/MovieList';
import { MovieListResponse } from './../models/MovieListResponse';

@Injectable({
  providedIn: 'root',
})
export class MoviesApiService {
  private API_KEY = environment.API_KEY;
  private API_URL = environment.API_URL;

  constructor(private httpClient: HttpClient) {}

  getPopularMovieList(
    page?: number,
    language?: string
  ): Observable<MovieListResponse> {
    return this.httpClient.get<MovieListResponse>(this.API_URL + 'popular', {
      params: {
        api_key: String(this.API_KEY),
        page: Number(page),
        language: String(language),
      },
    });
  }
}
