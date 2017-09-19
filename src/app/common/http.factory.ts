import {XHRBackend, Http, RequestOptions} from '@angular/http';
import {InterceptedHttp} from './http.interceptor';
import {RequestCounterService} from '../services/request-counter.service/request-counter.service';

export function httpFactory(xhrBackend: XHRBackend, requestOptions: RequestOptions, requestCounter: RequestCounterService): Http {
  return new InterceptedHttp(xhrBackend, requestOptions, requestCounter);
}
