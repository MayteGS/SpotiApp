import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { appRouting } from './components/app.routes';
import {HttpClientModule} from '@angular/common/http';
import { SearchComponent } from './components/search/search.component';
import { NoImagePipe } from './pipes/no-image.pipe';
import { ArtistsComponent } from './components/artists/artists.component';
import { DomSanatizerPipe } from './pipes/dom-sanatizer.pipe'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SearchComponent,
    NoImagePipe,
    ArtistsComponent,
    DomSanatizerPipe
  ],
  imports: [
    BrowserModule,
    appRouting,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
