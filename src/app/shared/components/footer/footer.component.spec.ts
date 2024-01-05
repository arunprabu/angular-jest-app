import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';
import { MenuListComponent } from '../menu-list/menu-list.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterComponent, MenuListComponent],
      imports: [RouterTestingModule], // needed for routerLinkActiveOptions
    });
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have copyrightYear 2024 ', () => {
    expect(component.copyrightYear).toBe(2024);
  });

  // Testing html of a component
  it('should display the correct copyright year and developer name in footer html', () => {
    // We are taking up the comp's html for testing
    const footerHtml = fixture.nativeElement;
    const pElement: HTMLParagraphElement = footerHtml.querySelector('p');
    // console.log(aElement.textContent);
    expect(pElement.textContent).toBe('Copyright 2024 | Arun');
  });
});
