import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent]
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // TODO: Test the h1 content 
  // TODO: Test the paragraph text

  // Testing inline styles
  it('should have purple colored text with font size 22px in a lead paragraph', () => {
    const homeHtml = fixture.nativeElement as HTMLElement;
    const leadPara: HTMLParagraphElement = homeHtml.querySelector(
      'p.lead'
    ) as HTMLParagraphElement;
    
    // checking whether the text is of purple color
    // NOT recommended if you use color code in hex -- use only rgb in html
    expect(leadPara.style.color).toBe('rgb(124, 77, 255)');
    // Let's test the fontSize also
    expect(leadPara.style.fontSize).toBe('24px');
  });

  // TODO: Testing css Class

});
