import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-list',
  template: `
    <ul class="navbar-nav me-auto mb-2 mb-md-0">
      <li class="nav-item">
        <a
          class="nav-link"
          aria-current="page"
          routerLink="/"
          routerLinkActive="active"
          [routerLinkActiveOptions]="{ exact: true }"
          >Home</a
        >
      </li>
      <li class="nav-item">
        <a class="nav-link" routerLink="/about" routerLinkActive="active"
          >About Us</a
        >
      </li>
      <li class="nav-item">
        <a class="nav-link" routerLink="/contact" routerLinkActive="active"
          >Contact Us</a
        >
      </li>
    </ul>
  `,
  styles: [],
})
export class MenuListComponent {}
