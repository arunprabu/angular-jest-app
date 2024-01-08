import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ColorizerDirective } from './colorizer.directive';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

// Creating a Mock Component 
@Component({
  template: `<div appColorizer>Wow</div>`
})
class MockComponent {} // No need to export as we will be using this com here itself

describe('ColorizerDirective', () => {
  let fixture: ComponentFixture<MockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      // preparing the MockComponent for testing -- loading it into the testbed
      declarations: [MockComponent, ColorizerDirective],
    });
    fixture = TestBed.createComponent(MockComponent);
  });

  it('should have a div with bgcolor, color, padding', () => {
    const divElement: HTMLElement = fixture.nativeElement.querySelector('div');
    expect(divElement.style.backgroundColor).toBe('red');
    expect(divElement.style.color).toBe('rgb(255, 255, 255)');
    expect(divElement.style.padding).toBe('30px');
  });

  it('should change bg color to yellow and text color to black on mouseover', () => {
    const colorizerWrapperElement = fixture.debugElement.query(By.css('div')); // fetching the div element
    colorizerWrapperElement.triggerEventHandler('mouseover', null);

    // detecting changes after mouseover
    fixture.detectChanges();

    const divElement: HTMLElement = fixture.nativeElement.querySelector('div');
    expect(divElement.style.backgroundColor).toBe('yellow');
    expect(divElement.style.color).toBe('rgb(0, 0, 0)'); // black
  });

  // TODO: trigger the mouseleave on div
});
