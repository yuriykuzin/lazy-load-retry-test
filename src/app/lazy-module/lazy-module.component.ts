import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy-module',
  template: `
    <p>
      lazy-module works!
    </p>
  `,
  styles: [
  ]
})
export class LazyModuleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
