import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs';

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
    console.log('2. request received in Service');
    // https://jsonplaceholder.typicode.com/users
    // GET, HttpClient
    return this.http.get('https://jsonplaceholder.typicode.com/users') // this is observable 
      .pipe( // this is chaining on observable 
        map((res: any) => { // map is an operator
          console.log('3. Responsive arrived in Service');
          console.log(res); 
          // you can convert, filter, sort, remove, add, update
          return res;
        }),
        catchError( (err: any) => {
          console.log(err);
          return err;
        })
      );
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
