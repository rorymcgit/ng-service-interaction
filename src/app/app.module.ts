import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooComponent } from './foo/foo.component';
import { FooService } from './foo.service';

@NgModule({
  declarations: [
    AppComponent,
    FooComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    FooService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
