import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserComponent } from './add-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('AddUserComponent', () => {
  let component: AddUserComponent;
  let fixture: ComponentFixture<AddUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddUserComponent],
      imports: [ReactiveFormsModule, HttpClientModule]
    });
    fixture = TestBed.createComponent(AddUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form with default values -- form fields should be empty initially', () => {
    expect(component.userForm.value).toEqual({
      name: '',
      email: '',
      phone: ''
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

  // Let's mock this on Monday
  



});
