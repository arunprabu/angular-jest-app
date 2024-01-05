// Test Pattern: AAA (Arrange, Act, Assert)

// Arrange
// Let's load the necessary tools
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

// Let's load the sample
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { MenuListComponent } from './shared/components/menu-list/menu-list.component';

// Let's test the app component
// TEST SUITE = a group of related test specs
describe('AppComponent', () => {
  // setup
  beforeEach(() => {
    // Act
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        MenuListComponent,
      ],
      imports: [RouterTestingModule], // include this for router-outlet
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
  test(`has variable named title with value 'AngularJEST App!' in it`, () => {
    // Act
    const fixture = TestBed.createComponent(AppComponent);
    // We are taking up the component class for testing
    const app = fixture.componentInstance;
    // Assert (must)
    expect(app.title).toBe('AngularJEST App!');
  });
});

/* describe, it, test, expect -- are from jest 
  it() and test() are same. 
  toBeTruthy() is a matcher fom jest
*/
