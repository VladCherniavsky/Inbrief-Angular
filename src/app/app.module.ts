import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import {HttpModule, Http, XHRBackend, RequestOptions} from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MdButtonModule,
  MdCardModule, MdMenuModule,
  MdToolbarModule, MdIconModule,
  MdProgressSpinnerModule
} from '@angular/material';

import 'hammerjs';

import { AppComponent } from './app.component';
import {httpFactory} from './common/http.factory';
import { LinkPageComponent } from './link-page/link-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AuthGuard } from './guards/auth-guard/auth.guard';
import { NavigationButtonComponent } from './components/common/navigation-button/navigation-button.component';
import { LinkResolver} from './resolvers/link.resolver';
import { LinkService } from './services/link.service/link.service';
import { AuthService } from './services/auth.service/auth.service';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { UsersPageComponent} from './users-page/users-page.component';
import { RequestCounterService } from './services/request-counter.service/request-counter.service';
import { TableComponent } from './components/common/table/table.component';
import { PaginationComponent } from './components/common/pagination/pagination.component';
import {GlobalVariablesService} from './services/global-variables.service/global-variables.service';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'links',
    component: LinkPageComponent,
    resolve: {
      links: LinkResolver
    }
  },
  {
    path: 'users',
    component: UsersPageComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LinkPageComponent,
    HomePageComponent,
    NavigationBarComponent,
    LoginPageComponent,
    NavigationButtonComponent,
    SpinnerComponent,
    UsersPageComponent,
    TableComponent,
    PaginationComponent
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
    MdProgressSpinnerModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  providers: [
    LinkResolver,
    LinkService,
    AuthService,
    AuthGuard,
    GlobalVariablesService,
    RequestCounterService,
    {
      provide: Http,
      useFactory: httpFactory,
      deps: [XHRBackend, RequestOptions, RequestCounterService]
    }
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
