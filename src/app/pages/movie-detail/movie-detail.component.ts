import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDetail } from 'src/app/shared/models/MovieDetail';
import { MoviesApiService } from 'src/app/shared/services/movies.api.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieDetailComponent implements OnInit {
  movieId: string;
  imagePath = 'https://www.themoviedb.org/t/p/w220_and_h330_face/';
  backDropImgPath =
    'https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/';
  movieInfo: MovieDetail;

  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MoviesApiService
  ) {}

  ngOnInit() {
    this.movieId = this.activatedRoute.snapshot.params['id'];
    this.getMovieDetail(this.movieId);
  }

  getMovieDetail(movieId: string) {
    this.movieService.getMovieDetail(movieId).subscribe((res) => {
      this.movieInfo = res;
      console.log(res);
    });
  }
}
