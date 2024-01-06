import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="px-4 py-5 my-5 text-center">
      <h1 class="display-5 fw-bold text-body-emphasis">
        Testing Angular App using JEST
      </h1>
      <div class="col-lg-6 mx-auto">
        <p
          class="lead"
          style="font-size: 24px; margin-bottom: 16px; color: #7C4DFF"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          malesuada malesuada lectus. Nulla laoreet velit at erat efficitur, eu
          dignissim urna ornare.
        </p>
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button type="button" class="btn btn-primary btn-lg px-4 gap-3 browse-users-btn">
            Browse Users
          </button>
          <button type="button" class="btn btn-outline-secondary btn-lg px-4">
            Goto Calculator
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class HomeComponent {}
