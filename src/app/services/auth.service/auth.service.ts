import {Injectable, OnInit} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()

export class AuthService {
 private isLogged: BehaviorSubject<boolean> = new BehaviorSubject(false);

 get IsLogged(): BehaviorSubject<boolean> {
   return this.isLogged;
 }
 public changeAuth(isLogged: boolean): void {
   this.isLogged.next(isLogged);
 }
 public getIsLogged(): boolean {
   return this.isLogged.getValue();
 }
}
