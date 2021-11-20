import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MoviesApiService } from './../../services/movies.api.service';
import { MovieList } from './../../models/MovieList';
import { MovieListResponse } from '../../models/MovieListResponse';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieListComponent implements OnInit {
  movies: MovieListResponse;

  imagePath = 'https://www.themoviedb.org/t/p/w220_and_h330_face/';

  constructor(private movieService: MoviesApiService) {}

  ngOnInit() {
    this.getPopularMovies();
  }

  getPopularMovies() {
    this.movieService.getPopularMovieList(1).subscribe((res) => {
      console.log();
      this.movies = res;
    });
  }
}
