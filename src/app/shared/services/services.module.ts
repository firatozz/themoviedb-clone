import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MoviesApiService } from './movies.api.service';

@NgModule({
  declarations: [],
  providers: [MoviesApiService],
  imports: [CommonModule],
})
export class ServicesModule {}
