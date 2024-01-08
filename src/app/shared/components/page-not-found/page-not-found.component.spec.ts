import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotFoundComponent } from './page-not-found.component';
import { Router } from '@angular/router';

describe('PageNotFoundComponent', () => {
  let component: PageNotFoundComponent;
  let fixture: ComponentFixture<PageNotFoundComponent>;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageNotFoundComponent]
    });
    fixture = TestBed.createComponent(PageNotFoundComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create PageNotFoundComponent', () => {
    expect(component).toBeTruthy();
  });

  // Testing routing navigation
  it('should navigate to home page when Go home button is Clicked', () => {
    const navigateSpy = jest.spyOn(router, 'navigate');

    // Triggering the button click 
    const button = fixture.nativeElement.querySelector('button');
    button.click();

    // assert 
    expect(navigateSpy).toHaveBeenCalledWith(['/']);
  });

});
