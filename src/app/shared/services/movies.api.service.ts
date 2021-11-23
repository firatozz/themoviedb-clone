import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';
import { TVListResponse } from '../models/TVListResponse';
import { MovieDetail } from '../models/MovieDetail';
import { MovieListResponse } from '../models/MovieListResponse';
import { TVDetail } from '../models/TVDetail';

@Injectable({
  providedIn: 'root',
})
export class MoviesApiService {
  private API_KEY = environment.API_KEY;
  private API_URL = environment.API_URL;

  constructor(private httpClient: HttpClient) {}

  getPopularMovieList(
    page?: number,
    language = 'en-US'
  ): Observable<MovieListResponse> {
    return this.httpClient.get<MovieListResponse>(
      this.API_URL + '/movie/popular',
      {
        params: {
          api_key: String(this.API_KEY),
          page: Number(page),
          language: String(language),
        },
      }
    );
  }

  getMovieDetail(movieId: string, language = 'en-US'): Observable<MovieDetail> {
    return this.httpClient.get<MovieDetail>(
      this.API_URL + '/movie/' + movieId,
      {
        params: {
          api_key: String(this.API_KEY),
          language: String(language),
        },
      }
    );
  }

  getSearchMovie(
    query: string,
    language = 'en-US'
  ): Observable<MovieListResponse> {
    return this.httpClient.get<MovieListResponse>(
      this.API_URL + '/search/movie',
      {
        params: {
          api_key: String(this.API_KEY),
          language: String(language),
          query: String(query),
        },
      }
    );
  }

  getTopRatedMovies(
    page?: number,
    language = 'en-US'
  ): Observable<MovieListResponse> {
    return this.httpClient.get<MovieListResponse>(
      this.API_URL + '/movie/top_rated',
      {
        params: {
          api_key: String(this.API_KEY),
          page: Number(page),
          language: String(language),
        },
      }
    );
  }

  getTopRatedTV(page?: number, language = 'en-US'): Observable<TVListResponse> {
    return this.httpClient.get<TVListResponse>(this.API_URL + '/tv/top_rated', {
      params: {
        api_key: String(this.API_KEY),
        page: Number(page),
        language: String(language),
      },
    });
  }

  getTVDetail(tvId: string, language = 'en-US'): Observable<TVDetail> {
    return this.httpClient.get<TVDetail>(this.API_URL + '/tv/' + tvId, {
      params: {
        api_key: String(this.API_KEY),
        language: String(language),
      },
    });
  }
}
