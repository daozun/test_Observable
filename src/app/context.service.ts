import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContextService {
  private subject = new Subject<any>();
  constructor() { }

  public setData(setValue: string) {
    this.subject.next({ value: setValue });
  }

  public getData() {
    return this.subject.asObservable();
  }
}
