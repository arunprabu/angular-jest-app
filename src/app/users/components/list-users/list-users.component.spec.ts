import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListUsersComponent } from './list-users.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from '../../services/user.service';
import { of } from 'rxjs';

// Step 1: Mock the UserService
jest.mock('../../services/user.service');

describe('ListUsersComponent', () => {
  let component: ListUsersComponent;
  let fixture: ComponentFixture<ListUsersComponent>;
  // Step 2: Setting up Mock
  let userService: jest.Mocked<UserService>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ListUsersComponent],
      imports: [HttpClientModule],
      providers: [UserService],
    }).compileComponents();

    fixture = TestBed.createComponent(ListUsersComponent);
    component = fixture.componentInstance;
    // Step 2 (continues...): Setting up Mock -- because we have done dep injection in our comp for the service
    userService = TestBed.inject(UserService) as jest.Mocked<UserService>;
  }));

  it('should create ListUsersComponent', () => {
    expect(component).toBeTruthy();
  });

  /* 
    Testing dynamic data such as weather info and news feed items with static texts would have issues 
    1. No guarantee for the same data to be served from rest api 
    2. REST API may be down
    3. REST API may be still in dev

    Solution? Mocking in Unit test
    How to Mock in JEST? 
      1. Mock the user service 
      2. Setup the Mock using JEST
      3. Have our mock data (own data) to be served as res to the api call
      4. We need to tweak userService.getUsers() method and make it return our mock data as res
      5. Assert 
  */
  it('should fetch users from the service', () => {
    // Step 3: Let's have the mock data
    const mockUsers = [
      { id: 1, name: 'Virat Kohli', phone: '34256789', email: 'v@k.com' },
      { id: 2, name: 'Steve Smith', phone: '78965434', email: 's@t.com' },
      {
        id: 3,
        name: 'Christiano Ronaldo',
        phone: '454678970',
        email: 'c@r.com',
      },
    ];

    // Step 4: Mocking the getUsers method of the service with our own mock data
    userService.getUsers.mockReturnValue(of(mockUsers));

    // Triggering ngOnInit
    component.ngOnInit();

    // Step 5: Assert
    expect(component.users).toEqual(mockUsers);
    expect(component.users.length).toEqual(mockUsers.length);
  });

  // testing isLoading status
  it('should set isLoading to true while fetching users and then set it to false', () => {
    const mockUsers = [
      { id: 1, name: 'Virat Kohli', phone: '34256789', email: 'v@k.com' },
    ];

    userService.getUsers.mockReturnValue(of(mockUsers));
    // expecting isLoading to be true initially
    expect(component.isLoading).toBe(true);
    component.ngOnInit();

    fixture.detectChanges();

    fixture.whenStable().then(() => {
      // once res loaded -- isLoading should become false
      expect(component.isLoading).toBe(false);
    });
  });

  // TODO: check whether virat kohli is displayed in html element
  it('should display the mock data in html elements', () => {
    const mockUsers = [
      { id: 1, name: 'Virat Kohli', phone: '34256789', email: 'v@k.com' },
    ];

    userService.getUsers.mockReturnValue(of(mockUsers));

    // TODO: THIS IS INCOMPLETE -- WRITE THE LOGIC by refering calc.comp.spec.ts --for dynamic html content 
  });

});
