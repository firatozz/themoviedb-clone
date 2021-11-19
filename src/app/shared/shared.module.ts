import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as _components from './index';

const COMPONENTS = [
  _components.MovieListComponent,
  _components.MovieSearchComponent,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule],
  exports: [...COMPONENTS],
})
export class SharedModule {}
