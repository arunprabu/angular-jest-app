import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="text-center">
      <hr />
      <app-menu-list></app-menu-list>
      <p>Copyright {{ copyrightYear }} | {{ developerName }}</p>
    </footer>
  `,
  styles: [],
})
export class FooterComponent {
  copyrightYear = 2024;
  developerName = 'Arun';
}
