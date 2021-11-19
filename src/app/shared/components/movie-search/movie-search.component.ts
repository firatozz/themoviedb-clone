import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieSearchComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
