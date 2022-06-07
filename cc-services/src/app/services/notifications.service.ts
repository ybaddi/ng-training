import { Injectable } from '@angular/core';
import {BehaviorSubject,Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  private count: BehaviorSubject<number> = new 
  BehaviorSubject<number>(20);
  count$: Observable<number> = this.count.asObservable();

  constructor() { }

  setCount(value){
    this.count.next(value);
  }
}
