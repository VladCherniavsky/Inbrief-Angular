import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class RequestCounterService {
  private _requestCount: BehaviorSubject<number> = new BehaviorSubject(0);

  constructor() { }

  get RequestCount(): BehaviorSubject<number> {
    return this._requestCount;
  }

  public increase(): void {
    this._requestCount.next(this._requestCount.getValue() + 1);

  }
  public decrease(): void {
    if (this._requestCount.getValue() > 0) {
      this._requestCount.next(this._requestCount.getValue() - 1);
    }
  }

}
