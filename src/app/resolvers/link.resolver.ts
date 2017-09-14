import {Injectable} from '@angular/core';
import {Resolve, ActivatedRouteSnapshot} from '@angular/router';
import { Observable } from 'rxjs/Rx';
import {LinkService} from '../services/link.service/link.service';

@Injectable()

export class LinkResolver implements Resolve<any> {
  constructor(private linkService: LinkService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.linkService.get();
  }
}
