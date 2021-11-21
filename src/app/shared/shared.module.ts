import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ServicesModule } from './services/services.module';

import * as _components from './index';
import { MinutesToHours } from './utilities/m2h.pipe';

const COMPONENTS = [
  _components.MovieListComponent,
  _components.MovieSearchComponent,
];

const LAYOUTS = [
  _components.HeaderComponent,
  _components.FooterComponent,
  _components.LayoutComponent,
];

@NgModule({
  declarations: [...COMPONENTS, ...LAYOUTS, MinutesToHours],
  imports: [CommonModule, RouterModule, ServicesModule],
  exports: [...COMPONENTS, ...LAYOUTS, MinutesToHours],
})
export class SharedModule {}
