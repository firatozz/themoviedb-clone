import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { Router } from '@angular/router';

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

  @Input()
  movies: any;

  @Output()
  activeTab: EventEmitter<boolean> = new EventEmitter<boolean>();

  selectedItem: String;

  imagePath = 'https://www.themoviedb.org/t/p/w220_and_h330_face/';

  constructor() {}

  ngOnInit() {
    this.selectedItem = this.movieFilterTabs[0];
  }

  listClick(newValue: string) {
    newValue === 'TV' ? this.activeTab.emit(false) : this.activeTab.emit(true);
    this.selectedItem = newValue;
  }
}
