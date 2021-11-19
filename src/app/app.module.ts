import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages';
import { SharedModule } from './shared/shared.module';

const MODULES = [AppRoutingModule, SharedModule, BrowserModule];

@NgModule({
  declarations: [AppComponent, HomePageComponent],
  imports: [...MODULES],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
