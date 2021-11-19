import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LayoutModule } from './layout/layout.module';
import { SharedModule } from './shared/shared.module';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';

@NgModule({
  declarations: [AppComponent, HomePageComponent, MovieDetailComponent],
  imports: [BrowserModule, AppRoutingModule, LayoutModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
