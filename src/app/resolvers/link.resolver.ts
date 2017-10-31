import {Injectable} from '@angular/core';
import {Resolve, ActivatedRouteSnapshot} from '@angular/router';
import { Observable } from 'rxjs/Rx';
import {LinkService} from '../services/link.service/link.service';
import {LinksResponseModel} from '../models/links-response.model';

@Injectable()

export class LinkResolver implements Resolve<any> {
  constructor(private linkService: LinkService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<LinksResponseModel> {
    return this.linkService.get()
      .map(item => {
        return new LinksResponseModel(item['count'], item['data']);
      });
  }
}
