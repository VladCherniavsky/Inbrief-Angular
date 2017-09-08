import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule} from '@angular/router/testing';
import { AppComponent } from './app.component';
import {NavigationBarComponent} from './components/navigation-bar/navigation-bar.component';
import {NavigationButtonComponent} from './components/common/navigation-button/navigation-button.component';
import { MdButtonModule,
  MdCardModule, MdMenuModule,
  MdToolbarModule, MdIconModule,
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';

import {HttpModule, Http, XHRBackend, RequestOptions, ConnectionBackend} from '@angular/http';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, NavigationBarComponent, NavigationButtonComponent,
      ],
      imports: [RouterTestingModule, MdButtonModule,
        MdCardModule, MdMenuModule,
        MdToolbarModule, MdIconModule, HttpModule, BrowserModule],
      providers: [Http, ConnectionBackend]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
});
