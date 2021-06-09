import { Component } from '@angular/core';
import { FooService } from './foo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(fooService: FooService) {
    // Subscribe/listen for changes to the foo subject's observable
    fooService.foo$.subscribe(result => {
      console.log('result: ', result);
    });
  }
}
