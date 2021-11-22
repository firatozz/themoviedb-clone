import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { MoviesApiService } from './../../services/movies.api.service';
import { MovieListResponse } from '../../models/MovieListResponse';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieListComponent implements OnInit {
  @Input()
  listName = '';

  @Input()
  movieFilterTabs: any;

  movies: MovieListResponse;

  selectedItem: String;

  imagePath = 'https://www.themoviedb.org/t/p/w220_and_h330_face/';

  constructor(private movieService: MoviesApiService) {}

  ngOnInit() {
    this.selectedItem = this.movieFilterTabs[0];
    this.getPopularMovies();
  }

  getPopularMovies() {
    this.movieService.getPopularMovieList(1).subscribe((res) => {
      console.log();
      this.movies = res;
    });
  }

  listClick(newValue: any) {
    console.log(newValue);
    this.selectedItem = newValue;
  }
}
