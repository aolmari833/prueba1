import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//import { AppComponent } from './app.component';
import { JokeComponent } from './joke/joke.component';
import { JokeListComponent } from './joke-list/joke-list.component';
import { JokeFormComponent } from './joke-form/joke-form.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


@NgModule({
  imports: [BrowserModule],
  declarations: [
  JokeComponent,
  JokeListComponent,
  JokeFormComponent
  ],
  bootstrap: [JokeListComponent]
})
export class AppModule{
  
}
export class Joke {
  public setup: string;
  public punchline: string;
  public hide: boolean;
  constructor(setup: string, punchline: string) {
  this.setup = setup;
  this.punchline = punchline;
  this.hide = true;
  }
  toggle() {
  this.hide = !this.hide;
  }
}
//platformBrowserDynamic().bootstrapModule(Joke);