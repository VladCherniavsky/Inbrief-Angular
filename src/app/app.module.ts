import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule, Http, XHRBackend, RequestOptions} from '@angular/http';
import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule } from '@angular/material';
import 'hammerjs';

import { AppComponent } from './app.component';
import {httpFactory} from './common/http.factory';
import { LinkPageComponent } from './link-page/link-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavigationBarComponent } from './common/navigation-bar/navigation-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    LinkPageComponent,
    HomePageComponent,
    NavigationBarComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule
  ],
  providers: [{
    provide: Http,
    useFactory: httpFactory,
    deps: [XHRBackend, RequestOptions]
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
