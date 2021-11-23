import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MovieListResponse } from '../../shared/models/MovieListResponse';
import { MoviesApiService } from '../../shared/services/movies.api.service';
import { TVListResponse } from './../../shared/models/TVListResponse';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent implements OnInit {
  movies: MovieListResponse;
  popularMoviesHeader = "What's Popular";
  popularMoviesFilterTabs = ['Streaming', 'On TV', 'For Rent', 'In Theatres'];

  freeToWatch: boolean = true;
  freeToWatchList: any;
  freeToWatchMovies: MovieListResponse;
  freeToWatchTV: TVListResponse;
  freeToWatchHeader = 'Free To Watch';
  freeToWatchFilterTabs = ['Movies', 'TV'];

  constructor(private movieService: MoviesApiService) {}

  ngOnInit() {
    this.getTopRatedMovies();
    this.getTopRatedTV();
    this.getPopularMovies();
  }

  getPopularMovies() {
    return this.movieService.getPopularMovieList(1).subscribe((res) => {
      this.movies = res;
    });
  }

  getTopRatedMovies() {
    return this.movieService.getTopRatedMovies(1).subscribe((res) => {
      this.freeToWatchMovies = res;
    });
  }

  getTopRatedTV() {
    return this.movieService.getTopRatedTV(1).subscribe((res) => {
      this.freeToWatchTV = res;
    });
  }

  changeList(event: boolean) {
    this.freeToWatch = event;
  }
}
