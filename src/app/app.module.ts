import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRouteingModule } from './app.routeing';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoDetailsComponent } from './video-details/video-details.component';


@NgModule({
  declarations: [
    AppComponent,
    VideoListComponent,
    VideoDetailsComponent,
  ],
  imports: [
    AppRouteingModule,
    BrowserModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }