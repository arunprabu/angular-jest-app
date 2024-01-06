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
    this.userService.getUsers().subscribe((res: any) => {
      // console.log(res);
      this.users = res;
      this.isLoading = false;
    });
  }

}
