import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import * as _components from './index';

const COMPONENTS = [
  _components.HeaderComponent,
  _components.FooterComponent,
  _components.LayoutComponent,
];

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class LayoutModule {}
