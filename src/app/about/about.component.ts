import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
})
export class AboutComponent {
  favBookTitle = 'the alchemist';

  randomText =
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fringilla risus quis sem tempus, eget condimentum velit malesuada. Nulla id ultrices lorem. Proin a velit euismod, mattis libero nec, gravida est.`;
}
