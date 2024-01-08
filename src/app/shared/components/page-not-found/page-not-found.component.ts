import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  template: `
    <div class="text-center">
      <h1>404 | Page Not Found</h1>
      <button (click)="handleNavigate()" class="btn btn-primary">
        Go Home
      </button>
    </div>
  `,
  styles: [],
})
export class PageNotFoundComponent {
  constructor(private router: Router) {

  }

  handleNavigate() {
    this.router.navigate(['/'])
  }
}
