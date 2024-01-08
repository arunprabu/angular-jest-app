import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // Let's implement spy here
  it('should get users using a mocked Http Request', () => {
    // Having Mock response data
    const mockUsers = [
      { id: 1, name: 'Virat Kohli', phone: '34256789', email: 'v@k.com' },
      { id: 2, name: 'Steve Smith', phone: '78965434', email: 's@t.com' },
    ];

    // attach spy to target only http.get method of the service
    jest.spyOn(service.http, 'get').mockReturnValue(of(mockUsers));

    // call the getUsers
    service.getUsers().subscribe((users) => {
      console.log(users);
      expect(users).toEqual(mockUsers);
    });

    // Check if http.get was called with right api url
    expect(service.http.get).toHaveBeenCalledWith(
      'https://jsonplaceholder.typicode.com/users'
    );
  });

  //* You can try to spy on user by id logic also -- You need to create a component for it */
  it('should get user by id using a mocked Http Request', () => {
    // Having Mock response data
    const mockUser = { id: 1, name: 'Virat Kohli', phone: '34256789', email: 'v@k.com' };
     
    // attach spy to target only http.get method of the service
    jest.spyOn(service.http, 'get').mockReturnValue(of(mockUser));

    // call the getUsers
    service.getUserById().subscribe((user) => {
      console.log(user);
      expect(user).toEqual(mockUser);
    });

    // Check if http.get was called with right api url
    expect(service.http.get).toHaveBeenCalledWith(
      'https://jsonplaceholder.typicode.com/users/1'
    );
  });
});
