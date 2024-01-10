import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styles: [
  ]
})
export class ListUsersComponent implements OnInit {
  users: any[] = [];
  isLoading: boolean;

  constructor(public userService: UserService) {
    this.isLoading = true;
  }

  ngOnInit(): void {
    console.log('1. Sending request to load users');
    this.userService.getUsers()
      .subscribe((res: any) => { 
        console.log('4. Subscribing to the users data');
        console.log(res);
        this.users = res;
        this.isLoading = false;
      });
  }

}
