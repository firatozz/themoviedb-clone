import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from './components/movie-list/movie-list.component';

@NgModule({
  declarations: [
    MovieListComponent
  ],
  imports: [CommonModule],
})
export class SharedModule {}
