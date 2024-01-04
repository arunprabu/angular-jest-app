// Test Pattern: AAA (Arrange, Act, Assert)

// Arrange
// Let's load the necessary tools
import { TestBed } from '@angular/core/testing';
// Let's load the sample
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';

// Let's test the app component
// TEST SUITE = a group of related test specs
describe('AppComponent', () => {
  // setup
  beforeEach(() => {
    // Act
    TestBed.configureTestingModule({
      declarations: [AppComponent, HeaderComponent, FooterComponent],
    });
  });

  // ideal place for us to write test cases or test specs or tests
  // Test spec #1
  it('should create the app', () => {
    // Act
    const fixture = TestBed.createComponent(AppComponent);
    // We are taking up the component class for testing
    const app = fixture.componentInstance;
    // Assert (Mandatory) -- all tests must be ended with assert
    expect(app).toBeTruthy();
  });

  // Test Spec #2
  it(`has variable title with value 'AngularJEST App!' in it`, () => {
    // Act
    const fixture = TestBed.createComponent(AppComponent);
    // We are taking up the component class for testing
    const app = fixture.componentInstance;
    // Assert (must)
    expect(app.title).toBe('AngularJEST App!');
  });
});

/* describe, it, expect -- are from jest 
   toBeTruthy() is a matcher fom jest
*/
