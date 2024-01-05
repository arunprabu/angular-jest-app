// Arrange
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
// Sample 
import { HeaderComponent } from './header.component';
import { MenuListComponent } from '../menu-list/menu-list.component';

// Test suite
describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(() => {
    // Act
    TestBed.configureTestingModule({
      declarations: [HeaderComponent, MenuListComponent],
      imports: [RouterTestingModule] // needed for routerLinkActiveOptions
    });
    fixture = TestBed.createComponent(HeaderComponent);
    // taking up the component class for testing
    component = fixture.componentInstance;
    // Triggering UI updates in HTML
    fixture.detectChanges();
  });

  it('should create header component', () => {
    // Assert
    expect(component).toBeTruthy();
  });

  // Testing variable of a component class
  it('should have appName with value Angular JEST App', () => {
    expect(component.appName).toEqual('Angular JEST App');
  });

  // Testing html of a component
  it('should display the correct app name in <a>', () => {
    // We are taking up the comp's html for testing
    const headerHtml = fixture.nativeElement;
    const aElement: HTMLAnchorElement = headerHtml.querySelector('a');
    // console.log(aElement.textContent);
    expect(aElement.textContent).toBe('Angular JEST App');
  });
});
