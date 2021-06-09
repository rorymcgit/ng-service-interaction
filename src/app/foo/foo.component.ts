import { Component } from '@angular/core';
import { FooService } from '../foo.service';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.scss']
})
export class FooComponent {
  private readonly characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

  constructor(private fooService: FooService) {}

  doFoo(): void {
    // Get a random character just to illustrate different
    // things passing through the observable to its subscriber
    const s = this.characters[Math.floor(Math.random() * 62)];

    // Call the service method when the event happens
    this.fooService.handleFooHappening(s);
  }

}
