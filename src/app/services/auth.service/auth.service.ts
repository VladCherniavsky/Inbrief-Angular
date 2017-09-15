import {Injectable, OnInit} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()

export class AuthService {
 private isLogged: BehaviorSubject<boolean> = new BehaviorSubject(false);

 constructor() { }

 get IsLogged(): BehaviorSubject<boolean> {
   return this.isLogged;
 }
 public changeAuth(isLogged: boolean): void {
   this.isLogged.next(isLogged);
 }
 public getIsLogged() {
   return this.isLogged.getValue();
 }
}
