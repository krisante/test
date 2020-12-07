import { Component } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  template: `<app-nav-bar></app-nav-bar>
  <router-outlet></router-outlet>
  <app-footer></app-footer>`,
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent{}
