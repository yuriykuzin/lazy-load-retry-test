import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <a routerLink="/">Home</a> /
    <a routerLink="/lazy-route">Go to lazy loaded module</a>
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent {
  title = 'lazy-load-test';
}
