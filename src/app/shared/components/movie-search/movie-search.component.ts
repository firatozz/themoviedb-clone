import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MoviesApiService } from '../../services/movies.api.service';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieSearchComponent implements OnInit {
  userMovieList: any[] = [];

  constructor(private movieService: MoviesApiService) {}

  ngOnInit() {}

  onSearchChange(event: any) {
    this.getLastTreeMovies(event.target.value);
  }

  getLastTreeMovies(searchText: string) {
    if (searchText.length) {
      this.movieService.getSearchMovie(searchText).subscribe((res) => {
        Object.assign(this.userMovieList, res.results);
      });
    } else {
      this.userMovieList = [];
    }
  }
}
