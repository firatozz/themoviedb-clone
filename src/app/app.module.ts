import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent, MovieDetailComponent } from './pages';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

const MODULES = [
  AppRoutingModule,
  SharedModule,
  BrowserModule,
  HttpClientModule,
  FormsModule,
];

const COMPONENTS = [AppComponent, HomePageComponent, MovieDetailComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [...MODULES],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
