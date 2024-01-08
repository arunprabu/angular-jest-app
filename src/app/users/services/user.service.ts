import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(public http: HttpClient) {}

  createUser(userFormData: any) {
    console.log(userFormData);
    return this.http
      .post('https://jsonplaceholder.typicode.com/users', userFormData)
      .pipe(
        map((res: any) => {
          console.log(res);
          return res;
        })
      );
  }

  getUsers() {
    // https://jsonplaceholder.typicode.com/users
    // GET, HttpClient
    return this.http.get('https://jsonplaceholder.typicode.com/users') 
      .pipe(map((res: any) => {
        // console.log(res);
        return res;
      }));
  }

  getUserById() {
    // https://jsonplaceholder.typicode.com/users/1
    // GET, HttpClient
    return this.http.get('https://jsonplaceholder.typicode.com/users/1').pipe(
      map((res: any) => {
        // console.log(res);
        return res;
      })
    );
  }
}
