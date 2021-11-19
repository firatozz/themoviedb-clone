import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MoviesApiService } from './../../services/movies.api.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieListComponent implements OnInit {
  constructor(private movieService: MoviesApiService) {}

  ngOnInit(): void {
    this.movieService.getPopularMovieList(1, 'tr-TR').subscribe((res) => {
      console.log(res);
    });
  }
}
