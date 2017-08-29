import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class LinkService {
  constructor(private _http: Http) {

  }

  public get() {
    return this._http.get('api/link');
  }
}
