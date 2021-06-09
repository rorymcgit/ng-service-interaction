import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FooService {
  // Create a private subject which is to be
  // "nexted" by calling handleFoo()
  private fooSubject = new Subject<string>();

  // Expose fooSubject as an observable only:
  // a readonly subject for consumers/listeners
  public foo$ = this.fooSubject.asObservable();

  // Call "next" with a string value, trigger all subscribers
  // which have called "subscribe" on the subject's observable
  handleFooHappening(s: string): void {
    this.fooSubject.next(s);
  }
}
