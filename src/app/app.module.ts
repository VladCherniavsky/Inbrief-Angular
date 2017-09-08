import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import {HttpModule, Http, XHRBackend, RequestOptions} from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { MdButtonModule,
  MdCardModule, MdMenuModule,
  MdToolbarModule, MdIconModule,
} from '@angular/material';

import 'hammerjs';

import { AppComponent } from './app.component';
import {httpFactory} from './common/http.factory';
import { LinkPageComponent } from './link-page/link-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { LoginPageComponent } from './login-page/login-page.component';
import {AuthGuard} from './guards/auth-guard/auth.guard';
import { NavigationButtonComponent } from './components/common/navigation-button/navigation-button.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'home',
    component: HomePageComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LinkPageComponent,
    HomePageComponent,
    NavigationBarComponent,
    LoginPageComponent,
    NavigationButtonComponent
  ],
  imports: [

    HttpModule,
    BrowserModule,
    MdButtonModule,
    MdCardModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule,
    BrowserAnimationsModule,
    NavigationBarComponent,
    RouterModule.forRoot(routes, { useHash: true })

  ],
  providers: [{
    provide: Http,
    useFactory: httpFactory,
    deps: [XHRBackend, RequestOptions]
  }, AuthGuard],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
