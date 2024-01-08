import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserComponent } from './add-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from '../../services/user.service';
import { of } from 'rxjs';

// mock the UserService
jest.mock('../../services/user.service');

describe('AddUserComponent', () => {
  let component: AddUserComponent;
  let fixture: ComponentFixture<AddUserComponent>;
  let userService: jest.Mocked<UserService>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddUserComponent],
      imports: [ReactiveFormsModule, HttpClientModule],
      providers: [UserService], // provide the service
    });
    fixture = TestBed.createComponent(AddUserComponent);
    component = fixture.componentInstance;
    // Let's complete the dep injection part
    userService = TestBed.inject(UserService) as jest.Mocked<UserService>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form with default values -- form fields should be empty initially', () => {
    expect(component.userForm.value).toEqual({
      name: '',
      email: '',
      phone: '',
    });
  });

  it('should mark form controls as invalid if submitted with EMPTY values', () => {
    // without filling the form fields I am submitting
    component.handleSubmit();
    // so form should be invalid
    expect(component.userForm.invalid).toBeTruthy();
    // for individual fields
    expect(component.userForm.get('name')?.errors?.['required']).toBeTruthy();
    expect(component.userForm.get('phone')?.errors?.['required']).toBeTruthy();
    expect(component.userForm.get('email')?.errors?.['required']).toBeTruthy();
  });

  it('should mark form controls as invalid if submitted with wrong inputs entered in fields', () => {
    const nameControl = component.userForm.get('name');
    const phoneControl = component.userForm.get('phone');
    const emailControl = component.userForm.get('email');

    nameControl?.setValue('A'); // less than 3 characters -- wrong input
    phoneControl?.setValue('1234'); // invalid phone pattern -- wrong input
    emailControl?.setValue('a@'); // invalid email format -- wrong input

    component.handleSubmit();

    expect(nameControl?.errors?.['required']).toBeFalsy(); // required error should not be displayed
    expect(nameControl?.errors?.['minlength']).toBeTruthy(); // only this error should appear

    expect(phoneControl?.errors?.['required']).toBeFalsy(); // required error should not be displayed
    expect(phoneControl?.errors?.['pattern']).toBeTruthy(); // only this error should appear

    expect(emailControl?.errors?.['required']).toBeFalsy(); // required error should not be displayed
    expect(emailControl?.errors?.['email']).toBeTruthy(); // only this error should appear
  });

  // Mocking the submit button logic
  /*
    How to Mock in JEST? 
      1. Mock the user service 
      2. Setup the Mock using JEST
      3. Have our mock data (own data) to be served as res to the api call
      4. We need to tweak userService.createUser() method and make it return our mock data as res
      5. Assert  
  */
 // Positive mocking -- Learn about negative mocking
  it('should display saved successfully after successful form submission', () => {
    // Let's have the mockResponse 
    const mockResponse = {
      id: 1001
    }
    userService.createUser.mockReturnValue(of(mockResponse));
    // filling the form thru program
    component.userForm.setValue({
      name: 'Arun',
      phone: 1234567890,
      email: 'a@gc.com'
    });
    component.handleSubmit();

    // Assert 
    expect(userService.createUser).toHaveBeenCalledWith({
      name: 'Arun',
      phone: 1234567890,
      email: 'a@gc.com',
    });
    expect(component.isSaved).toBeTruthy();
  });

  // TODO: Learn about negative mocking using jest in angular
  
  


});
