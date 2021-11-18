import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MoviesApiService {
  private API_KEY = environment.API_KEY;

  constructor(private httpClient: HttpClient) {}
}
