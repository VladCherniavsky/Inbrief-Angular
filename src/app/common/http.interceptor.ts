import {Injectable} from '@angular/core';
import { ConnectionBackend, RequestOptions, Request, RequestOptionsArgs, Response, Http, Headers} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import {RequestCounterService} from '../services/request-counter.service/request-counter.service';

@Injectable()

export class InterceptedHttp extends Http {
  constructor(backend: ConnectionBackend, defaultOptions: RequestOptions, private requestCounterService: RequestCounterService) {
    super(backend, defaultOptions);
  }

  request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {

    const handleResponse = () => {
      this.requestCounterService.decrease();
    };

    const handleError = (err) => {
      this.requestCounterService.decrease();
      return err;
    };

    this.requestCounterService.increase();

    return super.request(url, options)
      .do(handleResponse)
      .catch(handleError);
  }

  get(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return super.get(url, this.getRequestOptionArgs(options)).map(res => res.json());
  }

  private getRequestOptionArgs(options?: RequestOptionsArgs): RequestOptionsArgs {
    if (options == null) {
      options = new RequestOptions();
    }
    if (options.headers == null) {
      options.headers = new Headers();
    }
    options.headers.append('Content-Type', 'application/json');

    return options;
  }
}
