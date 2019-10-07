import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { YoutubeSearchComponent } from './youtube-search/youtube-search.component';
import { HttpClientModule } from '@angular/common/http';
import { youtubeSearchInjectables } from './youtube-search/injectables/youtube-search.injectables';
@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, YoutubeSearchComponent ],
  bootstrap:    [ AppComponent ],
  providers: [youtubeSearchInjectables]
})
export class AppModule { }
